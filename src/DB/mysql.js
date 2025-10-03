const mysql = require('mysql2');
const config = require('../config');

// Crear conexion con MySQL
const connection = mysql.createConnection({
    host: config.db.host,
    user: config.db.user,
    password: config.db.password,
    database: config.db.database,
});

// Conectar a la base de datos
connection.connect((err) => {
    if (err) {
        console.log('Error al conectar a MySQL', err);
        return;
    }
    console.log('Conectado a MySQL');
});

// Obtener todos los registros
function todos(tabla) {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM ${tabla}`, (err, results) => {
            if (err) return reject(err);
            resolve(results);
        });
    });
}

// Obtener un registro por ID
function uno(tabla, id) {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM ${tabla} WHERE id = ?`, [id], (err, results) => {
            if (err) return reject(err);
            resolve(results[0]); // solo un registro
        });
    });
}

// Agregar un nuevo registro
function agregar(tabla, data) {
    return new Promise((resolve, reject) => {
        connection.query(`INSERT INTO ${tabla} SET ?`, data, (err, result) => {
            if (err) return reject(err);
            resolve(result.insertId);
        });
    });
}

// Eliminar un registro por ID
function eliminar(tabla, id) {
    return new Promise((resolve, reject) => {
        connection.query(`DELETE FROM ${tabla} WHERE id = ?`, [id], (err, result) => {
            if (err) return reject(err);
            resolve(result.affectedRows > 0);
        });
    });
}

module.exports = {
    todos,
    uno,
    agregar,
    eliminar
};
