const fs = require("fs");

// fs.writeFile("read.txt" , "Today is awsome day:)" , (err)=> {
//     console.log("File is created");
//     console.log(err);
// })
// fs.appendFile("read.txt" , "Welcome to my channel" , (err)=>{
//     console.log("task completed");
// })
fs.readFile("read.txt", "utf-8" , (err,data)=>{
    console.log(data);
})