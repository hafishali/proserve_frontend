import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import worker_img from '../assets/Plumber.jpg'

function Bookpestcontroller() {
  return (
    <>
      <div className='d-flex justify-content-center mt-5 border-rounded' >
        <input className='form-control w-25' type="text" name="" id="" placeholder='Enter your city' />

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
                    <Card.Text>
                      JOB:


                    </Card.Text>
                    <Card.Text>
                      PLACE:


                    </Card.Text>
                    <Card.Text>
                      CONTACT:


                    </Card.Text>
                    <div className='d-flex justify-content-center'><Button variant="success">BOOK</Button></div>
                  </Card.Body>
                </Col>
              </Row>

            </Card>

          </Col>
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
                    <Card.Text>
                      JOB:


                    </Card.Text>
                    <Card.Text>
                      PLACE:


                    </Card.Text>
                    <Card.Text>
                      CONTACT:


                    </Card.Text>
                    <div className='d-flex justify-content-center'><Button variant="success">BOOK</Button></div>
                  </Card.Body>
                </Col>
              </Row>

            </Card>

          </Col>
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
                    <Card.Text>
                      JOB:


                    </Card.Text>
                    <Card.Text>
                      PLACE:


                    </Card.Text>
                    <Card.Text>
                      CONTACT:


                    </Card.Text>
                    <div className='d-flex justify-content-center'><Button variant="success">BOOK</Button></div>
                  </Card.Body>
                </Col>
              </Row>

            </Card>

          </Col>

        </Row>
      </div>
    </>
  )
}

export default Bookpestcontroller