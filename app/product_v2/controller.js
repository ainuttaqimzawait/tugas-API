const sequelize = require("../../config/sequelize");
const Product = require('./model');
const fs = require('fs');
const path = require('path');

const index = async (req, res) => {
    try {
        await Product.sync();
        const result = await Product.findAll();
        res.send({
            status: 'success',
            Response: result
        });
    } catch (e) {
        res.send(e);
    }
};

const view = async (req, res) => {
    try {
        await Product.sync();
        const result = await Product.findAll({
            where: {
                Id: [req.params.id]
            }
        });
        res.send({
            status: 'success',
            Response: result
        });
    } catch (e) {
        res.send(e);
    }
};

const destroy = async (req, res) => {
    try {
        await Product.sync();
        const result = await Product.findAll({
            where: {
                Id: [req.params.id]
            }
        });
        res.send({
            status: 'success',
            Response: result
        });
        await Product.destroy({
            where: {
                Id: [req.params.id]
            }
        });
    } catch (e) {
        res.send(e);
    }
};

const store = async (req, res) => {
    const { users_id, name, price, stock, status } = req.body;
    const image = req.file;
    if (image) {
        const target = path.join(__dirname, '../../uploads', image.originalname);
        fs.renameSync(image.path, target)
        try {
            await Product.sync();
            const result = await Product.create({ users_id, name, price, stock, status, image_url: `http://localhost:3000/public/${image.originalname}` });
            res.send({
                status: 'success',
                Response: result
            });
        } catch (e) {
            res.send(e);
        }
    }
};

const update = async (req, res) => {
    const { users_id, name, price, stock, status } = req.body;
    const image = req.file;
    if (image) {
        const target = path.join(__dirname, '../../uploads', image.originalname);
        fs.renameSync(image.path, target)
        try {
            await Product.sync();
            await Product.update({
                users_id,
                name,
                price,
                stock,
                status,
                image_url: `http://localhost:3000/public/${image.originalname}`
            }, {
                where: {
                    Id: [req.params.id]
                }
            });
            const result = await Product.findAll({
                where: {
                    Id: [req.params.id]
                }
            });
            res.send({
                status: 'success',
                Response: result
            });
        } catch (e) {
            res.send(e);
        }
    }
};

module.exports = {
    index,
    view,
    destroy,
    store,
    update
};