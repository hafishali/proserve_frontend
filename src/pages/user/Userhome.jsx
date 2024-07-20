import React, { useEffect, useState } from 'react';
import './userhome.css';
import { Col, Row } from 'react-bootstrap';
import image1 from '../assets/2111.i201.051.F.m004.c9.construction workers isometric-PhotoRoom.png-PhotoRoom.png';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import painter from '../assets/painter.jpg';
import plumber from '../assets/Plumber.jpg';
import electrician from '../assets/electricain.jpg';
import carpenter from '../assets/carpenter.jpg';
import gardener from '../assets/gardener.jpg';
import pestcontroller from '../assets/pest controller.jpg';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import notfound from '../assets/hand-drawn-404-error.png';
import {ScaleLoader} from 'react-spinners'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Userhome() {
  const [isAuthenticated, setIsAuthenticated] = useState(null); 
  const token = sessionStorage.getItem('token');

  useEffect(() => {
    const checkAuthentication = () => {
      if (!token) {
        setIsAuthenticated(false);
      } else {
        setIsAuthenticated(true);
      }
    };
    const timeoutId = setTimeout(checkAuthentication, 500);
    return () => clearTimeout(timeoutId);
  }, [token]);
  useEffect(()=>{
    AOS.init({duration:1250})
  },[])

  if (isAuthenticated === null) {
    return(<div style={{height:'100vh'}} className='d-flex justify-content-center align-items-center'>
      <ScaleLoader color='blue'/>

    </div>) 
  }

  if (!isAuthenticated) {
    return (
      <div className='failedAuthentication  flex-column  ' style={{height:'100vh'}}>
        <div className='d-flex justify-content-center'>
        <img src={notfound} height={'600px'} width={'500px'}  alt="" />
       
        </div>
        <h1 className='ms-5 text-center text-warning fw-bolder'>404 ERROR</h1>
        <h3 className='text-center text-warning fw-bolder'> Oops....Page not found</h3>
        <div className='d-flex justify-content-center' >
          <Link to={'/'}> <Button className='btn btn-warning'>home</Button></Link>
        
        </div>
       
       
      </div>
    );
  }

  const users = JSON.parse(sessionStorage.getItem('user'));
  const username = users.name;

  const PAINTER = 'Painter';
  const CARPENTER = 'Carpenter';
  const PLUMBER = 'Plumber';
  const GARDENER = 'Gardener';
  const PESTCONTROLLER = 'Pestcontroller';
  const ELECTRICIAN = 'Electrician';

  console.log(username);

  return (
    <div>
      <Header isUserHome={true}/>
      <section>
        <div className="usrhome d-flex align-items-center">
          <Row>
            <Col lg={6} sm={12}>
              <div className="text-light ms-2">
                <p data-aos="zoom-in" className="welcome fw-bold">Welcome <span className="text-dark">{username}</span></p>
                <div>
                  <p className="welpara" style={{ textAlign: 'justify' }}>
                    We're delighted to have you here, where seamless home repairs and renovations are just a click away. Whether you're in need of a skilled handyman, a talented plumber, or a reliable electrician, our user-friendly website is your one-stop destination for booking appointments with skilled professionals. Say goodbye to the hassle of searching for trustworthy service providers – we've got you covered. Simply browse through our extensive list of experienced workers, select the one that suits your needs, and schedule your appointment effortlessly. Your satisfaction is our priority, and we're committed to making your home improvement journey a breeze. Thank you for choosing us to be your trusted partner in maintaining and enhancing your living space. Happy booking!
                  </p>
                </div>
                <a href="#booksection"><button data-aos="flip-up" className="btn btn-primary">Appoint Now</button></a>
              </div>
            </Col>
            <Col lg={6} sm={12} data-aos="fade-up">
              <img className="img-fluid" width="700px" src={image1} alt="" />
            </Col>
          </Row>
        </div>
      </section>
      <section className="mb-5" id="booksection">
        <div className="mt-5">
          <Row >
            <Col lg={4}  md={6} sm={12} data-aos="fade-down"  >
              <div className="d-flex justify-content-center mb-3">
                <Card style={{ width: '18rem' }}>
                  <Card.Img height="250px" variant="top" src={painter} />
                  <Card.Body>
                    <Card.Title className="text-center">PAINTER</Card.Title>
                    <div className="d-flex justify-content-center"><Link to={`/booking?worker=${PAINTER}`}><Button variant="primary">BOOK</Button></Link></div>
                  </Card.Body>
                </Card>
              </div>
            </Col>
            <Col lg={4} md={6} sm={12} data-aos="fade-in" >
              <div className="d-flex justify-content-center mb-3">
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" height="250px" src={electrician} />
                  <Card.Body>
                    <Card.Title className="text-center">ELECTRICIAN</Card.Title>
                    <div className="d-flex justify-content-center"><Link to={`/booking?worker=${ELECTRICIAN}`}><Button variant="primary">BOOK</Button></Link></div>
                  </Card.Body>
                </Card>
              </div>
            </Col>
            <Col lg={4} md={6} sm={12} data-aos="fade-down">
              <div className="d-flex justify-content-center mb-3">
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" height="250px" src={plumber} />
                  <Card.Body>
                    <Card.Title className="text-center">PLUMBER</Card.Title>
                    <div className="d-flex justify-content-center"><Link to={`/booking?worker=${PLUMBER}`}><Button variant="primary">BOOK</Button></Link></div>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col lg={4} md={6} sm={12} data-aos="fade-up">
              <div className="d-flex justify-content-center mb-3">
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" height="250px" src={carpenter} />
                  <Card.Body>
                    <Card.Title className="text-center">CARPENTER</Card.Title>
                    <div className="d-flex justify-content-center"><Link to={`/booking?worker=${CARPENTER}`}><Button variant="primary">BOOK</Button></Link></div>
                  </Card.Body>
                </Card>
              </div>
            </Col>
            <Col lg={4} md={6} sm={12} data-aos="fade-in">
              <div className="d-flex justify-content-center mb-3">
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" height="250px" src={gardener} />
                  <Card.Body>
                    <Card.Title className="text-center">GARDENER</Card.Title>
                    <div className="d-flex justify-content-center"><Link to={`/booking?worker=${GARDENER}`}><Button variant="primary">BOOK</Button></Link></div>
                  </Card.Body>
                </Card>
              </div>
            </Col>
            <Col lg={4} md={6} sm={12} data-aos="fade-down">
              <div className="d-flex justify-content-center">
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" height="250px" src={pestcontroller} />
                  <Card.Body>
                    <Card.Title className="text-center">PEST CONTROLLER</Card.Title>
                    <div className="d-flex justify-content-center"><Link to={`/booking?worker=${PESTCONTROLLER}`}><Button variant="primary">BOOK</Button></Link></div>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Userhome;
