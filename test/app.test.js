const request = require('supertest');
const app = require('../app');
const knex = require('../db/knex');

describe('test db', () => {
  before(() => {
    knex.migrate.latest().then(() => {
      return knex.seed.run();
    });
  });
});
