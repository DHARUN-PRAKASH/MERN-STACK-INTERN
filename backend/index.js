const express = require('express');
const { Aggregate } = require('mongoose');
const app = express();

// const content = {"name":"Likkash",
//   "pair":"sabiri"
// }

// const html = ("<h1 style ='color:green'>LIKKKASH</h1>")


// app.get('/',async(req,res)=>{res.send(html  )})

// app.get('/marketing/:mrp/:discount/:sploffer',async(req,res)=>{
//   let success= (req.params.mrp)-(req.params.discount)-(req.params.sploffer );
//   res.json({success})

// }) 
app.listen(1616, () => {
  console.log("server online");
});