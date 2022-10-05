const {MongoClient}= require('mongodb')
const express=require('express')
const url= 'mongodb://localhost:27017'
const databaseName='SearchApp'
const client= new MongoClient(url)
const app=express()

app.get('/ads', async(req, resp)=>{
    let result= await client.connect()
    let db= result.db(databaseName)
    let collection= db.collection('Ads')
    let data= await collection.find().toArray()
    if(data.length>0){
        resp.send(data)
    } else{
        resp.send({result:"No Ad Found"})
    }
    

})

app.get("/search/:key", async(req,resp)=>{
    let result= await client.connect()
    let db= result.db(databaseName)
    let collection= db.collection('Ads')
    let data= await collection.find(
        {
             "$or":[
                {name:{$regex:req.params.key}}
            ]
                [
                    {headline:{$regex:req.params.key}}

                ]
             
        }
    )
    resp.send(data)
    
})

app.listen(3000)


