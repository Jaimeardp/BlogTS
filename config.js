module.exports = {
  port: process.env.PORT || 3000,
  db: process.env.MONGODB_URI || 'mongodb://localhost:27017/miBlog',
  SECRET_TOKEN: 'miclavedetokens',
  tokenexp: 3600,
}