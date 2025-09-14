export default class Product {
    constructor({ id, name, price, sku, description = '' }) {
      this.id = id;
      this.name = name;
      this.price = Number(price);
      this.sku = String(sku).trim();
      this.description = description;
    }
  }
  