const express = require('express');

const app = express();
app.use(express.static('./src'));

app.get('/', (req, res)=>{
    res.sendFile('index.html', {root: __dirname});
    // startGame();
})

const PORT = 1234
app.listen(PORT, () =>{
    console.log(`Sever is running on port ${PORT}`);
})