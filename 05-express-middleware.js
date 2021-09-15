const morgan = require('morgan')
const logger = require('./final/logger')
const authorize = require('./authrize')
//req => middleware =>res

app.use(morgan('tiny'))
app.get('/',(req,res)=>
{
   
    res.send('<h1>Home</h1>')
})

app.get('/about',(req,res)=>
{
    res.send('<h1>About</h1>')
})

app.get('/api/products',(req,res)=>
{
    res.send('<h1>Products</h1>')
})

app.get('/api/items',(req,res)=>
{
    console.log(req.user)
    res.send('<h1>Items</h1>')
})