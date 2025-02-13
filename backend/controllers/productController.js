const productModel = require('../models/productModel')

exports.getProducts = async (req, res, next) => {

    const query = req.query.keyword ? {
        name: {
            $regex: req.query.keyword,
            $options: 'i'
        }
    } : {}

    const product = await productModel.find(query);

    res.status(200).json({
        success: true,
        product
    })
}

exports.getSingleProducts = async (req, res, next) => {

    const products = await productModel.findById(req.params.id)

    res.status(200).json({
        success: true,
        products
    })
}