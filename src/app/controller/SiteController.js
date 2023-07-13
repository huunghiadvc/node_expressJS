const mysql2 = require('mysql2');
const connection = require('../../config/db');

class NewsController {

    index(req, res) {
        res.render('home');
        console.log("Process : view list product");
        // connection.getConnection((err) => {
        //     connection.query('SELECT * FROM product_table', (err, result, fields) => {
        //         console.log(result);
        //     });
        // });
    }

    search(req, res) {
        res.render('search');
    }

    about(req, res) {
        res.render('about');
    }

    contact(req, res) {
        res.render('contact');
    }
};

module.exports = new NewsController;