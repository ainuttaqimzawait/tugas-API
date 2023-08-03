const router = require('express').Router();

router.get('/', (req, res) => {
    const { page, total } = req.query
    res.send({
        status: 'successfully',
        message: 'welcome to express js tutorial',
        study: 'express js',
        page,
        total
    });
});

router.get('/product/:id', (req, res) => {
    res.send({
        id: req.params.id
    });
});

router.get('/:category/:tag', (req, res) => {
    const { category, tag } = req.params
    res.send({
        category: category,
        tag: tag
    });
});

router.get('/contact', (req, res) => {
    res.send({
        nama: "Zawait",
        email: "zaw@gmail.com",
        noHp: "0987654321"
    });
});

module.exports = router;