'use strict'
const DB_CONFIG = require("./config");
var mongoose = require("mongoose");
var app = require("./app");

mongoose.Promise = global.Promise;
mongoose.connect(DB_CONFIG.DB_MONGO, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
            console.log("Conexion a la base de datos establecida");
            
            app.listen(DB_CONFIG.PORT, () => {
                console.log(`Servidor corriendo correctamente en la url: ${DB_CONFIG.PORT}`)
            })
        }
    ).catch(err => console.log(err));
