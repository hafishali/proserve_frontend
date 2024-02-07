import React, { useEffect, useState } from 'react'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./proauth.css"
import workerimg from '../assets/Secure login-bro.png'
import { Link, useNavigate } from 'react-router-dom';
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
import { workerloginApi, workerregisterApi } from '../../services/allApi';


function Proauth({ proregister }) {
    const [worker, setWorker] = useState({
        name: '',
        username: '',
        email: '',
        password: '',
        phone: '',
        adress: '',
        city: '',
        district: '',
        dailywage: '',
        coworkers: '',
        job: '',
        status: false


    })
    const navigate = useNavigate()

    console.log(worker)

   

    const handleRegister = async (e) => {
        e.preventDefault()
        const { name, username, email, password, phone, adress, city, district, dailywage, coworkers, job, status } = worker
        if (!username || !email || !password || !phone || !city || !district || !dailywage || !coworkers || !job) {
            // alert('Please fill the form')
            Swal.fire({
                title: 'oops',
                text: 'Please fill the form completley',
                icon: 'warning'
            })
        }
        else {
            const result = await workerregisterApi(worker)
            console.log(result.data)
            if (result.status === 200) {
                // alert('Your registration is successfull')
                Swal.fire({
                    title: "Successful",
                    text: "Your registration is successfull",
                    icon: "success"
                });
                setWorker({

                    username: "",
                    email: "",
                    password: ""

                })
                navigate('/pofessionallogin')
            }
            else {
                alert(result.response.data)
            }
        }
    }

    const handleLogin = async (e) => {
        e.preventDefault()
        const { email, password } = worker
        if (!email || !password) {
            // alert('please fill the form completely')
            Swal.fire({
                title: 'oops',
                text: 'Please fill the form completley',
                icon: 'warning'
            })
        }
        else {
            const result = await workerloginApi(worker)
            console.log(result)
            if (result.status === 200) {

                sessionStorage.setItem("user", JSON.stringify(result.data.existinguser))
                sessionStorage.setItem("token", result.data.token)

                // alert('login successfull')
                Swal.fire({
                    title: "Successful",
                    text: "Login successfull",
                    icon: "success"
                });
                setTimeout(() => {
                    navigate('/profhome')
                }, 1000)


            }
            else {



                Swal.fire({
                    title: "error",
                    text: `${result.response.data}`,
                    icon: "error"
                });

            }

        }

    }


    return (
        <div className='workerauthentication' style={{ height: '100vh' }} >

            <MDBContainer fluid className='p-4 background-radial-gradient overflow-hidden'>

                <MDBRow>

                    <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

                        <img height={'600px'} width={'100%'} src={workerimg} alt="" />


                    </MDBCol>

                    <MDBCol md='6' className='position-relative'>

                        <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
                        <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

                        <MDBCard className='my-5 bg-glass'>
                            <MDBCardBody className='p-5'>
                                {proregister && <div>

                                    <MDBRow>
                                        <MDBCol col='6'>
                                            <MDBInput wrapperClass='mb-4' label='Name' id='form1' type='text' onChange={(e) => setWorker({ ...worker, name: e.target.value })} />
                                        </MDBCol>

                                        <MDBCol col='6'>
                                            <MDBInput wrapperClass='mb-4' label='Username' id='form2' type='text' onChange={(e) => setWorker({ ...worker, username: e.target.value })} />
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBRow>
                                        <MDBCol col='6'>
                                            <MDBInput wrapperClass='mb-4' label='City' id='form1' type='text' onChange={(e) => setWorker({ ...worker, city: e.target.value })} />
                                        </MDBCol>

                                        <MDBCol col='6'>
                                            {/* <MDBInput wrapperClass='mb-4' label='District' id='form2' type='text' onChange={(e) => setWorker({ ...worker, district: e.target.value })} /> */}
                                            <select class="form-select" aria-label="Choose your district"  onChange={(e) => setWorker({ ...worker, district: e.target.value })}>
                                                <option selected disabled >Choose your district</option>
                                                <option value="palakkad">Palakkad</option>
                                                <option value="Thrissur">Thrissur</option>
                                                <option value="Ernakulam">Ernakulam</option>
                                            </select>
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBRow>
                                        <MDBCol col='6'>
                                            <MDBInput wrapperClass='mb-4' label='Daily wage' id='form1' type='text' onChange={(e) => setWorker({ ...worker, dailywage: e.target.value })} />
                                        </MDBCol>

                                        <MDBCol col='6'>
                                            <MDBInput wrapperClass='mb-4' label='Co workers' id='form2' type='text' onChange={(e) => setWorker({ ...worker, coworkers: e.target.value })} />
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBRow>
                                        <MDBCol col='6'>
                                            <select class="form-select" aria-label="Choose your district" onChange={(e) => setWorker({ ...worker, job: e.target.value })}>
                                                <option selected disabled >Choose your district</option>
                                                <option value="Plumber">Plumber</option>
                                                <option value="Electrician">Electrician</option>
                                                <option value="Painter">Painter</option>
                                                <option value="Carpenter">Carpenter</option>
                                                <option value="Pest controller">Pest controller</option>
                                                <option value="Gardner">Gardner</option>
                                            </select>
                                        </MDBCol>

                                        <MDBCol col='6'>
                                            <MDBInput wrapperClass='mb-4' label='Phone number' id='form2' type='text' onChange={(e) => setWorker({ ...worker, phone: e.target.value })} />
                                        </MDBCol>
                                    </MDBRow>
                                    {/* <MDBInput wrapperClass='mb-4' label='Username' id='form4' type='text'  /> */}
                                </div>}

                                <MDBInput wrapperClass='mb-4' label='Email' id='form3' type='email' onChange={(e) => setWorker({ ...worker, email: e.target.value })} />
                                <MDBInput wrapperClass='mb-4' label='Password' id='form4' type='password' onChange={(e) => setWorker({ ...worker, password: e.target.value })} />

                                {proregister ? <div className='d-flex justify-content-center flex-column mb-4'>
                                    <Link className='text-center mb-2' to={'/pofessionallogin'}>Already have an account?Please SignIn</Link>
                                    <MDBBtn className='w-100 mb-4' size='md' onClick={handleRegister}>sign up</MDBBtn>
                                </div> :
                                    <div className='d-flex justify-content-center mb-4 flex-column'>
                                        <Link to={'/pofessionalregister'}>Don't have an account?Please SignUp</Link>
                                        <MDBBtn onClick={handleLogin} className='w-100 mb-4' size='md'>sign in</MDBBtn>
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

        </div>
    )
}

export default Proauth