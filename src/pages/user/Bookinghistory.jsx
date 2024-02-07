import React from 'react'
import Table from 'react-bootstrap/Table';

function Bookinghistory() {
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
          <th>DATE</th>
          <th>ACTION</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        
      </tbody>
    </Table>


   </>
  )
}

export default Bookinghistory