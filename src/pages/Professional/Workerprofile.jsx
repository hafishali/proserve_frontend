import React, { useEffect, useState } from 'react'
import './profile.css'
import Swal from 'sweetalert2';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBRadio
}
  from 'mdb-react-ui-kit';
import { Form } from 'react-bootstrap';
import { base_url } from '../../services/baseurl';
import { updateProfileAPI } from '../../services/allApi';

function Workerprofile() {
  const [uptworker, setUptworker] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    district: '',
    dailywage: '',
    coworkers: '',
    job: '',
    image: '',
    
  })
  const [profileimg, setProfileimg] = useState('')
  const [existingimage, setExistingimage] = useState("")
  const [isupdate, setIsupdate] = useState(false)

  console.log(uptworker)
  useEffect(() => {
    const workers = (JSON.parse(sessionStorage.getItem("user")))
    setUptworker({ ...uptworker, name: workers.name, email: workers.email, password: workers.password, phone: workers.phone,address:workers.address, city: workers.city, district: workers.district, dailywage: workers.dailywage, coworkers: workers.coworkers, job: workers.job, image: "" })
    // console.log(workers)
    setExistingimage(workers.image)
    // console.log(existingimage)

  }, [isupdate])

  useEffect(() => {
    if (uptworker.image) {
      setProfileimg(URL.createObjectURL(uptworker.image))
    }
    else {
      setProfileimg("")
    }
  }, [uptworker.image])

  const handleupdateProfile = async () => {


    const { name, email, phone, address, city, district, dailywage, coworkers, job, image } = uptworker

    if (!name || !email || !phone || !city || !district || !dailywage || !coworkers || !job) {

      Swal.fire({
        title: "Incomplete form",
        text: "please fill the form completely",
        icon: "warning"
      });

    }
    else {





      const reqbody = new FormData()
      reqbody.append('name', name)
      reqbody.append('email', email)
      reqbody.append('phone', phone)
      reqbody.append('address', address)
      reqbody.append('city', city)
      reqbody.append('district', district)
      reqbody.append('dailywage', dailywage)
      reqbody.append('coworkers', coworkers)
      reqbody.append('job', job)
      profileimg ? reqbody.append('image', image) : reqbody.append('image', existingimage)
      const token = sessionStorage.getItem("token")

      if (profileimg) {
        const reqHeader = {
          "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${token}`
        }
        const result = await updateProfileAPI(reqbody, reqHeader)
        console.log(result);
        if (result.status === 200) {
          Swal.fire({
            title: "Profile updated successfully",
            icon: "success"
          });
          sessionStorage.setItem("user", JSON.stringify(result.data))
          setIsupdate(true)


        }
        else {
          console.log(result.response.data);

        }


      }
      else {
        const reqHeader = {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        }
        const result = await updateProfileAPI(reqbody, reqHeader)
        console.log(result);
        if (result.status === 200) {
          Swal.fire({
            title: "Profile updated successfully",
            icon: "success"
          });
          sessionStorage.setItem("user", JSON.stringify(result.data))
          setIsupdate(true)


        }
        else {
          console.log(result.response.data);

        }

      }

    }







  }

  const handleclear=()=>{
    window.location.reload();
  }



  return (
    <>
      <h2 className='text-center fw-bolder'>Update <span className='text-success '>Profile</span></h2>

      <MDBContainer fluid>
        <Form>

          <MDBRow className='justify-content-center align-items-center m-5 shadow'>

            <MDBCard>
              <MDBCardBody className='px-4'>

                {/* <h3 className="fw-bold mb-4 pb-2 pb-md-0 mb-md-5">Registration Form</h3> */}
                <div className='d-flex justify-content-center mb-3'>
                  <label htmlFor="img">
                    {existingimage == "" ? <img className='img-fluid' style={{ height: '250px', width: '250px', borderRadius: '50%' }} src={profileimg ? profileimg : "https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-851.jpg?w=740&t=st=1705433309~exp=1705433909~hmac=198f4ed322063ad9940bee25d59310ccdbacf38d74c0d7ec26294bc1bdf5924f"} alt="" />
                      :
                      <img className='img-fluid' style={{ height: '250px', width: '250px', borderRadius: '50%' }} src={profileimg ? profileimg : `${base_url}/uploads/${existingimage}`} alt="" />}
                  </label>
                  <input type="file" id='img' style={{ display: 'none' }} onChange={(e) => setUptworker({ ...uptworker, image: e.target.files[0] })} />


                </div>





                <MDBRow>

                  <MDBCol md='6'>
                    <MDBInput wrapperClass='mb-4' label=' Name' size='lg' id='form1' type='text' onChange={(e) => setUptworker({ ...uptworker, name: e.target.value })} value={uptworker.name} />
                  </MDBCol>

                  <MDBCol md='6'>
                    <MDBInput wrapperClass='mb-4' label='Address ' size='lg' id='form2' type='text' onChange={(e) => setUptworker({ ...uptworker, address: e.target.value })} value={uptworker.address} />
                  </MDBCol>

                </MDBRow>

                <MDBRow>

                  <MDBCol md='6'>
                    <MDBInput wrapperClass='mb-4' label='city' size='lg' id='form3' type='text' onChange={(e) => setUptworker({ ...uptworker, city: e.target.value })} value={uptworker.city} />
                  </MDBCol>

                  <MDBCol md='6' className='mb-4'>
                    {/* <MDBInput wrapperClass='mb-4' label='District' size='lg' id='form3' type='text'/> */}

                    <select class="form-select" aria-label="Choose your district" onChange={(e) => setUptworker({ ...uptworker, district: e.target.value })} value={uptworker.district}>
                      <option selected disabled >Choose your district</option>
                      <option value="palakkad">Palakkad</option>
                      <option value="Thrissur">Thrissur</option>
                      <option value="Ernakulam">Ernakulam</option>
                    </select>


                  </MDBCol>

                </MDBRow>
                <MDBRow>

                  <MDBCol md='6'>
                    <MDBInput wrapperClass='mb-4' label='Daily wage' size='lg' id='form3' type='text' onChange={(e) => setUptworker({ ...uptworker, dailywage: e.target.value })} value={uptworker.dailywage} />
                  </MDBCol>

                  <MDBCol md='6' className='mb-4'>
                    <MDBInput wrapperClass='mb-4' label='Coworkers' size='lg' id='form3' type='text' onChange={(e) => setUptworker({ ...uptworker, coworkers: e.target.value })} value={uptworker.coworkers} />


                  </MDBCol>

                </MDBRow>

                <MDBRow>

                  <MDBCol md='6'>
                    <MDBInput wrapperClass='mb-4' label='Email' size='lg' id='form4' type='email' onChange={(e) => setUptworker({ ...uptworker, email: e.target.value })} value={uptworker.email} />
                  </MDBCol>

                  <MDBCol md='6'>
                    <MDBInput wrapperClass='mb-4' label='Phone Number' size='lg' id='form5' type='rel' onChange={(e) => setUptworker({ ...uptworker, phone: e.target.value })} value={uptworker.phone} />
                  </MDBCol>

                </MDBRow>

                {/* <MDBSelect
            label='Choose option'
            className='mb-4'
            size='lg'
            data={[
              { text: 'Choose option', value: 1, disabled: true },
              { text: 'Subject 1', value: 2 },
              { text: 'Subject 2', value: 3 },
              { text: 'Subject 3', value: 4 }
            ]}
            /> */}
                <div className='d-flex justify-content-evenly'>
                <MDBBtn type='button' className='mb-4 btn-danger' onClick={handleclear} size='lg'>Clear</MDBBtn>
                 
                  <MDBBtn type='button' className='mb-4 btn-success' size='lg' onClick={handleupdateProfile}>Submit</MDBBtn>
                  </div>

              </MDBCardBody>
            </MDBCard>

          </MDBRow>
        </Form>
      </MDBContainer>


    </>
  )
}

export default Workerprofile