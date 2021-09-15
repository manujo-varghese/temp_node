
const express = require('express');
const app = express();
let {people} = require('./data')


//static assests
app.use(express.static('./final/methods-public'))
//parse form data
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.get('/api/people',(req,res)=>
{
res.status(200).json({sucess:true,data:people})
})


app.post('/api/people',(req,res)=>{
    const {name}= req.body;
   
    if(!name){
        return res.status(400).json({sucess:false,msg:'please provide name'})
    }
    res.status(201).send({sucess:true,person:name})
})
app.post('/login',(req,res)=>
{
    const name=req.body.name;
    if(name)
    {
        return res.status(200).send('Welcome '+name)
    }
    //console.log(req.body.name)
   res.status(401).send('Please provide credentilas')
})
app.listen(5000,()=>
{
    console.log('server is listening on port 5000')
})