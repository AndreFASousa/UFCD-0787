const express = require('express')
const path = require('path')
const mysql = require('mysql2')
require('dotenv').config({path: './.env'})
const app = express()
 
app.use(express.static('./public'))

app.get('/', (req, res) => {
   res.sendFile(path.join(__dirname, 'public/index.html'))
})

app.get('/gesalunos', (req, res) => {
    connection.query('SELECT * FROM alunos', function(err,result){
      if(err){
        console.log(err)
      }else{
        res.json(result)
      }
    })
  })

const connection = mysql.createConnection({

    host : process.env._HOST,
    user : process.env._USERNAME,
    password : process.env._PASSWORD,
    database : process.env._DATABASE,
    port : process.env._PORT,
})

connection.connect(function(err){
    if(err){
    throw err
    }else {
    console.log('Damn you good son... Connected to database MYSQL ' + process.env._DATABASE)
    }
})

const port = 3000
 
app.listen(port, () =>  {
    console.log(`listening on port ${port}`)
}
)