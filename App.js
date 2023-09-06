const express = require ('express')
const app = express ();

app.get('/',(req,res)=>{
    res.send('Yes It is Working')
});

app.listen(2000);