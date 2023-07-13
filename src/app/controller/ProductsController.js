class NewsController {

    index(req, res) {
        res.render('product');
    }

    show(req, res) {
        res.send('new Slug!!!');
    }

};

module.exports = new NewsController;