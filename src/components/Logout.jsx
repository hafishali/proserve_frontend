import React from 'react'
import { useNavigate } from 'react-router-dom'

function Logout() {
    const navigate=useNavigate()
    const handleLogout =()=>{
        sessionStorage.clear()
      navigate('/')
        

    }
  return (
    <div>
    <button onClick={handleLogout} className='btn btn-danger'> <i class="fa-solid fa-power-off me-2" style={{color: "#f2f2f3"}}></i>Logout</button>
  
</div>
  )
}

export default Logout
