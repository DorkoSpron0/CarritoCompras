const {Schema,model} = require('mongoose')

const Cart = new Schema({
    name: {type: String, required: true},
    cantidad: {type: Number, required: true, default: 1},
    precio: {type: Number, required: true},
    total: {type: Number, required: true, default: 0}
})

module.exports = model('Cart', Cart)