export const isPositiveInt = (value) =>
    Number.isInteger(value) && value > 0;
  
  export const normalizeSku = (sku) =>
    String(sku || '').trim().toUpperCase();
  
export const validateNewProductPayload = (body) => {
  const errors = [];

  // ALTERAÇÃO: Removida validação de ID obrigatório no payload
  // O ID agora é gerado automaticamente (auto-increment) no controller
  // if (body.id === undefined) errors.push('id é obrigatório (inteiro > 0).');
  // if (!isPositiveInt(Number(body.id))) errors.push('id deve ser inteiro positivo.');

  if (!body.name || String(body.name).trim().length === 0) errors.push('name é obrigatório.');
  if (body.price === undefined || isNaN(Number(body.price))) errors.push('price é obrigatório e deve ser numérico.');
  if (!body.sku || String(body.sku).trim().length === 0) errors.push('sku é obrigatório.');

  return errors;
};  export const validateUpdateProductPayload = (body) => {
    const errors = [];
    if (body.id !== undefined) errors.push('id não pode ser alterado.');
    if (body.price !== undefined && isNaN(Number(body.price))) errors.push('price deve ser numérico.');
    return errors;
  };
  