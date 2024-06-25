import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap';
import { approveBookingApi, viewBookings } from '../../services/allApi';
import empty from '../assets/nothing.jpg'
import Swal from 'sweetalert2';

function Viewbooking() {
  const [open, setOpen] = useState(false);
  const [bookings, setBookings] = useState([])
  const [approvebooking, setApprovebooking] = useState({
    status: false
  })
  const [rejectbooking, setRejectbooking] = useState({
    status: true
  })

  const getbooking = async () => {

    if (sessionStorage.getItem("token")) {
      const token = sessionStorage.getItem('token')
      const reqHeader = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
      const result = await viewBookings(reqHeader)
      // console.log(result.data);

      if (result.status === 200) {
        setBookings(result.data)

      }
    }

  }

  useEffect(() => {
    getbooking()
  }, [])
  console.log(bookings)

  const handleapprove = async (id) => {
    setApprovebooking({
      status: true
    })
    const reqBody = approvebooking
    const result = await approveBookingApi(id, reqBody)
    console.log(result.data)
    if (result.status === 200) {
      Swal.fire({
        title: "booking approved",
        icon: "success"
      });
      getbooking()
    }
    else {
      console.log(result.response.data)
    }
  }

  const handlereject = async (id) => {
    setRejectbooking({
      status: false
    })
    const reqBody = rejectbooking
    const result = await approveBookingApi(id, reqBody)
    console.log(result.data)
    if (result.status === 200) {
      Swal.fire({
        title: "booking  has  been rejected",
        icon: "success"
      });
      getbooking()
    }
    else {
      console.log(result.response.data)
    }
  }

  return (
    <>
      <h2 className='fw-bolder text-center mt-3'>Your<span className='text-success'> Bookings</span></h2>
      {bookings?.length > 0 ?
      <Row>
      {bookings.map((item, index) => (
        <Col lg={4} md={12} sm={12} key={index}>
          <Card style={{ width: '100%' }} className='m-3'>
            <Card.Body>
              <Card.Title className='text-center fw-bold'>{item.name}</Card.Title>
              <Card.Text className='mt-3'>
                <Row>
                  <Col lg={6} sm={12}>
                    <p>CITY: {item.city}</p>
                    <p>DATE SCHEDULED: {item.date}</p>
                  </Col>
                  <Col lg={6} sm={12}>
                    <p>PHONE: {item.phone}</p>
                    <p>DISTRICT: {item.district}</p>
                  </Col>
                </Row>
              </Card.Text>
              <div className='d-flex justify-content-center'>
                <Button variant="success" onClick={() => setOpen(!open)}>
                  <i className="fa-solid fa-arrow-up-from-bracket fa-rotate-180" style={{ color: "#d5d6d8" }}></i>
                </Button>
              </div>
              <Collapse in={open}>
                <div>
                  <hr className='text-success' />
                  <div>
                    <p className='text-center'>ADDRESS</p>
                    <p>{item.address}</p>
                  </div>
                  <hr className='text-success' />
                  <div>
                    <p className='text-center'>JOB DESCRIPTION</p>
                    <p>{item.description}</p>
                  </div>
                  <div>
                    {item?.status === true ? (
                      <div className='d-flex justify-content-center'>
                        <button className='btn btn-danger' onClick={() => handlereject(item._id)}>REJECT</button>
                      </div>
                    ) : (
                      <div className='d-flex justify-content-center'>
                        <button className='btn btn-success mb-3' onClick={() => handleapprove(item._id)}>APPROVE</button>
                      </div>
                    )}
                  </div>
                </div>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    
        : <div className='d-flex justify-content-center align-items-center flex-column'>
          <img height={'400px'} src={empty} alt="" />
          <h3 className='mt-3'>No <span className='text-danger fw-bold'>Bookings</span> Available for you yet </h3>
        </div>

      }

    </>
  )
}

export default Viewbooking