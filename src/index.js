const express = require('express');

const app = express();
app.use('/', (req, res)=>{
    res.sendFile('index.html', {root: __dirname});
})

const PORT = 8080
app.listen(PORT, () =>{
    console.log(`Sever is running on port ${PORT}`);
})