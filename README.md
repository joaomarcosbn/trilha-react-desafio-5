# 📝 Next.js Blog | Trilha React - Desafio 5 (DIO)

Este projeto é a resolução do Desafio 5 da Trilha React da [DIO](https://www.dio.me/). Partindo de um template de blog estático construído com Next.js e Tailwind CSS, o objetivo foi transformar a aplicação em um sistema dinâmico e _Full Stack_, consumindo uma API REST real e implementando autenticação de usuários.

## 🚀 Tecnologias Utilizadas

- **[Next.js](https://nextjs.org/)** (React Framework)
- **[Tailwind CSS](https://tailwindcss.com/)** (Estilização)
- **[Supabase](https://supabase.com/)** (Banco de dados PostgreSQL / API REST)
- **[NextAuth.js](https://next-auth.js.org/)** (Autenticação / OAuth)
- **[Axios](https://axios-http.com/)** (Cliente HTTP)

## ✨ Funcionalidades Implementadas

- **Listagem Dinâmica:** Busca e exibição de todos os posts cadastrados no banco de dados (Supabase) na página inicial.
- **Rotas Dinâmicas (`/posts/[id]`):** Geração de páginas individuais para cada post baseado no seu ID.
- **Autenticação Social:** Login integrado com o GitHub utilizando NextAuth.
- **Área Restrita (`/novo-post`):** Rota protegida (acessível apenas para usuários logados) com formulário para criação e publicação de novos posts diretamente no banco de dados.

## 🗄️ Estrutura do Banco de Dados (Supabase)

Para rodar este projeto localmente, é necessário criar uma tabela chamada `posts` no Supabase com as seguintes colunas:

| Nome da Coluna | Tipo          | Descrição                                |
| :------------- | :------------ | :--------------------------------------- |
| `id`           | `uuid`        | Chave primária (gerada automaticamente)  |
| `created_at`   | `timestamptz` | Data de criação (gerada automaticamente) |
| `title`        | `varchar`     | Título do post                           |
| `description`  | `text`        | Breve resumo do post                     |
| `body`         | `text`        | Conteúdo principal do post               |

_(Lembre-se de desativar o RLS - Row Level Security da tabela para permitir a leitura pública dos posts, ou configurar as políticas de acesso adequadas)._

## ⚙️ Como executar o projeto localmente

**1. Clone o repositório:**

```bash
git clone [https://github.com/joaomarcosbn/trilha-react-desafio-5.git](https://github.com/joaomarcosbn/trilha-react-desafio-5.git)
cd trilha-react-desafio-5

## ⚙️ 2. Instale as dependências:

Você pode usar o Yarn (recomendado para este projeto) ou o NPM.

yarn install

## 3. Configure as Variáveis de Ambiente:
Renomeie o arquivo .env.example para .env.local e preencha com as suas credenciais do Supabase e do seu OAuth App do GitHub:

Snippet de código
NEXT_PUBLIC_SUPABASE_URL=sua_url_do_supabase
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua_publishable_key

GITHUB_ID=seu_client_id_do_github
GITHUB_SECRET=seu_client_secret_do_github
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=uma_chave_secreta_segura_aqui

**4. Inicie o servidor de desenvolvimento:**

Bash
yarn dev
O aplicativo estará disponível em http://localhost:3000.

👨‍💻 Autor
Desenvolvido por João Marcos no escopo da Trilha de React.
```
