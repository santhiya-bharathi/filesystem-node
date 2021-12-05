const fs = require("fs");
// fs is filesystem it's inbuildpackage
const content = "November-30/09:00AM";

const today = new Date();
console.log(today);

// writefile for create a file
fs.writeFile('./30november09am.txt',content,err =>{
    console.log("completed writing");
});

// readfile for read a file
fs.readFile('./30november09am.txt',"utf-8",(err,data) =>{
    console.log(data);
});

// output for readfile 
//November-30/09:00AM
