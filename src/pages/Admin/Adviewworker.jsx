import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap';
import { allworkers, approveworkerApi } from '../../services/allApi';
import { base_url } from '../../services/baseurl';
import Swal from 'sweetalert2';


function Adviewworker() {
  const [open, setOpen] = useState(false);
  const [workers, setWorkers] = useState([])
  const [approveworker,setApproveworker]=useState({
    status:false
  })
  // console.log(approveworker)

  

  const viewallworkers = async () => {

    if (sessionStorage.getItem("token")) {
      const token = sessionStorage.getItem('token')
      const reqHeader = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
      const result = await allworkers(reqHeader)
      // console.log(result.data);

      if (result.status === 200) {
        setWorkers(result.data)



      }



    }

  }
  // console.log(workers)
  useEffect(() => {
    viewallworkers()
  },[])

  
 

  const handleapprove=async(id)=>{
    setApproveworker({
      status:true
    })

    // if(sessionStorage.getItem("token")){
      const Token = sessionStorage.getItem('token')
      console.log(Token)
      
      const reqHeader = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${Token}`
      }
      // console.log(reqHeader)

      const reqBody=approveworker
       
      
  
      const result=await approveworkerApi(id,reqHeader,reqBody)
      console.log(result.data)
      if(result.status===200){
        Swal.fire({
          title: "worker profile has  approved",
          icon: "success"
        });
      }
      else{
       console.log(result.response.data)
      }

    // }
    // else{
    //   Swal.fire({
    //     title: "Please login to continue",
    //     icon: "error"
    //   }); 
    // }

    


  }

  // const handlereject=async(id)=>{
  //   setApproveworker({
  //     status:false
  //   })

  //   // if(sessionStorage.getItem("token")){
  //     const Token = sessionStorage.getItem('token')
  //     console.log(Token)
      
  //     const reqHeader = {
  //       "Content-Type": "application/json",
  //       "Authorization": `Bearer ${Token}`
  //     }
  //     // console.log(reqHeader)

  //     const reqBody=approveworker
       
      
  
  //     const result=await approveworkerApi(id,reqHeader,reqBody)
  //     console.log(result.data)
  //     if(result.status===200){
  //       Swal.fire({
  //         title: "worker profile has  Rejected",
  //         icon: "success"
  //       });
  //     }
  //     else{
  //      console.log(result.response.data)
  //     }

  //   // }
  //   // else{
  //   //   Swal.fire({
  //   //     title: "Please login to continue",
  //   //     icon: "error"
  //   //   }); 
  //   // }

    


  // }



 
  
 

  // console.log(approve.status)
  
  return (
    <>
      <h2 className='text-center mt-5 fw-bold'>Approve <span className='text-success'>profiles</span></h2>


      <Row>

        
      {workers?.length > 0 ? (
  <div>
    {workers.map((item) => (
      <Col lg={6} md={6} sm={12}>
        <Card style={{ width: '25rem' }} className='m-3'>
          <Card.Body>
            <Card.Title className='text-center fw-bold'></Card.Title>
            <Card.Text className='mt-3'>
             
                <h4 className='text-center fw-bold'>{item.name}</h4>
                
                 <div className='d-flex justify-content-center'> <Card.Img variant="top" className='img-fluid' style={{ width: '150px', height: '150px',borderRadius:'50%' }} src={`${base_url}/uploads/${item.image}`} /></div>
               
              
                  <Card.Text ><span className='fw-bold' >JOB</span>:{item.job}</Card.Text>
                  <hr />
                  <Card.Text ><span className='fw-bold' >COWORKERS</span>:{item.coworkers}</Card.Text>
                  <hr />
                  <Card.Text ><span className='fw-bold' >DAILY WAGE</span>:{item.dailywage}</Card.Text>
                  <hr />
                  <Card.Text ><span className='fw-bold' >CITY</span>:{item.city}</Card.Text>
                  <hr />
                  <Card.Text ><span className='fw-bold' >DISTRICT</span>:{item.district}</Card.Text>
                  <hr />
                  <Card.Text ><span className='fw-bold'>CONTACT</span>:{item.phone}</Card.Text>
               
            </Card.Text>
            <div className='d-flex justify-content-center'>
              <Button variant="success" onClick={() => setOpen(!open)}>
                <i className="fa-solid fa-arrow-up-from-bracket fa-rotate-180" style={{ color: "#d5d6d8" }}></i>
              </Button>
            </div>
            <Collapse in={open}>
              <div>
                <hr className='text-success' />
                <div className='d-flex justify-content-evenly'>
                  <button className='btn btn-success' onClick={()=>handleapprove(item._id)} >APPROVE</button>
                  <button className='btn btn-danger' >REJECT</button>
                </div>
              </div>
            </Collapse>
          </Card.Body>
        </Card>
      </Col>
    ))}
  </div>
) : (
  <div>
    <p>no workers</p>
  </div>
)}

         


      </Row>
    </>
  )
}

export default Adviewworker