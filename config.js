var secrets;

if (process.env.NODE_ENV !== 'production') {
  secrets = require('./secrets.json');
}

module.exports = {
  port: 1337,
  DB_USERNAME: process.env.DB_USERNAME || secrets.DB_USERNAME,
  DB_PASSWORD: process.env.DB_PASSWORD || secrets.DB_PASSWORD,
  S3_NAME_PREFIX: process.env.S3_NAME_PREFIX || secrets.S3_NAME_PREFIX,
  S3_REGION: process.env.S3_REGION || secrets.S3_REGION,
  S3_ACCESS_KEY: process.env.S3_ACCESS_KEY || secrets.S3_ACCESS_KEY,
  S3_SECRET_KEY: process.env.S3_SECRET_KEY || secrets.S3_SECRET_KEY,
  S3_BUCKET: process.env.S3_BUCKET || secrets.S3_BUCKET,
  JWT_SECRET: process.env.JWT_SECRET || secrets.JWT_SECRET
};
