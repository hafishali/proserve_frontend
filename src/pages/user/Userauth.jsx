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
import Auth from '../../googleAuth/Auth';


function Userauth({ usrregister }) {
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        password: ""
    })
    const navigate = useNavigate()
    const navigatelogin = useNavigate()
    console.log(user)

    const handleRegister = async (e) => {
        e.preventDefault()
        const { name, username, email, password } = user
        if (!name || !username || !email || !password) {
            // alert('Please fill the form')
            Swal.fire({
                title: 'oops',
                text: 'Please fill the form completley',
                icon: 'warning'
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
            else {
                alert(result.response.data)
            }
        }
    }



    const handleLogin = async (e) => {
        e.preventDefault()
        const { email, password } = user

        if (!email || !password) {
            // alert('please fill the form completely')
            Swal.fire({
                title: 'oops',
                text: 'Please fill the form completley',
                icon: 'warning'
            })
        }

        else {
            const result = await loginApi(user)
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
                    navigate('/userhome')
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
    const sectionHeight=usrregister?'110vh':'130vh'



    return (
        <div>
        <section style={{ height: sectionHeight }} className='background-radial-gradient overflow-hidden'>
            <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
                <div className="row gx-lg-5 align-items-center mb-5">
                    <div className="col-lg-6 mb-5 mb-lg-0" style={{ zIndex: 10 }}>
                        <h1 className="my-5 display-5 fw-bold ls-tight" style={{ color: 'hsl(218, 81%, 95%)' }}>
                            {usrregister ? 'Register as a User' : 'Hello User'}
                            <br />
                            <span style={{ color: 'hsl(218, 81%, 75%)' }}>{usrregister ? 'Sign Up' : 'Welcome back...Please Login'}</span>
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
                                    {usrregister && (
                                        <>
                                            <div className="form-outline mb-4">
                                                <label className="form-label text-light" htmlFor="name">First Name</label>
                                                <input type="text" className="form-control" id='name' style={{ color: 'black' }} onChange={(e) => setUser({ ...user, name: e.target.value })} />
                                            </div>
                                            <div className="form-outline mb-4">
                                                <label className="form-label text-light" htmlFor="username">Username</label>
                                                <input type="text" id='username' className="form-control text" style={{ color: 'black' }} onChange={(e) => setUser({ ...user, username: e.target.value })} />
                                            </div>
                                        </>
                                    )}
                                    <div className="form-outline mb-4">
                                        <label className="form-label text-light" htmlFor='useremail'>Email</label>
                                        <input type="email" id='useremail' className="form-control text-dark" style={{ color: 'black' }} onChange={(e) => setUser({ ...user, email: e.target.value })} />
                                    </div>
                                    <div className="form-outline mb-4">
                                        <label className="form-label text-light" htmlFor='pswd'>Password</label>
                                        <input type="password" id='pswd' className="form-control text-dark" style={{ color: 'black' }} onChange={(e) => setUser({ ...user, password: e.target.value })} />
                                    </div>
                                    {usrregister ? (
                                        <div className='d-flex justify-content-center flex-column mb-4'>
                                            <Link className='text-center mb-2' to={'/userlogin'}>Already have an account? Please Sign In</Link>
                                            <button type="button" className="btn btn-primary btn-block mb-4" onClick={handleRegister}>Sign Up</button>
                                        </div>
                                    ) : (
                                        <div className='d-flex justify-content-center flex-column mb-4'>
                                            <Link to={'/userregister'}>Don't have an account? Please Sign Up</Link>
                                            <button type="button" className="btn btn-primary btn-block mb-4" onClick={handleLogin}>Sign In</button>
                                        </div>
                                    )}
                                    <div className="text-center">
                                        <p className='text-light'>or sign up with:</p>
                                        <div className='d-flex justify-content-center'>
                                            <Auth />
                                        </div>
                                    </div>
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

export default Userauth