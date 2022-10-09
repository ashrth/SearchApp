const mongoose= require("mongoose")
mongoose.connect("mongodb://localhost:27017/SearchApp")
const express=require('express')
const Ad=require("./adModel")


const app=express()
app.use(express.json())

app.get('/:key', async(req, resp)=>{
    let data= await Ad.find(
        {
            "$or": [
                {
                    name: { $regex: req.params.key }  
                },
                {
                    company: { $regex: req.params.key }
                },
                {
                    category: { $regex: req.params.key }
                }
            ]
            
       }
    )
    resp.send(data)

})


app.listen(3000)


