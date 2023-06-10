const fs = require("fs");

// creating a new file
// fs.writeFileSync("read.txt" , "Welcome to my channel");
// fs.writeFileSync("read.txt" , "thapa technical, Welcome to my channel");

// fs.appendFileSync("read.txt" , " \nHow are you I am fine Thank You:");
//  const buf_data = fs.readFileSync("read.txt");
//  org_data = buf_data.toString();
//  console.log(org_data);
 
// to rename the file

fs.renameSync("read.txt" , "readwrite.txt");