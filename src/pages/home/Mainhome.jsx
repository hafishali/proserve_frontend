import React from 'react'
import './mainhome.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Row, Col } from 'react-bootstrap'
import logo from '../assets/main logo-PhotoRoom.png-PhotoRoom.png'
import users from '../assets/handyman-helping-senior-woman-kitchen.jpg'
import workers from '../assets/front-view-happy-male-builder-uniform-with-paint-roller-his-hands-blue-surface.jpg'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import userlogin from '../assets/836.jpg'
import workerlogin from '../assets/1510129_213885-P07ZKE-271.jpg'
import userbanner from '../assets/3042.jpg'
import { Link } from 'react-router-dom'


function Mainhome() {
  return (
    <>
      <Header />
      <section id='aboutus'>
        <Row >
          <Col className='lg-6' sm={12} md={6}>
            <img className='img-fluid' src={logo} alt="" />

          </Col>
          <Col className='lg-6 mt-3 ' sm={12} md={6}>

            <h2 className='fw-bold' >ABOUT<span className='text-success'> US</span></h2>
            <p style={{ textAlign: 'justify', lineHeight: '1.6rem' }}>Welcome to ProServe, your go-to platform for all your home service needs! At <span className='fw-bold'>PRO<span className='text-success'>SERVE</span></span>, we understand the importance of a well-maintained home, and we've created a seamless solution to connect users with skilled professionals for a range of services, including painting, carpentry, plumbing, and more. Our user-friendly interface allows you to easily book or schedule appointments for the services you require, ensuring a hassle-free experience. What sets ProServe apart is our commitment to quality and reliability. We empower skilled workers to showcase their expertise by creating comprehensive work profiles, making it easier for users to find the perfect match for their needs. As a worker on ProServe, you can showcase your skills, experience, and previous projects, and effortlessly receive job requests from users seeking your expertise. Join our community and experience the convenience of ProServe – where homeowners find reliable professionals, and skilled workers find rewarding opportunities. Your home deserves the best, and ProServe is here to deliver it.</p>

          </Col>
        </Row>
      </section>
      <div className='d-flex align-items-center  user_banner'>
       
        <h1 className='fw-bold text-primary'>Looking for a <span className='text-success'>worker</span> for <br /> your  Renovations or Repairs?</h1>
      </div>
      <section id='ourmission'>
        <h2 className='text-center fw-bold'>OUR <span className='text-success'>MISSION</span></h2>
        <div className='mission'>
          <Row className='mt-5'>
            <Col className='lg-6 ' sm={12} md={6}>
              <img className='img-fluid' style={{ borderRadius: '10px' }} height={'400px'} width={'100%'} src={users} alt="" />
            </Col>
            <Col className='lg-6 ' sm={12} md={6}>
              <h3>Empowering Homes-Connecting Expertise</h3>
              <p className='mt-3' style={{ textAlign: 'justify', lineHeight: '1.6rem' }}>At ProServe, our mission is to revolutionize the way homeowners and skilled professionals connect for essential home services. We believe that everyone deserves access to reliable and high-quality services, whether it's painting, carpentry, plumbing, or other essential home tasks. Our platform is designed to bridge the gap between users seeking top-notch services and skilled professionals looking for meaningful opportunities. We are committed to providing a user-friendly experience that empowers individuals to effortlessly book or schedule appointments for their home services needs. By fostering a community of trust and excellence, we aim to redefine the home services landscape, making it convenient for users to find the right professionals and for skilled workers to showcase their expertise. At ProServe, we are dedicated to creating a platform that transforms the way homes are serviced, making every interaction seamless and every service exceptional. Join us on our mission to elevate the standard of home services.
              </p>
            </Col>
  
          </Row>
  
          <Row className='mt-5'>
            <Col sm={12} md={6} >
              <h3>Empowering Home Service Pros: Seamless Profiles, Swift Appointments.</h3>
              <p> our mission-driven platform where skilled artisans and tradespeople find a seamless connection with homeowners seeking reliable and talented professionals for their home service needs. Our mission is to empower workers, including painters, plumbers, electricians, and more, by providing them with a dedicated space to showcase their expertise. Through our user-friendly interface, skilled professionals can easily create and upload profiles that highlight their skills, qualifications, and previous work, allowing them to stand out in a competitive market. Homeowners can effortlessly browse through these profiles, making informed decisions based on the worker's experience and reviews. Our platform not only serves as a bridge between workers and users but also facilitates the scheduling of appointments, ensuring a hassle-free experience for both parties. Join us in our mission to streamline the home services industry, creating a win-win situation for skilled professionals and homeowners alike.</p>
  
            </Col>
            <Col sm={12} md={6} >
              <img className='img-fluid' style={{ borderRadius: '10px' }} height={'400px'} width={'100%'} src={workers} alt="" />
  
            </Col>
          </Row>
  
        </div>
      </section>
      <section className='mt-5'>
        <h2 className='text-center fw-bold'>LOG <span className='text-success'>IN</span></h2>
        <div className='d-flex justify-content-center' style={{ gap: "2rem" }}>
          <Row>
            <Col sm={12} md={6}>
              <Card style={{ width: '18rem' }} className='mt-3'>
                <Card.Img style={{ height: "300px" }} variant="top" src={userlogin} />
                <Card.Body>
                  <Card.Title className='text-center'>USERS LOGIN</Card.Title>

                  <div className='d-flex justify-content-center'>
                    <Link to={'/userlogin'}><Button variant="success">LOGIN</Button></Link>
                    </div>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} md={6} >
              <Card style={{ width: '18rem' }} className='mt-3'>
                <Card.Img style={{ height: "300px" }} variant="top" src={workerlogin} />
                <Card.Body>
                  <Card.Title className='text-center'>PROFESSIONALS LOGIN</Card.Title>

                  <div className='d-flex justify-content-center '>
                    <Link to={'/pofessionallogin'}><Button variant="success">LOGIN</Button></Link>
                    </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
        <div className='d-flex  align-items-center  worker_banner mt-5'>
       
        <h1 className='fw-bold text-primary'>Looking for a <span className='text-success'>Job</span> for <br /> to show your skills?</h1>
        {/* <div><button className='btn btn-primary'>lets go</button></div> */}
      </div>

        <div className='row mt-5'>
          <div className='col-lg-2 sm-12'>
           
          </div>
          <div className='col-lg-2 sm-12'>
            <h1 className='fw-bold'>300+</h1>
            <p >Users joined</p>
          </div>
          <div className='col-lg-2 sm-12'>
            
          </div>
          <div className='col-lg-2 sm-12'>
            <h1 className='fw-bold'>300+</h1>
            <p>Workers enrolled</p>
          </div>

          <div className='col-lg-2 sm-12'>
            
          </div>

          <div className='col-lg-2 sm-12'>
            <h1 className='fw-bold'>300+</h1>
            <p>Appoiments done</p>
          </div>


        </div>


      </section>

      
      <Footer />
    </>
  )
}

export default Mainhome