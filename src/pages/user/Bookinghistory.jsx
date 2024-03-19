import React, { useEffect,useState } from 'react'
import Table from 'react-bootstrap/Table';
import { cancelbookApi, viewbookingHistory } from '../../services/allApi';
import Swal from 'sweetalert2'

function Bookinghistory() {
  const [bookings, setBookings] = useState([])

  const getbooking = async () => {

    if (sessionStorage.getItem("token")) {
      const token = sessionStorage.getItem('token')
      const reqHeader = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
      const result = await viewbookingHistory(reqHeader)
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

  const deletebooking=async(id)=>{
    const token=sessionStorage.getItem("token")

        const reqHeader = {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }

        const  result=await cancelbookApi(id,reqHeader)

        console.log(result);

        if(result.status===200){
          Swal.fire({
           
            text:'your booking has been cancelled',
            icon:'success'
        })
          getbooking()

        }
        else{
            alert('error')
            console.log(result.response.data);
        }


  }
  return (
   <>
   <h2 className='text-center mt-5 fw-bold'>Booking <span className='text-success'>History</span></h2>
   <Table striped bordered hover className='mt-3'>
      <thead>
        <tr>
          <th>#</th>
          <th>WORKER</th>
          <th>JOB</th>
          <th>DATE</th>
          <th>JOB DESCRIPTION</th>
          <th>STATUS</th>
          <th>ACTION</th>
        </tr>
      </thead>
      <tbody>
       {bookings?.length>0?
       bookings.map((item,index)=>( <tr>
        <td>{index+1}</td>
        <td>{item.worker_name}</td>
        <td>{item.job}</td>
        <td>{item.date}</td>
        <td>{item.description}</td>
        <td>
  {item.status === true ? (
    <span className='text-success fw-bold'>Approve</span>
  ) : (item.status === false ? (
    <span className='text-danger fw-bold'>Rejected</span>
  ) : (
    <span className='text-info fw-bold'>Pending</span>
  ))}
</td>
<td>{item.status===false&&<button className='btn btn-danger' onClick={()=>deletebooking(item._id)}>Cancel</button>}</td>
        
      </tr>))
       
        : <p>No Bookings yet</p> }
        
      </tbody>
    </Table>


   </>
  )
}

export default Bookinghistory