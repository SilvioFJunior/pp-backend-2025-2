# Backend PP 2025/2

Este projeto é o backend para o **Projeto Piloto TEK de 2025/2**, focado no desenvolvimento da aplicação "Email da CT Junior". O objetivo principal é fornecer uma API robusta para gerenciamento de usuários e e-mails, abrangendo todas as funcionalidades planejadas no documento.

## 🚀 Tecnologias Empregadas

O desenvolvimento deste backend é baseado nas seguintes tecnologias obrigatórias:

* **TypeScript**
* **Prisma e Prisma Client**
* **Fastify**
* **Docker**
* **PostgreSQL**
* **Bcrypt**
* **Fastify JWT**

## 🛠️ Como Iniciar o Projeto

Para configurar e rodar o projeto localmente, siga os passos abaixo:

1.  **Instalar dependências:**
    ```bash
    npm i
    ```

2.  **Iniciar o banco de dados via Docker:**
    ```bash
    docker-compose up -d
    ```

3.  **Aplicar as migrações do banco de dados:**
    ```bash
    npx prisma migrate dev
    ```

4.  **Iniciar o servidor da aplicação:**
    ```bash
    npm run dev
    ```

## ⚙️ Gerenciamento da Aplicação

* **Parar o banco de dados:** Para interromper o serviço do banco de dados sem deletar os dados, use:
    ```bash
    docker-compose stop
    ```

* **Deletar o banco de dados e seus dados:** Para remover completamente o contêiner do banco de dados e todos os seus dados, execute:
    ```bash
    docker-compose down
    ```

## ⚠️ Observações Importantes

* Certifique-se de criar um arquivo `.env` com as variáveis de ambiente necessárias, seguindo o exemplo do `.env.example`.
* O projeto não deve utilizar inteligência artificial para a geração de código.
* Testes podem ser realizados diretamente via ferramentas como o Insomnia.
* Em caso de dúvidas ou problemas com Prisma, JWT ou Docker, contate **André**, **Enrico** ou **Sílvio**.

## ✅ Funcionalidades Implementadas

A API oferece as seguintes funcionalidades para interação com usuários e e-mails:

* **Login**: Permite que os usuários se autentiquem com e-mail e senha, recebendo um token JWT com expiração de 2 horas.
* **Cadastro**: Possibilita o registro de novos usuários com e-mail único, nome e senha. As senhas são armazenadas de forma encriptada. Retorna 409 em caso de e-mail duplicado.
* **Receber E-mails**: Retorna todos os e-mails recebidos pelo usuário autenticado, em ordem decrescente (mais recentes primeiro).
* **Editar Imagem de Perfil**: Permite a alteração da foto de perfil (link) do usuário autenticado via token JWT.
* **Editar Nome**: Permite a alteração do nome do usuário autenticado via token JWT.
* **Deletar E-mail**: Permite que o remetente de um e-mail o delete, **apenas** se o destinatário ainda não o visualizou.
* **Mandar E-mail**: Permite a criação e envio de um novo e-mail para um destinatário existente no banco de dados.
* **E-mails Enviados**: Retorna todos os e-mails enviados pelo usuário autenticado, em ordem decrescente.
* **Ver E-mail Específico**: Exibe um e-mail específico. O usuário autenticado deve ser o remetente ou o destinatário. Se o leitor for o destinatário, atualiza `jaVisto` para `true`.

## 📖 Orientações Adicionais

* A implementação da validação por **JWT** e da rota de login é prioritária, pois é fundamental para o front-end e para a autenticação das demais rotas.
* Os modelos de dados `User` e `Email` estão definidos no documento do projeto, incluindo tipos e valores padrão (como `jaVisto: false` e `data: now()`).
* Um usuário pode enviar um e-mail para si mesmo.
