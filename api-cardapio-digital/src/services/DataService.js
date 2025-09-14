import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default class DataService {
  constructor() {
    this.dataPath = path.join(__dirname, '../../data/products.json');
  }

  async readAll() {
    const raw = await fs.readFile(this.dataPath, 'utf8');
    return JSON.parse(raw);
  }

  async writeAll(products) {
    await fs.writeFile(this.dataPath, JSON.stringify(products, null, 2), 'utf8');
  }
}
