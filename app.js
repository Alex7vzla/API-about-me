const express = require("express");

const app = express();

app.get('/me', (req, res) => {
    console.log(req.method)
    res.status(200).json({
        name: 'Alejandro Aguilar',
        age: '25',
        pais: 'Venezuela',
        verb:req.method
    })
    
})

app.post('/metas',(req,res)=>{
    console.log(res.method)
    res.status(200).json({
        hobbies:
        ['Programar','Jugar futbol','Dibujar'],
        verb:req.method
    })
})

app.patch('/metas',(req,res)=>{
    console.log(res.method)
    res.status(200).json({
        metas:
        ['Trabajar en desarrollo web','Trabajar en equipos'],
        verb:req.method
    })
})

app.put('/business',(req,res)=>{
    console.log(res.method)
    res.status(200).json({
        business:
        ['Netflix','Naughty Dog','SpaceX'],
        verb:req.method
    })
})



app.listen(8000, () => {
    console.log('Server started at port 8000')
})
