// var config = require('./config');
var mongoose = require('mongoose');
require('dotenv').config()
mongoose.Promise = global.Promise;


const connectDb = async () => {

    //let connectQuery = `mongodb://${host}:${port}/${database_name}`
    let connectQuery = 'mongodb+srv://Ruah_raja:Ruah_raja@cluster0-ug8hd.mongodb.net/Chatapp?retryWrites=true&w=majority'

    try {
        mongoose.connect(connectQuery, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }, (err, res) => {
            if (res) {
                console.log('DB Connected')
            } else {
                console.log('err', err)
            }
        });
    } catch (error) {
        console.log('Db not connected', error)
        throw error
    }
}

module.exports = connectDb;