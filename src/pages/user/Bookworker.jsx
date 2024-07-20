import React, { useEffect, useState } from 'react';
import { Row, Col, Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import worker_img from '../assets/Plumber.jpg';
import { useParams } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import { GetAllworkers, bookApi } from '../../services/allApi';
import { base_url } from '../../services/baseurl';
import empty from '../assets/nothing.jpg'
import Swal from 'sweetalert2'
import Header from '../../components/Header';

function Bookworker(props) {
  const [modalShow, setModalShow] = useState(false);
  const [workers, setWorkers] = useState([])
  const [selectedWorker, setSelectedWorker] = useState(null);
  const [search,setSearch]=useState("")
  const [book,setBook]=useState({
    worker_name:"",
    job:"",
    name:"",
    phone:"",
    city:"",
    date:"",
    district:"",
    description:"",
    address:"",
    
    workerId:"",
    status:false
 
  })
  console.log(book)

  const [searchParams] = useSearchParams();
    const worker = searchParams.get('worker');
    console.log(worker)

    const viewallworkers = async () => {

      if (sessionStorage.getItem("token")) {
        const token = sessionStorage.getItem('token')
        const reqHeader = {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        }
        const result = await GetAllworkers(reqHeader)
        console.log(result.data);
  
        if (result.status === 200) {
          setWorkers(result.data)
  
  
  
        }
  
  
  
      }
  
    }
   
    useEffect(() => {
      viewallworkers()
    }, [])

    const viewworker=workers.filter(item=>item.job===worker && item.status===true)
    console.log(viewworker)

    const handleBookClick = (worker) => {
      setSelectedWorker(worker);
      setModalShow(true);
    };
    console.log(search)

    // const handlesearch = () => {
    //   const searchResults = workers.filter(item => item.district.toLowerCase() === search.toLowerCase());
    //   console.log(searchResults);
    // };
    useEffect(() => {
      if (selectedWorker) {
        setBook({
          ...book,
          worker_name: selectedWorker.name,
          job: selectedWorker.job
        });
      }
    }, [selectedWorker]);
  
    
    const handleBook=async(workerid)=>{
      console.log(workerid)
      setBook({ ...book, workerId:workerid })
      console.log(`lmlml${book}`)
      const {worker_name,job,name,phone,city,date,district,description,address,workerId}=book
      if(!worker_name || !job || !name || !phone ||!city ||!date ||!district ||!description ||!address ||!workerId ){
        Swal.fire({
          title: 'oops',
          text: 'Please fill the form completley',
          icon: 'warning'
      })

      }
      else{
        const token = sessionStorage.getItem("token")
        const reqHeader = {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        }
        const result = await bookApi(book,reqHeader)
        console.log(result.data)
        if (result.status === 200) {
            // alert('Your registration is successfull')
            Swal.fire({
                title: "Successful",
                text: "Your Booking Request has been sent",
                icon: "success"
            });
            setBook({
              worker_name:"",
              job:"",
              name:"",
              phone:"",
              city:"",
              date:"",
              district:"",
              description:"",
              address:"",
              status:false,
            
           
            })
           
          
        }
        else {
            alert(result.response.data)
        }

      }

    }
    

  return (
    <>
    <Header/>
    <h2 className='text-center mt-5 fw-bold'>Book<span className='text-success'> {worker}</span></h2>
      <div className='d-flex justify-content-center mt-5 border-rounded' >
      
      <input
          className='form-control w-25'
          type="text"
          name=""
          id=""
          onChange={(e) => {
            setSearch(e.target.value);
/*             handlesearch(e.target.value); */
          }}
          placeholder='Enter your District'
        />
        {/* <button className='btn btn-info ms-3' >SEARCH</button> */}
      </div>

      <div className='d-flex justify-content-center mt-5'>
       
          {viewworker?.length>0?
          viewworker.filter((item)=>{
            return search.toLowerCase()===''?item:item.district.toLowerCase().includes(search)
          })
          .map((item)=>( <Row><Col className='mt-3 ms-3' lg={4} md={6} sm={12}>
            <Card style={{ width: '25rem' }}>
              <Row>
                <Col lg={6} sm={12}>
                  <Card.Img variant="top" className='img-fluid' style={{ width: '100%', height: '100%' }} src={`${base_url}/uploads/${item.image}`}/>
                  <Card.Body></Card.Body>
                </Col>
                <Col lg={6} sm={12} >
                  <Card.Body>
                    <Card.Title className='fw-bold text-center'>{item.name}</Card.Title>
                    <Card.Text>JOB:{item.job}</Card.Text>
                    <Card.Text>COWORKERS:{item.coworkers}</Card.Text>
                    <Card.Text>DAILY WAGE:{item.dailywage}</Card.Text>
                    <Card.Text>PLACE:{item.city}</Card.Text>
                    <Card.Text>DISTRICT:{item.district}</Card.Text>
                    <Card.Text>CONTACT:{item.phone}</Card.Text>
                    <div className='d-flex justify-content-center'>
                      <Button onClick={() => handleBookClick(item)} variant="success">BOOK</Button>
                    </div>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col></Row>) )/* : <p>nothing to show</p> */
          : <div className='d-flex justify-content-center align-items-center flex-column'>
            <img height={'400px'} src={empty} alt="" />
            <h3 className='mt-3'>No <span className='text-danger fw-bold'>{worker}</span> Available yet </h3>
            </div> }
        
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
          <h4 className='text-center'>BOOK {selectedWorker && selectedWorker.name} </h4>
          <Form>
          <label htmlFor="name">worker Name</label>
            <input id='name' type="text" value={selectedWorker && selectedWorker.name} disabled   className='form-control mt-2' placeholder='Enter worker Name' />
            <label htmlFor="name">job</label>
            <input id='name' type="text" value={selectedWorker && selectedWorker.job} disabled className='form-control mt-2' placeholder='Enter worker Name' />
            
            <label htmlFor="name">Full Name(your)</label>
            <input id='name' type="text"  onChange={(e) => setBook({ ...book, name: e.target.value })} className='form-control mt-2' placeholder='Enter worker Name' />
            <label htmlFor="phone">Phone Number</label>
            <input id='phone' type="text" className='form-control mt-2' onChange={(e) => setBook({ ...book, phone: e.target.value })}  placeholder='Enter your Phone Number' />
            <label htmlFor="city">City</label>
            <input id='city' type="text" className='form-control mt-2 ' onChange={(e) => setBook({ ...book, city: e.target.value })}  placeholder='Enter your City' />
            <label htmlFor="city">Date for Booking</label>
            <input id='city' type="date" onChange={(e) => setBook({ ...book, date: e.target.value })}  className='form-control mt-2 '  />

            <label htmlFor="district">District</label>
            <Form.Select id='district' onChange={(e) => setBook({ ...book, district: e.target.value })}  aria-label="Default select example" className='mt-2'>
              
              <option value="Palakkad">Palakkad</option>
              <option value="Kozhikkode">Kozhikkode</option>
              <option value="Thrissur">Thrissur</option>
            </Form.Select>
            
            {/* <label htmlFor="requirement">Requirement Detailas</label> */}
            <textarea onChange={(e) => setBook({ ...book, description: e.target.value })}  className='mt-2 form-control ' name="" id="requirement" cols="60" rows="3" placeholder='Description of your work requirments'></textarea>

            <textarea onChange={(e) => setBook({ ...book, address: e.target.value })} className='mt-2 form-control' name="" id="requirement" cols="60" rows="3" placeholder='Enter your  address'></textarea>
            
            
          </Form>


        </Modal.Body>
        <Modal.Footer>
        <button className='btn btn-success' onClick={() => handleBook(selectedWorker._id)}>BOOK NOW</button>

          <Button onClick={() => setModalShow(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Bookworker;
