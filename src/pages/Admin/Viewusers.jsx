import React, { useEffect, useState } from 'react'
import { viewallusers } from '../../services/allApi'

function Viewusers() {

  const[users,setUsers]=useState([])

  const getuser=async()=>{
    if(sessionStorage.getItem("token")){
      const token = sessionStorage.getItem('token')
      const reqHeader = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
      const result = await viewallusers(reqHeader)
      console.log(result);

      if (result.status === 200) {
        setUsers(result.data)



      }
      else{
        console.log('something went wrong')
      }
    }
    else{
      console.log('token is not available')
    }

   
  }

  useEffect(()=>{
    getuser()
  },[])

  console.log(users)
  return (
    <div>
        <h1 className='text-center mt-5 bold'><span className='text-success'>USERS</span>  LIST</h1>
        <div className='d-flex justify-content-center '>
        <table class="table table-striped mt-3">
  <thead>
    <tr>
      <th scope="col" ><h5>#</h5></th>
      <th scope="col"><h5>NAME</h5></th>
      <th scope="col"><h5>USER NAME</h5></th>
      <th scope="col"><h5>EMAIL</h5></th>
    </tr>
  </thead>
  <tbody>
   {users?.length>0?
   users.map((item,index)=>(<tr>
    <th scope="row">{index+1}</th>
    <td>{item.name}</td>
    <td>{item.username}</td>
    <td>{item.email}</td>
  </tr>))

    : <p>nothing to show</p> }
   
  </tbody>
</table>

        </div>
 
      
    </div>
  )
}

export default Viewusers
