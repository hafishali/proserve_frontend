import React from 'react'
import { Link } from 'react-router-dom'

function Adminheader() {
  return (
    <div>
        <nav class="navbar navbar-expand-lg " style={{backgroundColor:'#c8e0e0'}} data-bs-theme="dark">
  <div class="container-fluid">
  {/* <a class="navbar-brand " href="#"><img className='t-1' src={logo} height={'100px'}width={'100px'} alt="" /></a> */}
    <a class="navbar-brand text-dark fs-3 fw-bold " href="#">PRO<span className='text-success'>SERVE</span></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    
    <div class="collapse navbar-collapse   " id="navbarColor01">
      <ul class="navbar-nav me-3 ">
       
      
          <li class="nav-item">
           <Link to={'/adminhome'} style={{textDecoration:'none'}}> <a class="nav-link text-dark" href="#aboutus">HOME</a></Link> 
          </li>
          <li class="nav-item">
           <Link style={{textDecoration:'none'}} to={'/viewworker'}><a class="nav-link text-dark">MANAGE WORKER</a></Link> 
          </li>
          <li class="nav-item">
           <Link to={'/admin/viewusers'} style={{textDecoration:'none'}} ><a class="nav-link text-dark" href="#ourmission">MANAGE USER</a></Link> 
          </li>
         
          {/* <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle text-dark" data-bs-toggle="dropdown" href="" role="button" aria-haspopup="true" aria-expanded="false">LOGIN</a>
            <div class="dropdown-menu ">
              <a class="dropdown-item " href="#">User Login</a>
              <a class="dropdown-item" href="#">Professional Login</a>
             
             
             
            </div>
           
          </li> */}
       
      </ul>
    
       
    

    </div>
   
  </div>
</nav>
    </div>
  )
}

export default Adminheader
