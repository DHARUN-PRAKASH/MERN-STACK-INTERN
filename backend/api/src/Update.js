import React from "react";
import { useState,useEffect } from "react";
import Container from '@mui/material/Container';
import BackspaceIcon from '@mui/icons-material/Backspace';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { callFetchOne, callPost, callUpdate } from "./axios";
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import { FormControl } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";





export const Update = () => {

    const{id}=useParams()
  const [logistics, setLogistics] = useState({
    _id:0,
    patientId: 0,
    patientName: "",
    age: 0,
    bloodGroup: "",
    address: "",
    contact: 0,
    issue: "",
    status: ""
  });

  const collecting = (eve) => {
    const { name, value } = eve.target;
    setLogistics((old) => ({
      ...old,
      [name]: value
    }));
  };
  const navi=useNavigate()

  const publish = async () => {
    const t = await callUpdate(logistics);
    alert(JSON.stringify(t.data));
    navi('/')

  };

  const gatherInfo=async()=>{
    const t = await callFetchOne(id)
    setLogistics(t.data)
    
}
  useEffect(()=>{
    gatherInfo()
},[])

  return (
    <div>
     
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg- rounded-2 shadow-lg " style={{ marginTop: '50px' }}>
          
          <Grid container spacing={2}>
          <Grid item xs={12} md={6} lg={6} >
              <TextField
              style={{color:'#1e2772'}}
                fullWidth
              
                onChange={collecting}
                name="patientId"
                value={logistics.patientId}
                label="Patient Id"
                variant="filled"
                
              />
            </Grid>
          <Grid item xs={12} md={6} lg={6}>
              <TextField
                fullWidth
                onChange={collecting}
                value={logistics.patientName}
                name="patientName"
                label="Patient Name"
                variant="filled"
              />
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <TextField
                fullWidth
                color="primary"
                onChange={collecting}
                value={logistics.age}
                name="age"
                label="Age"
                variant="filled"
              />
            </Grid>
          <Grid item xs={12} md={6} lg={6}>
              <TextField
                fullWidth
                color="primary"
                onChange={collecting}
                name="bloodGroup"
                value={logistics.bloodGroup}
                label="Blood Group"
                variant="filled"
              />
            </Grid>
          <Grid item xs={12} md={6} lg={6}>
              <TextField
                fullWidth
                color="primary"
                name="contact"
                onChange={collecting}
                value={logistics.contact}
                label="Contact"
                variant="filled"
              />
            </Grid>
          <Grid item xs={12} md={6} lg={6}>
              <TextField
                fullWidth
                color="primary"
                onChange={collecting}
                name="issue"
                value={logistics.issue}
                label="Issue"
                variant="filled"
              />
            </Grid>
            
            <Grid item xs={12} md={12} lg={12}>
            <FormControl fullWidth>
  
            <InputLabel id="demo-simple-select-label">Status</InputLabel>
              <Select
                
                id="status"
                value={logistics.status}
                label="Status"
                variant="outlined"
                onChange={collecting}
                name="status"
              >
                <MenuItem value="Admit">Admit</MenuItem>
                <MenuItem value="Discharged">Discharged</MenuItem>
                <MenuItem value="Terminated">Terminated</MenuItem>
              </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={12} lg={12}>
              <TextField
                fullWidth
                variant="outlined"
                color="primary"
                onChange={collecting}
                value={logistics.address}
                placeholder="Address"
                name="address"
                label="Address"
                multiline
              />
            </Grid>
          </Grid>
              <Grid container spacing={2} justifyContent="space-between" style={{padding:'10px'}}>
                <Grid item xs={6}>
                  <Button
                    fullWidth
                    style={{  borderRadius: '50px',backgroundColor: '#1e2772' }}
                    
                    onClick={publish}
                    variant="contained"
                  >
                    SUBMIT
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <Button
                    fullWidth
                    color="error"
                    style={{  borderRadius: '50px' }}
                    variant="contained"
                  >
                    <BackspaceIcon />
                  </Button>
                </Grid>
              </Grid>
        

        </div>
        
      </div>
      </div>
  );
};
