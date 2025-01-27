import mysql from 'serverless-mysql';
import {db} from './config.js';

export const pool = mysql({
  config: {
    user: db.user,
    password: db.password,
    host: db.host,
    port: db.port,
    database: db.database,
    ssl: {
      rejectUnauthorized: false
    },
    // Support for both MySQL 8 and 9
    authPlugins: {
      mysql_clear_password: () => () => Buffer.from(db.password + '\0'),
      caching_sha2_password: () => () => Buffer.from(db.password + '\0'),
      mysql_native_password: () => () => Buffer.from(db.password + '\0')
    }
  }
});
