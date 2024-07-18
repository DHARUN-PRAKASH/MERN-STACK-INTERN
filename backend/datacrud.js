require("./base")
const express=require('express')
const router = express.Router()
const details = require('./data&type')
const bodyParser = require('body-parser')

router.use(bodyParser.urlencoded({extended:true}))
router.use(bodyParser.json())


// routers

// ADMIT

router.post("/admit",async(request,response)=>{
    const newpatient = new details(request.body)
    await newpatient.save()
    response.json(newpatient)
})

//  

// Discharge the patient using Name
router.delete('/discharge/:patientName',async(request,response)=>{
    const result = await details.deleteMany({patientName:{'$eq':request.params.patientName}})
    response.json(result)
})

// 

// Discharge the patient using ID
router.delete('/delete/:id',async(request,response)=>{
    const result = await details.findOneAndDelete({_id:{'$eq':request.params.id}})
    response.json(result)
})

// 

//Update Status By Issue

router.put('/update/:issue/:status',async(request,response)=>{
    const data = await details.updateMany({issue:{'$eq':request.params.issue}},{status:request.params.status})
    response.json(data)
})

// 

// Filter Details

router.get('/filter/:variable/:value', async (request, response) => {
    const variable = request.params.variable;
    const value = request.params.value;

    let query = {};
    query[variable] = value;

        const found = await details.find(query);
        console.log('Found:', found);
        response.json(found);

});     

// 

// Discharge the patient using Name
router.delete('/ageRemove/:age',async(request,response)=>{
    const result = await details.deleteMany({age:{'$gte':request.params.age}})
    response.json(result)
})

// 

// Discharge the patient using Name
router.delete('/statusRemove/:status',async(request,response)=>{
    const result = await details.deleteMany({status:{'$eq':request.params.status}})
    response.json(result)
})

// 


// Patient Details
router.get('/',async(request,response)=>{
    const tracks = await details.find()
    response.json(tracks)
})
// 


// Update using ID

router.put('/',async(request,response)=>{
    const data = await details.findByIdAndUpdate(id=request.body._id,request.body,{new:false})
    console.log(JSON.stringify(data))
    response.json(data)
})

// 

// GET BY ID
router.get('/:id',async(request,response)=>{
    const consignment = await details.findById(id=request.params.id)
    response.json(consignment)
})

// 


module.exports=router