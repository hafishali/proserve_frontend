import React, { useState } from 'react'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./userauth.css"
import userimg from '../assets/Privacy policy-rafiki.png'
import { Link, useNavigate } from 'react-router-dom';
// import Swal from 'sweetalert2';
import Swal from 'sweetalert2'
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
import { loginApi, registerApi } from '../../services/allApi';


function Userauth({ usrregister }) {
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        password: ""
    })
    const navigate=useNavigate()
    const navigatelogin=useNavigate()
    console.log(user)

    const handleRegister = async (e) => {
        e.preventDefault()
        const { name, username, email, password } = user
        if (!name || !username || !email || !password) {
            // alert('Please fill the form')
            Swal.fire({
                title:'oops',
                text:'Please fill the form completley',
                icon:'warning'
            })
        }
        else {
            const result = await registerApi(user)
            console.log(result.data)
            if (result.status === 200) {
                // alert('Your registration is successfull')
                Swal.fire({
                    title: "Successful",
                    text: "Your registration is successfull",
                    icon: "success"
                  });
               setUser({
                name: "",
                username: "",
                email: "",
                password: ""
                
               })
               navigate('/userlogin')
            }
            else{
                alert(result.response.data)
            }
        }
    }

   

    const handleLogin=async(e)=>{
        e.preventDefault()
        const { email, password } = user
       
        if ( !email || !password) {
            // alert('please fill the form completely')
            Swal.fire({
                title:'oops',
                text:'Please fill the form completley',
                icon:'warning'
            })
        }
        
        else{
            const result=await loginApi(user)
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
                    navigate('/userhome')
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
        <section className='userauthentication' style={{ height: '100%' }}>


            <MDBContainer fluid className='p-4 background-radial-gradient overflow-hidden'>

                <MDBRow>

                    <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

                        <img height={'600px'} width={'100%'} src={userimg} alt="" />


                    </MDBCol>

                    <MDBCol md='6' className='position-relative'>

                        <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
                        <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

                        <MDBCard className='my-5 bg-glass'>
                            <MDBCardBody className='p-5'>
                                {usrregister && <div>

                                    <MDBRow>
                                        <MDBCol col='12'>
                                            <MDBInput wrapperClass='mb-4' onChange={(e) => setUser({ ...user, name: e.target.value })} label='First name' id='form1' type='text' />
                                        </MDBCol>


                                    </MDBRow>
                                    <MDBInput wrapperClass='mb-4' label='Username' id='form4' type='text' onChange={(e) => setUser({ ...user, username: e.target.value })} />
                                </div>}

                                <MDBInput wrapperClass='mb-4' label='Email' id='form3' type='email' onChange={(e) => setUser({ ...user, email: e.target.value })} />
                                <MDBInput wrapperClass='mb-4' label='Password' id='form4' type='password' onChange={(e) => setUser({ ...user, password: e.target.value })} />

                                {usrregister ? <div className='d-flex justify-content-center mb-4  flex-column'>
                                    <Link to={'/userlogin'} className='text-center'>Already have an account?Please SignIn</Link>
                                    <MDBBtn className='w-100 mb-4' size='md' onClick={handleRegister}>Sign up</MDBBtn>
                                </div> :
                                    <div className='d-flex justify-content-center mb-4 flex-column'>
                                        <Link to={'/userregister'} className='text-center'>Don't have an account?Please SignUp</Link>
                                        <MDBBtn className='w-100 mb-4 pt-2' onClick={handleLogin} size='md'>Sign In</MDBBtn>
                                    </div>}

                               

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

        </section>
    )
}

export default Userauth