## 📝 Sobre o Desafio

Este projeto foi desenvolvido como parte do **Desafio 05 da Escola DNC**, onde o objetivo era:

- ✅ Desenvolver uma API completa em Node.js
- ✅ Implementar todas as rotas CRUD (Create, Read, Update, Delete)
- ✅ Integrar a API com um frontend React fornecido
- ✅ Utilizar banco de dados para persistência
- ✅ Seguir boas práticas de desenvolvimento

O frontend foi fornecido como base, e o foco do desafio foi na construção da API backend com arquitetura bem estruturada.

## 🚀 Tecnologias Utilizadas

### Backend (Desenvolvido)
- **Node.js** - Runtime JavaScript
- **Express 5.1.0** - Framework web para criação da API
- **SQLite3 5.1.7** - Banco de dados leve e eficiente
- **Cors 2.8.5** - Middleware para permitir requisições cross-origin
- **Nodemon 3.1.11** - Auto-reload do servidor em desenvolvimento

### Frontend (Fornecido)
- React + Vite + React Router + Axios + Sass

## 📋 Pré-requisitos

- Node.js (versão 14 ou superior)
- npm ou yarn
- Git

## 🔧 Instalação

### 1. Clone o repositório

```bash
git clone <URL_DO_REPOSITORIO>
cd <NOME_DO_DIRETORIO>
```

### 2. Instale as dependências de todos os projetos

```bash
npm run install:all
```

Ou instale manualmente:

```bash
# Instalar dependências do backend
cd backend-dnc-biblioteca
npm install

# Instalar dependências do frontend
cd ../frontend-dnc-biblioteca
npm install
```

## ▶️ Executando o Projeto

### Modo Desenvolvimento - Executar Backend e Frontend Simultaneamente

Na raiz do projeto:

```bash
npm run dev
```

Este comando iniciará:
- **Backend**: http://localhost:3000
- **Frontend**: http://localhost:5173

### Executar Separadamente

**Apenas Backend:**
```bash
npm run dev:backend
```

**Rodar o backend em produção com NodeJS**
```bash
npm run start
```

**Apenas Frontend:**
```bash
npm run dev:frontend
```

## 📡 Rotas da API

### Base URL
```
http://localhost:3000
```

### Endpoints

#### 📖 Listar todos os livros
```http
GET /livros
```

**Resposta:**
```json
[
  {
    "id": 1,
    "title": "Clean Code",
    "pages": 464,
    "ISBN": "978-0132350884",
    "editorial": "Prentice Hall"
  }
]
```

#### 📖 Buscar livro por ID
```http
GET /livros/:id
```

**Resposta:**
```json
{
  "id": 1,
  "title": "Clean Code",
  "pages": 464,
  "ISBN": "978-0132350884",
  "editorial": "Prentice Hall"
}
```

#### ➕ Cadastrar novo livro
```http
POST /livros
```

**Body:**
```json
{
  "title": "Clean Code",
  "pages": 464,
  "ISBN": "978-0132350884",
  "editorial": "Prentice Hall"
}
```

#### ✏️ Atualizar livro
```http
PUT /livros/:id
```

**Body:**
```json
{
  "title": "Clean Code - Updated",
  "pages": 464,
  "ISBN": "978-0132350884",
  "editorial": "Prentice Hall"
}
```

#### 🗑️ Deletar livro
```http
DELETE /livros/:id
```

**Resposta:**
```json
{
  "mensagem": "Livro deletado com sucesso"
}
```

A API foi desenvolvida seguindo o padrão de arquitetura em camadas:

1. **Routes** → Define os endpoints e métodos HTTP
2. **Controllers** → Recebe requisições e retorna respostas
3. **Services** → Contém a lógica de negócio
4. **Repositories** → Interage diretamente com o banco de dados

## 🎨 Funcionalidades da API

- ✅ **POST /livros** - Cadastro de novos livros (ID gerado automaticamente)
- ✅ **GET /livros** - Listagem completa de todos os livros
- ✅ **GET /livros/:id** - Busca de livro específico por ID
- ✅ **PUT /livros/:id** - Atualização de informações de livros existentes
- ✅ **DELETE /livros/:id** - Exclusão de livros do sistema
- ✅ **CORS habilitado** - Permite integração com frontend em origem diferente
- ✅ **Arquitetura escalável** - Separação em camadas (MVC pattern)

## 🗄️ Banco de Dados

O projeto utiliza SQLite com a seguinte estrutura:

### Tabela: books

| Campo | Tipo | Descrição |
|-------|------|-----------|
| id | INTEGER | Chave primária (auto-incremento) |
| title | TEXT | Título do livro (obrigatório) |
| pages | INTEGER | Número de páginas |
| ISBN | TEXT | Código ISBN (único) |
| editorial | TEXT | Nome da editora |

## 🧪 Testando a API

Você pode testar a API usando ferramentas como:
- **Insomnia**
- **Postman**
- **cURL**

Exemplo com cURL:

```bash
# Listar todos os livros
curl http://localhost:3000/livros

# Criar um novo livro
curl -X POST http://localhost:3000/livros \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Clean Code",
    "pages": 464,
    "ISBN": "978-0132350884",
    "editorial": "Prentice Hall"
  }'
```

## 📦 Scripts Disponíveis

```json
{
  "dev": "Executa backend e frontend simultaneamente",
  "dev:backend": "Executa apenas o backend",
  "dev:frontend": "Executa apenas o frontend",
  "install:all": "Instala dependências de todos os projetos"
}
```

### Banco de dados não criado
O banco é criado automaticamente na primeira execução. Certifique-se de ter permissões de escrita na pasta do backend.