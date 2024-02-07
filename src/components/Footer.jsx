import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import logo from '../pages/assets/main logo-PhotoRoom.png-PhotoRoom.png'

function Footer() {
    return (
       
        <div className='w-100' style={{ backgroundColor: "#c8e0e0" }} >
            {/* <h3 className='text-dark fw-bold fs-3'>PRO<span className='text-success'>SERVE</span></h3> */}
            <Row>
                <Col className='lg-6 '>

                    <div className='d-flex justify-content-evenly'>

                        <div>
                            <img  style={{float:'left'}} height={'150px'} src={logo} alt="" />
                        </div>
                        <div className='d-flex flex-column'>
                            <h4 className=''>Links</h4>
                            <Link to={'/'} style={{ textDecoration: 'none', color: 'black' }}>Home</Link>
                            <Link to={'/pofessionallogin'} style={{ textDecoration: 'none', color: 'black' }}>professional Login</Link>
                            <Link to={'/userlogin'} style={{ textDecoration: 'none', color: 'black' }}>User Login</Link>
                        </div>
                        <div className='guides d-flex flex-column ms-2'>
                            <h4>Guides</h4>
                            <Link to={'/'} style={{ textDecoration: 'none', color: 'black' }}>React</Link>
                            <Link to={'https://react-bootstrap.github.io/'} style={{ textDecoration: 'none', color: 'black' }}>React Bootstrap</Link>
                            <Link to={'https://www.mongodb.com/cloud/atlas/lp/try4?utm_source=bing&utm_campaign=search_bs_pl_evergreen_atlas_core_prosp-brand_gic-null_apac-in_ps-all_desktop_eng_lead&utm_term=mongodb%20atlas&utm_medium=cpc_paid_search&utm_ad=e&utm_ad_campaign_id=415204524&adgroup=1208363748749217&msclkid=820231b5e02c16520998543b8469298c'} style={{ textDecoration: 'none', color: 'black' }}>MongoDB</Link>
                        </div>
                       
                    </div>

                </Col>
                <Col className='lg-6 '>
                    <div className='d-flex justify-content-evenly'>
                        <div>
                            <h4>Contact us</h4>
                            <a style={{ fontSize: '15px' }}  href=""><i class="fa-brands fa-2x    fa-instagram " style={{ color: 'black' }}></i></a>
                            <a style={{ fontSize: '15px' }} className='ms-3' href=""><i class="fa-brands fa-2x   fa-twitter " style={{ color: 'black' }}></i></a>
                            {/* <a style={{ fontSize: '15px' }} className='ms-3' href=""><i class="fa-brands fa-2x    fa-facebook " style={{ color: 'black' }}></i></a> */}
                            <a style={{ fontSize: '15px' }} className='ms-3' href=""><i class="fa-brands fa-2x   fa-github " style={{ color: 'black' }}></i></a>
                            <a style={{ fontSize: '15px' }} className='ms-3' href=""><i class="fa-brands fa-2x   fa-linkedin " style={{ color: 'black' }}></i></a>
                        </div>

                        <div>
                             <div className='guides d-flex flex-column ms-2'>
                            <h4>Terms&Conditions</h4>
                            <Link to={''} style={{ textDecoration: 'none', color: 'black' }}>Privacy statement</Link>
                            <Link to={''} style={{ textDecoration: 'none', color: 'black' }}>Terms&Conditions</Link>
                            <Link to={''} style={{ textDecoration: 'none', color: 'black' }}>Cookies</Link>
                        </div>

                        </div>
                    </div>
                    
                </Col>
            </Row>


        </div>
    )
}

export default Footer