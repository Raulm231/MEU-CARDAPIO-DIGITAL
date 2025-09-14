import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import productsRouter from '../src/routes/produtoRoutes.js';

const app = express();
app.use(cors({ origin: '*' }));
app.use(express.json());

app.get('/', (req, res) => res.json({ success: true, message: 'API Cardápio OK' }));
app.get('/health', (req, res) => res.send('ok'));
app.use('/products', productsRouter);

app.use((req, res) => res.status(404).json({ success: false, message: 'Rota não encontrada' }));

const PORT = process.env.PORT || 3333;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ API rodando em http://localhost:${PORT}`);
});
