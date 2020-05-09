<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[travis-image]: https://api.travis-ci.org/nestjs/nest.svg?branch=master
[travis-url]: https://travis-ci.org/nestjs/nest
[linux-image]: https://img.shields.io/travis/nestjs/nest/master.svg?label=linux
[linux-url]: https://travis-ci.org/nestjs/nest

## Description

[NestJS](https://github.com/nestjs/nest) framework TypeScript starter repository with the most important components.


## Features
- Modularized project
- [API](http://127.0.0.1:3000/doc) Rest ready on http://127.0.0.1:3000/api/v0/
- Development, Production environment ready
- Passport, JWT security implemented
- NestJS Middelware implemented
- NestJS Interceptor implemented
- NestJS Filter implemented
- Mongodb connection ready
- Express server configured
- [Swagger](http://127.0.0.1:3000/doc) API Document on http://127.0.0.1:3000/doc

## Requirements
- Mongodb instance on localhost, default port
- For production set environment variable: "prod"

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
$ npm run build
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