const express = require('express')
const bodyParser = require('body-parser')

const exp = express()

exp.use(bodyParser.urlencoded({extended:true}))
exp.use(bodyParser.json())

let tempData=[{
    "hospitalName":"Zealous Hospital",
    "hospitalAddress":"Salem",
    "hospitalSpeciality":["heart","lungs","brain","cancer","eye"]
},{
    "hospitalName":"Likkash Hospitals",
    "hospitalAddress":"Chennai",
    "hospitalSpeciality":["cancer","eye"]
},{ 
    "hospitalName":"ARRS Hospital",
    "hospitalAddress":"Chennai",
    "hospitalSpeciality":["heart","lungs"]
},{
    "hospitalName":"Ascar Hospital",
    "hospitalAddress":"Madurai",
    "hospitalSpeciality":["brain","cancer"]}]

exp.delete("/delete/:index",async(request,response)=>{
    tempData = tempData.filter((val,ind)=>{
        return ind!=request.params.index
    })
    response.json(tempData) 
})


exp.put("/deleteWithName",async(request,response)=>{
    const hospitalName = request.params.hospitalName
    const initialLength = tempData.length
    tempData = tempData.filter((hospital) => hospital.hospitalName !== hospitalName)
    
    if (tempData.length < initialLength) {
        response.json({"msg":`
            Hospital with name ${hospitalName} deleted successfully`})
    } else {
        response.json({"msg":`Hospital with name ${hospitalName} not found`})
    }

})

exp.put("/update",async(request,response)=>{
    for(var i=0;i<tempData.length;i++){
        if(tempData[i].hospitalName==request.body.hospitalName){
            tempData[i]=request.body
            response.json({"success":request.body})
            return
        }
    }
    response.json({"Failed":"Hospital not updated"})
})

exp.put("/change/:position",async(request,response)=>{
    const index = request.params.position
    tempData[index]=request.body
    response.json(tempData)
})

exp.get("/",async(request,response)=>{
    response.json({"records":tempData})
})

exp.post('/add',async(request,response)=>{
    const received = request.body
    tempData.push(received)
    console.log(tempData.length+" "+JSON.stringify(received))
    response.json({"msg":JSON.stringify(received)+"hospital added "})
})

exp.listen(1616,()=>{
    console.log('server running')
})