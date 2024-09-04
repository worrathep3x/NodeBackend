module.exports = {
  HOST: "127.0.0.1",
  USER: "postgres",
  PASSWORD: "youhirock001",
  DB: "postgres",
  dialect: "postgres",
  PORT:"5432",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
