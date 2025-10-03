require ('dotenv').config();

const config = {
    app: {
        port: process.env.PORT || 4000,
    },
    db: {
        host: process.env.DB_HOST || 'localhost',
        user: process.env.DB_USER || 'admin',
        password: process.env.DB_PASSWORD || 'admin1969',
        database: process.env.DB_DATABASE || 'nodecrud',
    }
}

module.exports = config;