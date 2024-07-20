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

                navigate('/profhome')



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

    const sectionHeight=proregister?'180vh':'100vh'


    return (
        <div>
            <section style={{ height:sectionHeight }} className='background-radial-gradient overflow-hidden'>
                <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
                    <div className="row gx-lg-5 align-items-center mb-5">
                        <div className="col-lg-6 mb-5 mb-lg-0" style={{ zIndex: 10 }}>
                            <h1 className="my-5 display-5 fw-bold ls-tight" style={{ color: 'hsl(218, 81%, 95%)' }}>
                                {proregister ? 'Register as a Professional' : 'Hello Professional'}
                                <br />
                                <span style={{ color: 'hsl(218, 81%, 75%)' }}>{proregister ? 'Sign Up' : 'Welcome back...Please Login'}</span>
                            </h1>
                            <p className="mb-4 opacity-70" style={{ color: 'hsl(218, 81%, 85%)' }}>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus, expedita iusto veniam atque, magni tempora mollitia dolorum consequatur nulla, neque debitis eos reprehenderit quasi ab ipsum nisi dolorem modi. Quos?
                            </p>
                        </div>
                        <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
                            <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
                            <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>
                            <div className="card bg-glass">
                                <div className="card-body px-4 py-5 px-md-5">
                                    <form>
                                        {proregister && (
                                            <>
                                                <div className="form-outline mb-4">
                                                    <label className="form-label text-light" for="name">Name</label>
                                                    <input type="text" className="form-control " id='name' style={{ color: 'black' }} onChange={(e) => setWorker({ ...worker, name: e.target.value })} />

                                                </div>
                                                <div className="form-outline mb-4">
                                                    <label className="form-label text-light" for="username">Username</label>
                                                    <input type="text" id='username' className="form-control text" style={{ color: 'black' }} onChange={(e) => setWorker({ ...worker, username: e.target.value })} />

                                                </div>
                                                <div className="form-outline mb-4">
                                                    <label className="form-label text-light" for="city">City</label>
                                                    <input type="text" id='city' className="form-control " style={{ color: 'black' }} onChange={(e) => setWorker({ ...worker, city: e.target.value })} />

                                                </div>
                                                <div className="form-outline mb-4">
                                                    <select className="form-select" onChange={(e) => setWorker({ ...worker, district: e.target.value })}>
                                                        <option selected disabled>Choose your district</option>
                                                        <option value="palakkad">Palakkad</option>
                                                        <option value="Thrissur">Thrissur</option>
                                                        <option value="Ernakulam">Ernakulam</option>
                                                    </select>
                                                </div>
                                                <div className="form-outline mb-4">
                                                    <label className="form-label text-light" for="wage">Daily wage</label >
                                                    <input id='wage' type="number" min={'0'} className="form-control " style={{color:'black'
                                                    }} onChange={(e) => setWorker({ ...worker, dailywage: e.target.value })} />

                                                </div>
                                                <div className="form-outline mb-4">
                                                    <label className="form-label text-light" for='coworkers'>Co-workers</label>
                                                    <input id='coworkers' type="number" min={'0'} style={{ color: 'black' }} className="form-control text-dark" onChange={(e) => setWorker({ ...worker, coworkers: e.target.value })} />

                                                </div>
                                                <div className="form-outline mb-4">
                                                    <select className="form-select" onChange={(e) => setWorker({ ...worker, job: e.target.value })}>
                                                        <option selected disabled>Choose your job</option>
                                                        <option value="Plumber">Plumber</option>
                                                        <option value="Electrician">Electrician</option>
                                                        <option value="Painter">Painter</option>
                                                        <option value="Carpenter">Carpenter</option>
                                                        <option value="Pest controller">Pest controller</option>
                                                        <option value="Gardener">Gardener</option>
                                                    </select>
                                                </div>
                                                <div className="form-outline mb-4">
                                                    <input type="text" className="form-control text-dark" style={{color:'black'
                                                    }} onChange={(e) => setWorker({ ...worker, phone: e.target.value })} />
                                                    <label className="form-label text-light">Phone number</label>
                                                </div>
                                            </>
                                        )}
                                        <div className="form-outline mb-4">
                                        <label className="form-label text-light" for='useremail'>Email</label>
                                            <input type="email" id='useremail' className="form-control text-dark" style={{color:'black'
                                                    }} onChange={(e) => setWorker({ ...worker, email: e.target.value })} />
                                            
                                        </div>
                                        <div className="form-outline mb-4">
                                        <label className="form-label text-light" for='pswd'>Password</label>
                                            <input type="password" id='pswd' className="form-control text-dark" style={{color:'black'
                                                    }} onChange={(e) => setWorker({ ...worker, password: e.target.value })} />
                                            
                                        </div>
                                        {proregister ? (
                                            <div className='d-flex justify-content-center flex-column mb-4'>
                                                <Link className='text-center mb-2' to={'/professionallogin'}>Already have an account? Please Sign In</Link>
                                                <button type="button" className="btn btn-primary btn-block mb-4" onClick={handleRegister}>Sign Up</button>
                                            </div>
                                        ) : (
                                            <div className='d-flex justify-content-center flex-column mb-4'>
                                                <Link to={'/professionalregister'}>Don't have an account? Please Sign Up</Link>
                                                <button type="button" className="btn btn-primary btn-block mb-4" onClick={handleLogin}>Sign In</button>
                                            </div>
                                        )}
                                        {/* <div className="text-center">
                                            <p className='text-light'>or sign up with:</p>
                                            <button type="button" className="btn btn-link btn-floating mx-1 text-danger">
                                                <i className="fab fa-facebook-f"></i>
                                            </button>
                                            <button type="button" className="btn btn-link btn-floating mx-1 text-danger">
                                                <i className="fab fa-google"></i>
                                            </button>
                                            <button type="button" className="btn btn-link btn-floating mx-1 text-danger">
                                                <i className="fab fa-twitter"></i>
                                            </button>
                                            <button type="button" className="btn btn-link btn-floating mx-1 text-danger">
                                                <i className="fab fa-github"></i>
                                            </button>
                                        </div> */}
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Proauth