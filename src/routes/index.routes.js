const { Router } = require("express");
const mongoose = require("mongoose");
const router = Router()
const Cart = require('../models/Cart')


router.get('/', (req,res) => {
    res.send('Main Page')
})

router.get('/carrito', async (req,res) => {
    const articulo = await Cart.find()
    res.send(articulo)
})

router.post('/carrito', async(req,res) => {
    const {name,precio,cantidad} = req.body
    const articulo = new Cart({name,precio,total: cantidad*precio})
    await articulo.save()
    res.json({message: 'Añadido correctamente'})
})

router.get('/carrito/compra', async (req,res) => {
    const collections = await mongoose.connection.db.collections()
    const articulo = await Cart.find()

    if(articulo.length === 0){
        return res.status(200).send({message: "Mi loco está vacio"});
    }else {
        for (let collection of collections) {
            collection.deleteMany()
        }
    }

    res.send('Lista borrada')
})

module.exports = router