import React from 'react'
import logo from '../pages/assets/CONSTRUCTION-PhotoRoom.png-PhotoRoom.png'
import { Link } from 'react-router-dom'
import Logout from './Logout'


function Header({isUserHome}) {
  return (
    <>
      <nav class="navbar navbar-expand-lg " style={{ backgroundColor: '#c8e0e0' }} data-bs-theme="dark">
        <div class="container-fluid">
          {/* <a class="navbar-brand " href="#"><img className='t-1' src={logo} height={'100px'}width={'100px'} alt="" /></a> */}
          <a class="navbar-brand text-dark fs-3 fw-bold " href="#">PRO<span className='text-success'>SERVE</span></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          {isUserHome ? (
            <>
              <div class="collapse navbar-collapse  " id="navbarColor01">
                <ul className="navbar-nav me-3">
                  <li className="nav-item">
                    <Link style={{ textDecoration: 'none' }} to={'/userhome'}><a className="nav-link text-dark" href="#aboutus">HOME</a></Link>

                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-dark" href="#booksection">BOOK</a>

                  </li>
                  <li className="nav-item">
                    <Link to={'/bookinghistory'} style={{ textDecoration: 'none' }} ><a className="nav-link text-dark" href="#booksection">BOOKING HISTORY</a></Link>



                  </li>

                </ul>


              </div>
              <Logout />
            </>
          ) : (
            <>
            <div class="collapse navbar-collapse  " id="navbarColor01">
            <ul className="navbar-nav me-3">
              <li className="nav-item">
                <a className="nav-link text-dark" href="#aboutus">ABOUT US</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#ourmission">OUR MISSION</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#login">LOGIN</a>
              </li>
              {/* <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-dark" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">LOGIN</a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="#">User Login</a>
                  <a className="dropdown-item" href="#">Professional Login</a>
                </div>
              </li> */}
              </ul>
              </div>
            </>
          )}
          

        </div>
      </nav>
    </>
  )
}

export default Header