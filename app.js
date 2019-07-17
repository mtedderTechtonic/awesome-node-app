var express = require('express')
const bodyParser = require('body-parser')

// console.log(global)
// const dateHelper = require('./dateModule');
// const {myDay,myMonth} = require('./dateModule')
// console.log(myDay())
// var app = express();
// app.use(bodyParser.json())

// app.get('/:walrus', (req, res) => {
//     console.log(req.params); // always comes back as a string
//     console.log(req.query); // always comes back as a string (parse to requested data type)
//     console.log(req.body); // always look at data before inserting into db
//      return res.status(200).send({myParam: req.params.walrus}) // exit status
// })

// module.exports = app;

const log = require('./logger')

console.log(log)
console.log(module)

log('message')