# 🍽️ Cardápio Digital - Projeto Mobile + Painel Web + API

Este projeto tem como objetivo criar um sistema completo de **Cardápio Digital**, composto por:

- 📱 Um **aplicativo mobile** para que os clientes visualizem os produtos disponíveis (React Native + Expo)
- 🖥️ Um **painel web administrativo** para o restaurante cadastrar e editar produtos (React.js)
- ⚙️ Uma **API REST** para centralizar os dados e permitir a integração entre o app e o painel (Node.js + Express)

---

## 📁 Estrutura planejada do projeto


---

## 🎯 Objetivo Geral

Oferecer uma solução digital acessível para estabelecimentos gastronômicos exibirem seus produtos aos clientes de forma moderna, e gerenciarem os produtos via painel de administração conectado à mesma base de dados.

---

## ✅ Funcionalidades por módulo

### 📱 App Mobile (React Native + Expo)

- [x] Listagem de categorias e produtos
- [x] Tela de detalhes com imagem, ingredientes e alérgenos
- [ ] Filtros e busca de pratos
- [ ] Adaptação responsiva para tablets
- [ ] Integração com API RESTful

### 🖥️ Painel Web (React.js)

- [ ] Login da empresa (futuro)
- [ ] Cadastro de produtos
- [ ] Edição e exclusão de pratos
- [ ] Listagem em tempo real dos dados cadastrados

### ⚙️ API REST (Node.js + Express)

- [x] Listagem de produtos via endpoint `/produtos`
- [x] Cadastro de produtos via `POST`
- [ ] Integração com banco de dados (futuro)
- [ ] Autenticação de usuários para painel admin (futuro)

---

## 🛠 Tecnologias utilizadas

| Módulo        | Tecnologias                         |
|---------------|--------------------------------------|
| App Mobile    | React Native, Expo, React Navigation |
| Painel Web    | React.js, Axios                     |
| API           | Node.js, Express, CORS, JSON        |

---

## 📌 Requisitos

- Node.js (versão 18+ recomendada)
- Expo CLI instalado globalmente
- Navegador Google Chrome (para o painel)
- Dispositivo físico ou emulador Android/iOS para testes mobile

---

## 🚀 Como rodar o projeto (inicial)

```bash
# Clone o projeto
git clone https://github.com/seu-usuario/meu-cardapio-digital.git
cd meu-cardapio-digital

# Iniciar o app mobile
cd app
npm install
npx expo start

