import mysql from 'serverless-mysql';

import {db} from './config.js';

export const pool = mysql({
  config: {
    user: db.user,
    password: db.password,
    host: db.host,
    port: db.port,
    database: db.database,
  }
})

