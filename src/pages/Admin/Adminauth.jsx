import React, { useState } from 'react'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./adminauth.css"
import adminimg from '../assets/Computer login-amico.png'
import Swal from 'sweetalert2'
import { Link, useNavigate } from 'react-router-dom';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBCheckbox,
    MDBIcon
}
    from 'mdb-react-ui-kit';
import { adminloginApi } from '../../services/allApi';


function Adminauth() {
    const [admin,setAdmin]=useState({
        email:'',
        password:''
    })
    const navigate=useNavigate()
    console.log(admin)

    const handleLogin=async(e)=>{
        e.preventDefault()
        const { email, password } = admin
       
        if ( !email || !password) {
            // alert('please fill the form completely')
            Swal.fire({
                title:'oops',
                text:'Please fill the form completley',
                icon:'warning'
            })
        }
        
        else{
            const result=await adminloginApi(admin)
            console.log(result)
            if(result.status===200){

                sessionStorage.setItem("user",JSON.stringify(result.data.existinguser))
                sessionStorage.setItem("token",result.data.token)

                // alert('login successfull')
                Swal.fire({
                    title: "Successful",
                    text: "Login successfull",
                    icon: "success"
                  });
                  setTimeout(()=>{
                    navigate('/viewworker')
                },1000)
                 

            }
            else{

               
                
                Swal.fire({
                    title: "error",
                    text: `${result.response.data}`,
                    icon: "error"
                  });
                
            }

        }


    }


    return (
        <div className='adminauthentication' style={{height:'100vh'}}>

            <MDBContainer fluid className='p-4 background-radial-gradient overflow-hidden'>

                <MDBRow>

                    <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

                        <img height={'600px'} width={'100%'} src={adminimg} alt="" />

                        
                    </MDBCol>

                    <MDBCol md='6' className='position-relative'>

                        <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
                        <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

                        <MDBCard className='my-5 bg-glass'>
                            <MDBCardBody className='p-5'>
                             

                                <MDBInput wrapperClass='mb-4' label='Email' id='form3' type='email' onChange={(e) => setAdmin({ ...admin, email: e.target.value })} />
                                <MDBInput wrapperClass='mb-4' label='Password' id='form4' type='password' onChange={(e) => setAdmin({ ...admin, password: e.target.value })} />

                               
                              

                                <MDBBtn onClick={handleLogin} className='w-100 mb-4' size='md'>Sign in</MDBBtn>

                                <div className="text-center">

                                    <p>or sign up with:</p>

                                    <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                                        <MDBIcon fab icon='facebook-f' size="sm" />
                                    </MDBBtn>

                                    <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                                        <MDBIcon fab icon='twitter' size="sm" />
                                    </MDBBtn>

                                    <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                                        <MDBIcon fab icon='google' size="sm" />
                                    </MDBBtn>

                                    <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                                        <MDBIcon fab icon='github' size="sm" />
                                    </MDBBtn>

                                </div>

                            </MDBCardBody>
                        </MDBCard>

                    </MDBCol>

                </MDBRow>

            </MDBContainer>
        </div>
    )
}

export default Adminauth