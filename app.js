const express = require('express')
const app = express()

const hostname = '127.0.0.1'   // set constants
const port = 3002
var admin = express();
admin.on('mount', function(parent){
  console.log('Admin Mounted');
  console.log(parent);
})

admin.get('/',function(res,res){
  res.send('Admin Homepage');
})

app.use('/admin',admin);

app.get('/', function (req, res) {
  res.send('Welcome home!')
})

app.get('/hello', (req, res) => {
  res.send('Hello World!')
})

app.get('/big',  (req, res) =>{
  res.send('<h1>Hello World!</h1>')
})

app.get('/greeting/:id',  (req, res) =>{
  res.send('Hello! The id was ' + req.params.id)
})

app.get('/yo/:buddy',  (req, res) =>{
  res.send('<h1>Yo, ' + req.params.buddy + '!</h1>')
})

// handle non-existant routes
app.use((req, res, next) => {
  res.status(404).send('status 404 - that page was not found');
})

app.listen(port, hostname, () => {
  console.log(`Example app listening at http://${hostname}:${port}/`)
  console.log('Hit CTRL-C CTRL-C to stop\n')
})

