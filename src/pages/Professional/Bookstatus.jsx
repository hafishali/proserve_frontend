import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import { viewBookings } from '../../services/allApi';

function Bookstatus() {
    const [searchParams] = useSearchParams();
    const booking_status = searchParams.get('status');
    const [bookings, setBookings] = useState([])
    console.log(booking_status)

    const getbooking = async () => {

        if (sessionStorage.getItem("token")) {
            const token = sessionStorage.getItem('token')
            const reqHeader = {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
            const result = await viewBookings(reqHeader)
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


    return (
        <div>
        {booking_status === 'true' ? (
          <div className='mt-3'>
            <h1 className='text-center fw-bold'>
              <span className='text-success'>Approved</span> Bookings
            </h1>
            <div>
              {bookings?.filter(item => item.status === true).length > 0 ? (
                <div>
                  <table className="table table-striped mt-3">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">NAME</th>
                        <th scope="col">CITY</th>
                        <th scope="col">DISTRICT</th>
                        <th scope="col">DATE SCHEDULED</th>
                        <th scope="col">ADDRESS</th>
                        <th scope="col">CONTACT</th>
                        <th scope="col">JOB DESCRIPTION</th>
                      </tr>
                    </thead>
                    <tbody>
                      {bookings
                        .filter(item => item.status === true)
                        .map((item, index) => (
                          <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{item.name}</td>
                            <td>{item.city}</td>
                            <td>{item.district}</td>
                            <td>{item.date}</td>
                            <td>{item.address}</td>
                            <td>{item.phone}</td>
                            <td>{item.description}</td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div>
                  <p>Nothing to show</p>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className='mt-3'>
            <h1 className='text-center fw-bold'>
              <span className='text-danger'>Rejected</span> Bookings
            </h1>
            <div>
              {bookings?.filter(item => item.status === false).length > 0 ? (
                <div>
                  <table className="table table-striped mt-3">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">NAME</th>
                        <th scope="col">CITY</th>
                        <th scope="col">DISTRICT</th>
                        <th scope="col">DATE SCHEDULED</th>
                        <th scope="col">ADDRESS</th>
                        <th scope="col">CONTACT</th>
                        <th scope="col">JOB DESCRIPTION</th>
                      </tr>
                    </thead>
                    <tbody>
                      {bookings
                        .filter(item => item.status === false)
                        .map((item, index) => (
                          <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{item.name}</td>
                            <td>{item.city}</td>
                            <td>{item.district}</td>
                            <td>{item.date}</td>
                            <td>{item.address}</td>
                            <td>{item.phone}</td>
                            <td>{item.description}</td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div>
                  <p>Nothing to show</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
      

    )
}

export default Bookstatus
