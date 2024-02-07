import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './profhome.css'
import { Row,Col } from 'react-bootstrap';
// import carp from '../assets/carpenter.jpg'
import profimage from '../assets/4775-PhotoRoom.png-PhotoRoom.png'
import { Link } from 'react-router-dom';

function Profhome() {

  const worker=JSON.parse(sessionStorage.getItem('user'));
  const workername=worker.name
 
 console.log(workername)
  
  return (
    <>
    <section className='prohome'>
      
      <div className=' prohome d-flex align-items-center '>
          <Row>
            <Col lg={6} sm={12}>
              <div className='  text-light ms-2'>
                <p className='welcome fw-bold'>Welcome  <span className='text-dark'>{workername}</span></p>
               
                <Link to={'/profile'}><button className='btn btn-primary'>Appoint Now</button></Link>

              </div>
            </Col>
            <Col lg={6} sm={12} >
<div className='d-flex justify-content-center align-items-center'>
                <img className='img-fluid' width={'700px'} src={profimage} alt="" />
  
</div>            </Col>



          </Row>

        </div>

      

    </section>
    </>
  )
}

export default Profhome