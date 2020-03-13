const express = require('express');
const app = express();
const PORT = 3000;


// res.send('Hello world')

app.get('/', (req, res) => {
    res.send('Hello world')    
})
app.listen(PORT, ()=> {
    console.log('Listening on port', PORT)
})
