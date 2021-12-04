const express = require("express");
const app = express();
const PORT = 9000;
app.get("/",(request,response)=> {
    response.send("hello world");
});

app.listen(PORT,()=>console.log("App is started in", PORT));



