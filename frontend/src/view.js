import { DataGrid } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import { callDelete, callGet } from './axios';
import { Button } from '@mui/base';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';


export const Views=()=>{

    const[myDocuments,setMyDocuments]=useState([])

    const makeFetch=async()=>{
        const t = await callGet()
        setMyDocuments(t.data)
        console.log(JSON.stringify(myDocuments))
    }

    useEffect(()=>{
        makeFetch()
    },[])

    const columns = [
        {
          field: 'patientId',
          headerName: 'Patient ID',
          width: 200,
        },
        {
          field: 'patientName',
          headerName: 'Patient Name',
          width: 200,
        },
        {
          field: 'contact',
          headerName: 'Contact',
          width: 200,
        },
        {
          field: 'issue',
          headerName: 'Issue',
          width: 200,
        },
        {
            field: 'status',
            headerName: 'Status',
            width: 200,
          }
      ];

    const[found,setFound]=useState({
        "_id":0
    })
    return(
        <>
     
        
            <div className='row justify-content-center align-items-center' style={{padding:'40px' , marginTop:'10px'}}>
                <div className='col-lg-6 col-md-8 col-12 shadow-lg p-5'>
                    <DataGrid
                        onRowSelectionModelChange={
                            (one)=>{
                                var collected=myDocuments.filter((each)=>{
                                    return each._id==one
                                })
                                alert(JSON.stringify(collected[0]))
                                // setOpenRead(true)
                                setFound(collected[0])
                            }
                        }
                        initialState={{
                            pagination:{
                                paginationModel:{pageSize:2}
                            }
                        }}
                        columns={columns}
                        rows={myDocuments}
                        getRowId={(obj)=>obj._id}
                    />
                     {
                            (found._id!=0)?
                            <>
                                <div className="mt-2 row justify-content-around">
                                    <Button color="error" onClick={async()=>{
                                        // alert(JSON.stringify(found)+" to be deleted")
                                        const rec = await callDelete(found._id)
                                        alert(JSON.stringify(rec))
                                    }} className="col-3" variant="contained">
                                        <DeleteOutlineIcon/>
                                    </Button>
                                </div>
                            </>
                            :
                            <></>
                        }
                </div>
            </div>
        </>
    )
}