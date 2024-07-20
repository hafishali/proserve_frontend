import React, { useEffect, useState } from 'react'
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
import bookimg from '../assets/appointment-booking-with-smartphone.png'
import profileimg from '../assets/hands-with-cv-resume-clip-art.png'
import apprvimg from '../assets/approved-rejected-rubber-stamps-set-two.png'
import rejectimg from '../assets/rejected-rubber-stamps-set-two.png'
import notfound from '../assets/hand-drawn-404-error.png';
import {ScaleLoader} from 'react-spinners'
import AOS from 'aos'
import 'aos/dist/aos.css'



function Profhome() {

  const[workerdts,setWorkerdts]=useState([])
  const [isAuthenticated, setIsAuthenticated] = useState(null); 
  const token = sessionStorage.getItem('token');
  useEffect(()=>{
    AOS.init({duration:1250})
    if(sessionStorage.getItem('user')){
      const worker=JSON.parse(sessionStorage.getItem('user'));
      setWorkerdts(worker)
    


    }
    else{
      console.log('worker is not logined yet')
    }
   
   
   
  },[])
  console.log(workerdts)

  const accepted='true'
  const rejected='false'


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



  
  
  
  return (
    <>
    <Proheader/>
    <section className='prohome'>
      
      <div className=' prohome d-flex align-items-center '>
          <Row>
            <Col lg={6} sm={12}>
              <div className='  text-light ms-2'>
                <p data-aos="zoom-in" className='welcome fw-bold'>Welcome  <span className='text-dark'>{workerdts.name}</span></p>
              
               
                <Link to={'/profile'}><button data-aos="flip-right" className='btn btn-primary'>view more</button></Link>

              </div>
            </Col>
            <Col lg={6} sm={12} >
<div className='d-flex justify-content-center align-items-center flex-column'>
                <img data-aos="fade-up" className='img-fluid' width={'700px'} src={profimage} alt="" />
                {/* <Link to={'/booking'}> <button className='btn btn-primary'>Bookings</button></Link> */}
               
  
</div>            </Col>



          </Row>

        </div>

      

    </section>
    <section >
      <div>
        <h1 data-aos="fade-up" className='fw-bold text-center mt-5'><span className='text-success'>Your</span> Profile</h1>
        <div className='d-flex justify-content-center '>
          <img data-aos="zoom-in-right" width={'350px'} className='img-fluid' src={profileimg} alt="" />
         

        </div>
        {workerdts.name?
        
        
        <div>
          <div>
         {workerdts.status===''?
          <div>
          <h2 className='text-center fw-bold text-warning '>Pending</h2>
          <p className='text-center'>Your profile approval is kept on <span className='text-warning'>pending</span> by Admin</p>

          </div>
          :   <div>
          {workerdts.status===true?
          <div>
          <h2 className='text-center fw-bold text-success '>approved</h2>
          <p className='text-center'>Your profile has been <span className='text-success'>approved</span> by Admin</p>

          </div>
          : <div>
          <h2 className='text-center fw-bold text-danger '>Rejected</h2>
          <p className='text-center'>Your profile has been <span className='text-danger'>rejected</span> by Admin</p>

          </div> }

          </div>}
          <div>
            <Link to={'/profile'}>
            <p className='text-center'> <span className='fw-bold'>View </span> and <span className='fw-bold'>Update</span>  your profile</p> 
            </Link>
            
          </div>

          </div>
        
         
        

        </div>
        : <div>
          <h3 className='text-danger text-center'>Please <span className='fw-bold'>Login....</span> </h3>
          <div className='d-flex justify-content-center'>
          <Link to={'/pofessionallogin'}><button className='btn btn-success '>LOGIN </button></Link>

          </div>
        </div> }
        
        

      </div>
    </section>
    <section>
      <div className='mt-5'>
        <h1 className='fw-bold text-center'> <span className='text-success'>YOUR</span> BOOKINGS</h1>
        <div>
          <Row>
            <Col lg={6} md={12}>
            <div className='d-flex justify-content-center align-items-center flex-column ' style={{height:'500px'}}>
              <img  data-aos="fade-up-right" width={'500px'} className='img-fluid' src={bookimg} alt="" />
             

            </div>
            <div className='d-flex justify-content-center  ' >
              

            </div>
            
            
            </Col>
            <Col lg={6} md={12} >
            <div  data-aos="fade-up-left" className='d-flex justify-content-center flex-column   ' style={{height:'500px'}}>
              <p style={{textAlign:"justify"}} className='mt-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident officiis qui quasi debitis numquam nulla, odio suscipit libero atque sit sunt natus asperiores magni at nostrum earum, veritatis facilis dolores?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero officiis eveniet quae ratione id dolorem aliquam consectetur impedit perspiciatis iusto culpa deleniti provident nesciunt pariatur, architecto veritatis officia distinctio magni.</p>
              <div>
              <Link to={'/viewbooking'}><button className='btn btn-success '>View Bookings </button></Link>

              </div>
              
              

            </div>
            <div>
           
            </div>

            </Col>
            
          </Row>
        </div>
      </div>
      
    </section>

    <section id='history'>
    <h1 className='text-center fw-bold'> <span className='text-success'>Booking</span> History</h1>
    <div className='d-flex justify-content-center mb-5 '>
      
    <Row>
           
              <Col sm={12} md={6}>
                <Card  data-aos="fade-right" style={{ width: '18rem' }} className='mt-3'>
                  <Card.Img style={{ height: "300px" }} variant="top" src={apprvimg} />
                  <Card.Body>
                    <Card.Title className='text-center'>APPROVED BOOKINGS</Card.Title>
  
                    <div className='d-flex justify-content-center'>
                      <Link to={`/booking/history?status=${accepted}`}><Button variant="success">VIEW</Button></Link>
                      </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm={12} md={6} >
                <Card  data-aos="fade-left"  style={{ width: '18rem' }} className='mt-3'>
                  <Card.Img style={{ height: "300px" }} variant="top" src={rejectimg} />
                  <Card.Body>
                    <Card.Title className='text-center'>REJECTED BOOKINGS</Card.Title>
  
                    <div className='d-flex justify-content-center '>
                      <Link to={`/booking/history?status=${rejected}`}><Button variant="success">VIEW</Button></Link>
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