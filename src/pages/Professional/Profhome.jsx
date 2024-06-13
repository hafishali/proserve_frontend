import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './profhome.css'
import { Row,Col } from 'react-bootstrap';
// import carp from '../assets/carpenter.jpg'
import profimage from '../assets/4775-PhotoRoom.png-PhotoRoom.png'
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Proheader from './Proheader';

function Profhome() {

  const worker=JSON.parse(sessionStorage.getItem('user'));
  const workername=worker.name
 
 console.log(workername)
  
  return (
    <>
    <Proheader/>
    <section className='prohome'>
      
      <div className=' prohome d-flex align-items-center '>
          <Row>
            <Col lg={6} sm={12}>
              <div className='  text-light ms-2'>
                <p className='welcome fw-bold'>Welcome  <span className='text-dark'>{workername}</span></p>
              
               
                <Link to={'/profile'}><button className='btn btn-primary'>view more</button></Link>

              </div>
            </Col>
            <Col lg={6} sm={12} >
<div className='d-flex justify-content-center align-items-center flex-column'>
                <img className='img-fluid' width={'700px'} src={profimage} alt="" />
                {/* <Link to={'/booking'}> <button className='btn btn-primary'>Bookings</button></Link> */}
               
  
</div>            </Col>



          </Row>

        </div>

      

    </section>
    <section>
      
    </section>

    <section>
    <div className='d-flex justify-content-center mb-5 mt-5'>
    <Row>
           
              <Col sm={12} md={6}>
                <Card style={{ width: '18rem' }} className='mt-3'>
                  <Card.Img style={{ height: "300px" }} variant="top" src='' />
                  <Card.Body>
                    <Card.Title className='text-center'>APPROVED BOOKINGS</Card.Title>
  
                    <div className='d-flex justify-content-center'>
                      <Link to={'/userlogin'}><Button variant="success">VIEW</Button></Link>
                      </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm={12} md={6} >
                <Card style={{ width: '18rem' }} className='mt-3'>
                  <Card.Img style={{ height: "300px" }} variant="top" src='' />
                  <Card.Body>
                    <Card.Title className='text-center'>REJECTED BOOKINGS</Card.Title>
  
                    <div className='d-flex justify-content-center '>
                      <Link to={'/pofessionallogin'}><Button variant="success">VIEW</Button></Link>
                      </div>
                  </Card.Body>
                </Card>
              </Col>
           
          </Row>
          </div>
    </section>
    <Footer/>
    </>
  )
}

export default Profhome