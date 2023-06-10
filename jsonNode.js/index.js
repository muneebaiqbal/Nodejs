// JSON stands for javascript object notation.
// JSON is lightwegth format for storing and transporting data.
// JSON is often used when data is sent fom server to webpage.

const fs = require("fs");
const bioData = {
    name : "Muneeba",
    age : 23,
    channel : "thapa technical",
};

// 1: convert to JSON
// 2: dusre file me add kardena ha 
// 3: readfile
// 4: again convert back to js obj ori
// 5: console.log()

const jsonData = JSON.stringify(bioData);
// fs.writeFile('json1.json',jsonData, (err)=>{
//     console.log("done")
// })

fs.readFile("json1.json", "utf-8",(err,data)=>{
    const orgData = JSON.parse(data);
    console.log(data);
    console.log(orgData);
})
