const { application } = require('express');
const express = require('express');
const {products,people} = require('./data')
const app = express();


app.get('/',(req,res)=>
{
    res.send('<h1>Home page</h1><a href="/api/products">Products</a>')
})
app.get('/api/products',(req,res)=>
{
    const newProducts = products.map((products)=>
    {
        const {id,name,image}=products;
        return {id,name,image}
    })
    return res.json(newProducts)
})
app.get('/api/products/:productID',(req,res)=>
{
    // console.log(req)
    // console.log(req.params)
    const {productID} = req.params;
    const singleProduct = products.find((product)=>product.id === Number(productID))
    if(!singleProduct){
        return res.status(404).send('Product does not exist')
    }
   return res.json(singleProduct)

})

app.get('/api/products/:productID/reviews/:reviewID',(req,res)=>
{
    console.log(req.params)
   return res.send('Hello world !')
})


app.get('/api/v1/query',(req,res)=>
{
    const {search,limit} = req.query
    //console.log(req.query)
    let sortedProducts = [...products];
    if(search){
        sortedProducts = sortedProducts.filter((product)=>
        {
            return product.name.startsWith(search)
        })
    }
    if(limit){
        sortedProducts = sortedProducts.slice(0,Number(limit))
    }
    if(sortedProducts.length <1)
    {
        //res.status(200).send('<h1>No products matching condition</h1>')
      return  res.status(200).json({sucess:true,data:[]})
    }
    return res.status(200).json(sortedProducts)
    
    //res.send('Hello world !')
})

app.listen(5000,()=>
{
    console.log('server is listening on port 5000')
})