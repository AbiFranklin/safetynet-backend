// Update with your config settings.

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/safetynet',
  },

  test: {
    client: 'pg',
    connection: 'postgres://localhost/test-safetynet',
  },
};
