const express = require('express')
const path= require('path')
const app = express()
const port = 3000

app.use('/static', express.static('/images'));

// app.get('/socialmedia', (req,res) =>{
//     res.sendFile(path.join(__dirname, 'index (2).html'));
// })

app.listen(port, () =>{
    console.log("listening on port 3000");
})
