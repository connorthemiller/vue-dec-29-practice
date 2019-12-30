module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'mycoolapp',
    user: process.env.DB_USER || 'mycoolapp',
    password: process.env.DB_PASS || 'mycoolapp',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: './mycoolapp.sqlite'
    }
  }
}
