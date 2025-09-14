import DataService from '../services/DataService.js';
import Product from '../models/produtoModel.js';
import { isPositiveInt, normalizeSku, validateNewProductPayload, validateUpdateProductPayload } from '../utils/validators.js';

const dataService = new DataService();

/** GET /products */
export const getAllProducts = async (req, res) => {
  const products = await dataService.readAll();
  return res.json({ success: true, data: products });
};

/** GET /products/:id */
export const getProductById = async (req, res) => {
  const id = Number(req.params.id);

  if (!isPositiveInt(id)) {
    return res.status(400).json({
      success: false,
      message: 'ID inválido. Use um inteiro positivo.',
    });
  }

  const products = await dataService.readAll();
  const found = products.find((p) => p.id === id);

  if (!found) {
    return res.status(404).json({
      success: false,
      message: 'Produto não encontrado.',
    });
  }

  return res.json({ success: true, data: found });
};

/** POST /products */
export const createProduct = async (req, res) => {
  const errors = validateNewProductPayload(req.body);
  if (errors.length) {
    return res.status(400).json({ success: false, message: 'Payload inválido.', errors });
  }

  const products = await dataService.readAll();
  const id = Number(req.body.id);
  const skuNorm = normalizeSku(req.body.sku);

  // Regras de negócio
  if (products.some((p) => p.id === id)) {
    return res.status(409).json({ success: false, message: 'Já existe produto com este ID.' });
  }
  if (products.some((p) => normalizeSku(p.sku) === skuNorm)) {
    return res.status(409).json({ success: false, message: 'Já existe produto com este SKU.' });
  }

  const newProduct = new Product({
    id,
    name: req.body.name,
    price: req.body.price,
    sku: skuNorm,
    description: req.body.description || '',
  });

  products.push(newProduct);
  await dataService.writeAll(products);

  return res.status(201).json({
    success: true,
    message: 'Produto criado com sucesso.',
    data: newProduct,
  });
};

/** PUT /products/:id */
export const updateProduct = async (req, res) => {
  const id = Number(req.params.id);
  if (!isPositiveInt(id)) {
    return res.status(400).json({ success: false, message: 'ID inválido. Use um inteiro positivo.' });
  }

  const payloadErrors = validateUpdateProductPayload(req.body);
  if (payloadErrors.length) {
    return res.status(400).json({ success: false, message: 'Payload inválido.', errors: payloadErrors });
  }

  const products = await dataService.readAll();
  const idx = products.findIndex((p) => p.id === id);
  if (idx === -1) {
    return res.status(404).json({ success: false, message: 'Produto não encontrado.' });
  }

  // Se alterar SKU, manter unicidade (case-insensitive)
  if (req.body.sku !== undefined) {
    const newSkuNorm = normalizeSku(req.body.sku);
    const dupSku = products.some(
      (p, i) => i !== idx && normalizeSku(p.sku) === newSkuNorm
    );
    if (dupSku) {
      return res.status(409).json({ success: false, message: 'Já existe produto com este SKU.' });
    }
    products[idx].sku = newSkuNorm;
  }

  if (req.body.name !== undefined) products[idx].name = String(req.body.name);
  if (req.body.price !== undefined) products[idx].price = Number(req.body.price);
  if (req.body.description !== undefined) products[idx].description = String(req.body.description);

  await dataService.writeAll(products);

  return res.json({ success: true, message: 'Produto atualizado com sucesso.', data: products[idx] });
};

/** DELETE /products/:id */
export const deleteProduct = async (req, res) => {
  const id = Number(req.params.id);
  if (!isPositiveInt(id)) {
    return res.status(400).json({ success: false, message: 'ID inválido. Use um inteiro positivo.' });
  }

  const products = await dataService.readAll();
  const idx = products.findIndex((p) => p.id === id);
  if (idx === -1) {
    return res.status(404).json({ success: false, message: 'Produto não encontrado.' });
  }

  const removed = products.splice(idx, 1)[0];
  await dataService.writeAll(products);

  return res.json({ success: true, message: 'Produto removido com sucesso.', data: removed });
};
