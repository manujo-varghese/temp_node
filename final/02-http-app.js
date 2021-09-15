const http = require('http')
const {readFileSync} = require('fs')

//get all files

const homePage = readFileSync('./navbar-app/index.html')
const homeImage = readFileSync('./navbar-app/logo.png')
const homeLogoic = readFileSync('./navbar-app/browser-app.js')
const homeStyles = readFileSync('./navbar-app/styles.css')
const server = http.createServer((req,res)=>{
    const url = req.url
    console.log(url)
    if (url === '/')
    {
        res.writeHead(200,{'content-type':'text/html'})
        res.write(homePage)
        res.end()
    }
    else if(url === '/about')
    {
        res.writeHead(200,{'content-type':'text/html'})
        res.write('<h1>About page </h1>')
        res.end() 
    }
    else if(url === '/styles.css')
    {
        res.writeHead(200,{'content-type':'text/css'})
        res.write(homeStyles)
        res.end() 
    }
    else if(url === '/logo.png')
    {
        res.writeHead(200,{'content-type':'image/png'})
        res.write(homeImage)
        res.end() 
    }
    else if(url === '/browser-app.js')
    {
        res.writeHead(200,{'content-type':'text/javascript'})
        res.write(homeLogoic)
        res.end() 
    }
    else{
        res.writeHead(400,{'content-type':'text/html'})
        res.write('<h1>Page not found</h1>')
        res.end()
    }

})
server.listen(5000)