
In project are used:
* Materialize - front-end framework based on Material Design
* SEQUELIZE Docs  [https://sequelize.org/docs/v6/getting-started/](https://sequelize.org/docs/v6/getting-started/)
* NEST DOCS [https://docs.nestjs.com/recipes/sql-sequelize](https://docs.nestjs.com/recipes/sql-sequelize)

Needed to install
* npm install --save sequelize sequelize-typescript mysql2
* npm install --save pg pg-hstore
* npm install --save-dev @types/sequelize
* npm install --save sequelize
* "@nestjs/sequelize": "^9.0.0",
* cross env for DEV and PROD
# Задание
На платформе своей специализации (JavaScript/TypeScript+React+Node.js+Express+ MySQL или
 .NET/Core+C#+ASP.NET+SQL Server) реализовать Web-приложение, которое позволяет пользователям зарегистрироваться и аутентифицироваться. 

Неаутентифицированные пользователи не имеют доступа к управлению пользователями 
(могут достучаться только к форме регистрации или форме аутентификации).

* /users/getUsers GET
* /users/create POST
* /users/getUser GET
* /users/update PUT
* /users/delete DELETE
* /auth/signup - registration
* /auth/signin - login
* /auth/refresh
*

Аутентифицированные пользователи видят таблицу "пользователи" (
* идентификатор, 
* именем, 
* мылом, 
* датой регистрации, 
* датой последнего логина, 
* статусом
) с пользователями.

Таблица левой колонкой содержит чек-боксы для множественного выделения, 
в заголовке колонки чек-бокс "выделить все/снять выделение". 

Над таблицей тулбар с действиями: Block, Unblock, Delete (два последних можно и лучше иконками). 

Таблица, множественное выделение, тулбар — обязательно. 

Обязательно использование 
CSS-фреймворка (рекомендация — Bootstrap, но он не обязателен, можно любой другой).
Пользователь может удалить или заблокировать себя — при этом сразу должен быть разлогинен. 
Если кто-то другой блокирует или удаляет пользователя, то при любом следующем действии 
пользователь переправляется на страницу логина.

При регистрации должна быть возможность использовать любой пароль, даже из одного символа.
Заблокированный пользователь не может войти, удаленный может заново зарегистрироваться.

При отправке задания на p.lebedev@itransition.com указать ФИО (можно без О) и следующие ссылки:
* Cсылка на Github.
* Cсылка на задеплоенный проект (без разницы где — Azure, Heroku, что угодно).
* Записанное видео, в котором отображается с задеплоенного сайта: регистрация, вход, 
выделение одного пользователя (не себя), его блокировка и демонстрация результата (статус в таблице обновился), 
разблокировка этого пользователя, выделение всех пользователей через клик на чекбокс в заголовке таблице, 
блокировка всех (включая себя) нажатием кнопки на тулбаре "Block" 
(так как себя, то с автомагическим переходом на страницу входа). 



<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
