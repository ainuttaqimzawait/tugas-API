const express = require('express');
const app = express();
const router = require('./routes');

app.use(router);
app.use((req, res, next) => {
    res.status(404)
    res.send({
        status: 'failed',
        message: 'rsource' + req.originalUrl + 'not found'
    })
})
app.listen(4050, () => console.log('server: http://localhost:4050'))