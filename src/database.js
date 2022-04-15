const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/carrito01')
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err))