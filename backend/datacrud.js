const express=require('express')
const { default: mongoose } = require('mongoose')
const details = require('./data&type')
const bodyParser = require('body-parser')

const exp = express()

exp.use(bodyParser.urlencoded({extended:true}))
exp.use(bodyParser.json())

const uri = "mongodb+srv://dharunprakash:12345@cluster0.tttb0r3.mongodb.net/MEC?retryWrites=true&w=majority&appName=Cluster0";
const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

mongoose.connect(uri,clientOptions)

// routers

// ADMIT

exp.post("/admit",async(request,response)=>{
    const newpatient = new details(request.body)
    await newpatient.save()
    response.json(newpatient)
})

// 

// Discharge the patient using Name
exp.delete('/discharge/:patientName',async(request,response)=>{
    const result = await details.deleteMany({patientName:{'$eq':request.params.patientName}})
    response.json(result)
})

// 

//Update Status By Issue

exp.put('/update/:issue/:status',async(request,response)=>{
    const data = await details.updateMany({issue:{'$eq':request.params.issue}},{status:request.params.status})
    response.json(data)
})

// 

// Filter Details

exp.get('/filter/:variable/:value', async (request, response) => {
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
exp.delete('/ageRemove/:age',async(request,response)=>{
    const result = await details.deleteMany({age:{'$gte':request.params.age}})
    response.json(result)
})

// 

// Discharge the patient using Name
exp.delete('/statusRemove/:status',async(request,response)=>{
    const result = await details.deleteMany({status:{'$eq':request.params.status}})
    response.json(result)
})

// 


// Patient Details
exp.get('/',async(request,response)=>{
    const tracks = await details.find()
    response.json(tracks)
})
// 

exp.listen(1234,()=>{
    console.log("express connected!!!!!!!!!!!")
})