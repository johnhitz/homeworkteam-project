const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
app = express()

const mongoURL = "mongodb://localhost:27017/bookmarks"
PORT = 3003

/**************************************************
Middleware
**************************************************/
app.use(express.json())
// const whitelist = ['http://localhost:3000', 'https://fathomless-sierra-68956.herokuapp.com']
// const corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true)
//     } else {
//       callback(new Error('Not allowed by CORS'))
//     }
//   }
// }
//
//  app.use(cors(corsOptions))

/**************************************************
Database Conection
**************************************************/
mongoose.connection.on('error', err => console.log(err.message + ' is Mongod not running?'))
mongoose.connection.on('disconnected', () => console.log('mongo disconnected'))

mongoose.connect('mongodb://localhost:27017/birds', { useNewUrlParser: true })
mongoose.connection.once('open', ()=>{
    console.log('connected to mongoose...')
})

const birdsController = require('./controllers/birds.js')
app.use('/birds', birdsController)


app.listen(PORT, () => {
  console.log('Listening on port', PORT);
})
