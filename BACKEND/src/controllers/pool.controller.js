const { Pool } = require('pg');

const pool = new Pool({
    host:'localhost',
    user: 'postgres',
    password: '',
    database:'contactos'
})



module.exports = {
    pool
}