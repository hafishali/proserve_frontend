import React, { useState } from 'react';
import { Row, Col, Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import worker_img from '../assets/Plumber.jpg';

function Bookworker(props) {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <div className='d-flex justify-content-center mt-5 border-rounded' >
        <input className='form-control w-25' type="text" name="" id="" placeholder='Enter your city' />
        <button className='btn btn-info ms-3'>SEARCH</button>
      </div>

      <div className='d-flex justify-content-center mt-5'>
        <Row>
          <Col lg={4} md={6} sm={12}>
            <Card style={{ width: '25rem' }}>
              <Row>
                <Col>
                  <Card.Img variant="top" className='img-fluid' style={{ width: '100%', height: '100%' }} src={worker_img} />
                  <Card.Body></Card.Body>
                </Col>
                <Col>
                  <Card.Body>
                    <Card.Title className='fw-bold text-center'>NEEL</Card.Title>
                    <Card.Text>JOB:</Card.Text>
                    <Card.Text>COWORKERS:</Card.Text>
                    <Card.Text>DAILY WAGE:</Card.Text>
                    <Card.Text>PLACE:</Card.Text>
                    <Card.Text>CONTACT:</Card.Text>
                    <div className='d-flex justify-content-center'>
                      <Button onClick={() => setModalShow(true)} variant="success">BOOK</Button>
                    </div>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </div>

      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        {/* <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            BOOK NEEL
          </Modal.Title>
        </Modal.Header> */}
        <Modal.Body>
          <h4 className='text-center'>BOOK NEEL</h4>
          <Form>
            <label htmlFor="name">Full Name</label>
            <input id='name' type="text" className='form-control mt-2' placeholder='Enter your Name' />
            <label htmlFor="phone">Phone Number</label>
            <input id='phone' type="text" className='form-control mt-2' placeholder='Enter your Phone Number' />
            <label htmlFor="city">City</label>
            <input id='city' type="text" className='form-control mt-2 ' placeholder='Enter your City' />
            <label htmlFor="city">Date for Booking</label>
            <input id='city' type="date" className='form-control mt-2 '  />

            <label htmlFor="district">District</label>
            <Form.Select id='district' aria-label="Default select example" className='mt-2'>
              
              <option value="1">Palakkad</option>
              <option value="2">Kozhikkode</option>
              <option value="3">Thrissur</option>
            </Form.Select>
            
            {/* <label htmlFor="requirement">Requirement Detailas</label> */}
            <textarea className='mt-2 form-control ' name="" id="requirement" cols="60" rows="3" placeholder='Description of your work requirments'></textarea>

            <textarea className='mt-2 form-control' name="" id="requirement" cols="60" rows="3" placeholder='Enter your  address'></textarea>
            
            
          </Form>


        </Modal.Body>
        <Modal.Footer>
          <button className='btn btn-success'>BOOK NOW</button>
          <Button onClick={() => setModalShow(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Bookworker;
