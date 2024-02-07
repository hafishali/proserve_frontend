import React from 'react'
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import Card from 'react-bootstrap/Card';
import { Row,Col } from 'react-bootstrap';

function Viewbooking() {
    const [open, setOpen] = useState(false);
  return (
    <>
    <h2 className='fw-bolder text-center mt-3'>Your<span className='text-success'> Bookings</span></h2>
    <Row>

        <Col lg={4} sm={12}>
        <Card  style={{ width: '25rem' }} className='m-3'>
    
    <Card.Body>
      <Card.Title className='text-center fw-bold'>USER</Card.Title>
      <Card.Text className='mt-3'>
       <Row>
          <Col lg={6} sm={12}>
              <p>PLACE:</p>
              <p>DATE SCHEDULED:</p>
             


          </Col>
          <Col lg={6} sm={12}>
              <p>PHONE:</p>
              <p>DISTRICT:</p>

          </Col>
          
       </Row>

  
      </Card.Text>
     <div className='d-flex justify-content-center'> <Button variant="success"  onClick={() => setOpen(!open)}><i class="fa-solid fa-arrow-up-from-bracket fa-rotate-180" style={{color: "#d5d6d8"}}></i></Button></div>
  
      <Collapse in={open}>
  <div>
  <hr className='text-success' />
      <div><p className='text-center'>ADDRESS</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus fuga repudiandae repellat neque. Soluta vitae distinctio, consequuntur quaerat tempora nemo laborum, sed provident deserunt iusto maxime accusantium dolorum enim hic?</p>
      </div>

      <hr className='text-success' />
      <div><p className='text-center'>JOB DESCRIPTION</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque eos eveniet voluptatibus suscipit quos a reprehenderit deleniti, quidem sed enim vel fugiat similique qui voluptatem quo eius praesentium excepturi consequuntur!</p></div>
      <div className='d-flex justify-content-evenly'>
          <button className='btn btn-success'>ACCEPT</button>
          <button className='btn btn-danger'>DECLINE</button>
      </div>
  </div>
    </Collapse>

     
    </Card.Body>
  </Card>
        </Col>

        
    </Row>
  
   
    </>
  )
}

export default Viewbooking