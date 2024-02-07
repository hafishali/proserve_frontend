import React from 'react'
import logo from '../pages/assets/CONSTRUCTION-PhotoRoom.png-PhotoRoom.png'

function Header() {
  return (
    <>
        <nav class="navbar navbar-expand-lg " style={{backgroundColor:'#c8e0e0'}} data-bs-theme="dark">
  <div class="container-fluid">
  {/* <a class="navbar-brand " href="#"><img className='t-1' src={logo} height={'100px'}width={'100px'} alt="" /></a> */}
    <a class="navbar-brand text-dark fs-3 fw-bold " href="#">PRO<span className='text-success'>SERVE</span></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse  " id="navbarColor01">
      <ul class="navbar-nav me-3 ">
       
        <li class="nav-item">
          <a class="nav-link text-dark" href="#aboutus">ABOUT US</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-dark" href="#ourmission">OUR MISSION</a>
        </li>
       
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle text-dark" data-bs-toggle="dropdown" href="" role="button" aria-haspopup="true" aria-expanded="false">LOGIN</a>
          <div class="dropdown-menu ">
            <a class="dropdown-item " href="#">User Login</a>
            <a class="dropdown-item" href="#">Professional Login</a>
           
           
           
          </div>
         
        </li>
      </ul>
      {/* <form class="d-flex">
        <input type="text"class="form-control me-sm-2" placeholder="Search" />
        <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
      </form> */}
       
    </div>
  </div>
</nav>
    </>
  )
}

export default Header