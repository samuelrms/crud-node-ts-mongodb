# Crud de Usuários

Consiste em uma aplicação de CRUD para gerenciamento de usuários utilizando Node.js, TypeScript e MongoDB. O projeto foi desenvolvido com o intuito de demonstrar o uso de diversas tecnologias e conceitos, como: banco de dados NoSQL, design patterns, integração com serviços externos e validação de dados. A aplicação possui um conjunto de endpoints para cada operação do CRUD, que são acessados através de requisições HTTP. Além disso, a aplicação segue as boas práticas de desenvolvimento e é modularizada em diversos componentes para aumentar a facilidade de manutenção e escalabilidade.

## Stack utilizada

- Node,
- Express,
- Typescript

## Conceitos utilizados

- SOLID
- Injeção de Dependência (Dependency Injection)
- Repository Pattern
- Commits semânticos (padrão ilegra)

## Entidade relacional

```markdown
User {
id: string;
firstName: string;
lastName: string;
email: string;
cpf: string;
password: string;
birth: string;
}
```

## Rotas

- GET - **/users** - retorna os usuários salvos no banco
- GET - **/users/:id** - retorna um usuário pelo ID
- POST - **/users** - cria um usuário
- PATCH - **/users/:id** - atualiza um usuário
- DELETE - **/users/:id** - deleta um usuário

## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env

`PORT` (padrão: 3030)

`MONGODB_USERNAME`

---

Em caso de utilização do MongoCompass insira

`MONGODB_URL_COMPASS`

`MONGODB_PASSWORD_COMPASS`

---

Utilização do MongoAtlas

`MONGODB_URL_ATLAS`

`MONGODB_PASSWORD_ATLAS`

## Autor

- [@samuelrms](https://github.com/samuelrms)

![Logo](https://portifolio-samuel-rms.cdn.prismic.io/portifolio-samuel-rms/157f75df-8910-4713-96ec-1538617f4fa3_AvatarAndIconsAvatar.svg)
