import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Header from '../../components/Header'
import Adminheader from './Adminheader'
import './adminhome.css'
import adminimg from '../assets/5057942-Photoroom.png'
import userimg from '../assets/1706-Photoroom.png'
import workeimg from '../assets/18775-Photoroom.png'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'



function Adminhome() {
  return (
    <>
      <div>
        <Adminheader />
        <section className='adimg ' >
          <div  >
            <Row>
              <Col lg={6} md={12}>
                <div className='d-flex justify-content-center align-items-center' style={{ height: "93vh" }}>
                  <img className='img-fluid' src={adminimg} alt="" />

                </div>
              </Col>
              <Col lg={6} md={12}>
                <div className='d-flex justify-content-center align-items-center flex-column' style={{ height: "80vh" }}>

                  <h1 style={{ color: 'black', fontSize: '50px', fontWeight: 'bold' }}>Welcome Admin</h1>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione obcaecati atque, libero sit provident perferendis unde sunt enim iusto et quod blanditiis voluptatibus incidunt at nisi. Voluptate quia cumque iure. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt accusantium repellendus possimus reiciendis eos. Deleniti, tempore fugiat maiores non, doloribus quis iste illum numquam sit, ratione velit voluptate ullam repellat!</p>

                </div>
              </Col>
            </Row>

          </div>

        </section>
        <div className='mt-5'>

          <div>
            <h1 className='fw-bold text-center'><span className='text-success '>MANAGE</span> USERS</h1>
            <div className='d-flex justify-content-center  '>

              <img style={{ width: '500px' }} className='img-fluid' src={userimg} alt="" />


            </div>
            <div className='d-flex justify-content-center'>
              <div className='d-flex justify-content-center w-50 '  >
                <p className='text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore fugit iste perferendis impedit fuga officiis non facilis doloribus libero atque explicabo consectetur eligendi itaque tenetur, nihil incidunt velit illum rem?Lorem ipsum, dolor sit amet consectetur adipisicing elit. In, vitae velit atque rerum at porro totam aperiam dolore repellendus dolor architecto vero nihil itaque minus! Suscipit deserunt doloribus dolor neque.</p>



              </div>


            </div>
            <div className='d-flex justify-content-center'>
             <Link to={'/admin/viewusers'}><button className='btn btn-success'>Manage Users</button></Link> 

            </div>



            {/* <Row>
            <Col>
            <div>
            <h1 className='fw-bold text center'><span className='text-success '>MANAGE</span> USERS</h1>
              <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo sapiente nam, distinctio eius sed autem maiores quibusdam sint consectetur laboriosam, laudantium quos rerum accusamus. Minus illo tempore et libero itaque?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis eaque saepe mollitia nisi totam. Placeat quis, voluptatibus eligendi est suscipit, nulla labore facilis dolorem eveniet error nostrum molestiae. Amet, facere. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate labore veniam cumque, dolor tempora quos nihil molestias doloribus sit sed nulla hic temporibus excepturi in asperiores ab veritatis corrupti assumenda?Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo sapiente nam, distinctio eius sed autem maiores quibusdam sint consectetur laboriosam, laudantium quos rerum accusamus. Minus illo tempore et libero itaque?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis eaque saepe mollitia nisi totam. Placeat quis, voluptatibus eligendi est suscipit, nulla labore facilis dolorem eveniet error nostrum molestiae. Amet, facere. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate labore veniam cumque, dolor tempora quos nihil molestias doloribus sit sed nulla hic temporibus excepturi in asperiores ab veritatis corrupti assumenda?</p>
            </div>
            </Col>
            <Col>
              </Col>
            </Row> */}
          </div>
        </div>
        <div className='mt-5 '>
        <Row>
              <Col lg={6} md={12}>
                <div className='d-flex justify-content-center align-items-center' style={{ height: "80vh" }}>
                  <img className='img-fluid' src={workeimg} alt="" />

                </div>
              </Col>
              <Col lg={6} md={12}>
                <div className='d-flex justify-content-center align-items-center flex-column' style={{ height: "20vh" }}>

                <h1 className='fw-bold text-center'><span className='text-success '>MANAGE</span> WORKERS</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione obcaecati atque, libero sit provident perferendis unde sunt enim iusto et quod blanditiis voluptatibus incidunt at nisi. Voluptate quia cumque iure. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt accusantium repellendus possimus reiciendis eos. Deleniti, tempore fugiat maiores non, doloribus quis iste illum numquam sit, ratione velit voluptate ullam repellat!</p>
                 
                 

                </div>
                <div className='mt-3'>
                <Link to={'/viewworker'}><button className='btn btn-success'>Manage Workers</button></Link> 

                </div>
                
              </Col>
            </Row>



        </div>

        <Footer/>

      </div>
    </>
  )
}

export default Adminhome