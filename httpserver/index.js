// The http.createServer() method include request and response parameters which is supplied by node.js.

// The request object can be use to get information about the current HTTP request
// e.g., url, request header and data

// The response object can be used to send a response for current HTTP request

// If the response from the HTTP server is supposed to be dispalyed as HTML,
// You should include an HTTP header with the correct content type: 

const http = require("http");
const fs = require("fs");
const server = http.createServer((req,res)=>{

    const data = fs.readFileSync(`${__dirname}/userApi/userapi.json`, "utf-8");
    const objData = JSON.parse(data);
    // console.log(req.url);
    if(req.url == "/"){
        res.end("Hello from home sides");

    }else if(req.url == "/about"){
            res.end("Hello from AboutUs sides");
    }
    else if(req.url == "/contact"){
            res.end("Hello from contactUs sides");
    }
    else if(req.url == "/userapi"){
                res.writeHead(200, {"content-type": "application/json"})
                res.end(objData[0].name);
            }
    else{
        res.writeHead(404,{"content-type": "text/html"});
            res.end("<h1> 404 error page. page dosen't exit </h1>");
    }
}
);

server.listen(8000, "127.0.0.1" , ()=>{
    console.log("listening to te port no 8000");
});