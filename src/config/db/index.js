const mysql2 = require('mysql2');
const database_config = {
    host: 'localhost',
    user: 'root',
    port: 3306,
    password: '123456',
    database: 'demo',
    insecureAuth: 'true'
}
const database_config_2 = {
    host: 'localhost',
    user: 'root',
    port: 3306,
    password: '123456',
    database: 'demo2',
    insecureAuth: 'true'
}

const connection = mysql2.createConnection(database_config);
const connection2 = mysql2.createConnection(database_config);

// connection.connect((err) => {
//     if (err) console.log('Connect failure!!!')
//     else {
//         console.log('Connect succesfully!!!')
//     }
// })

// connection2.connect((err) => {
//     if (err) console.log('Connect 2 failure!!!')
//     else {
//         console.log('Connect 2 succesfully!!!')
//     }
// })

async function connect() {
    try {
        await mysql2.connect(database_config);
        console.log('Connected!!!');
        await mysql2.connect(database_config_2);
        console.log('Connected 2 !!!');
    } catch (error) {
        console.log('Connect failure!!!');
    }
};

module.exports = { connect }