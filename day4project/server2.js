let express = require("express")
let app = express()
let data = require("./data")
let bodyparser = require("body-parser")
app.use(bodyparser.json())

app.get("/api/wsproducts", (req,res) => {
    //res.send("My Products")
    res.json(data)    
})

app.get("/api/wsproducts/:id", (req,res) => {
    let reqId = req.params.id
    let product = data.filter((k) => k.id == reqId)   
    //(product.length > 0) ? res.json(product) : res.send("product not found: " +reqId)
    if(product.length > 0){
        res.json(product)        
    }else{
        res.send("product not found: " +reqId)
    }
    
    
})

app.post("/api/wsproducts" , (req,res) => {
    let newproduct = {
        id : data.length+1,
        name : req.body.name,
        price : req.body.price,
        description : req.body.description
    }
    data.push(newproduct)
    res.json(data)
})

app.delete("/api/wsproducts/:id", (req,res) =>{
    let pid = req.params.id;
    let idx = data.findIndex((e) => e.id == pid)
    data.splice(idx, 1)
    res.json(data)
})

app.put("/api/wsproducts/:id", (req,res) =>{
    let modifiedproduct = {
        id : req.params.id,
        name : req.body.name,
        price : req.body.price,
        description : req.body.description
    }
    let reqid = req.params.id;
    let idx = data.findIndex((e) => e.id == reqid)
    data[idx] = modifiedproduct
    res.json(data)
    
})

app.listen(5001, "localhost", ()=> {
    console.log("express server is running at port 5001")
})