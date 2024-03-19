// register user

import { base_url } from "./baseurl"
import { commonApi } from "./commonApi"


// user register
export const registerApi=async(user)=>{
    return await commonApi('POST',`${base_url}/user/register`,user,"")
}

// user login
export const loginApi=async(user)=>{
    return await commonApi('POST',`${base_url}/user/login`,user,"")
}

// worker register
export const workerregisterApi=async(worker)=>{
    return await commonApi('POST',`${base_url}/worker/register`,worker,"")
}

// workerlogin

export const workerloginApi=async(worker)=>{
    return await commonApi('POST',`${base_url}/worker/login`,worker,"")
}

// workerupdate

export const updateProfileAPI=async(reqBody,reqHeader)=>{  
    return await commonApi('PUT',`${base_url}/worker/update`,reqBody,reqHeader)
}

// admin login
export const adminloginApi=async(admin)=>{
    return await commonApi('POST',`${base_url}/admin/login`,admin,"")
}

// admin:view workers

export const allworkers=async(reqHeader)=>{
    return await commonApi('GET',`${base_url}/admin/viewworkers`,"",reqHeader)
}

// admin:approve worker

export const approveworkerApi=async(workerid,reqbody)=>{ 
    return await commonApi('PUT',`${base_url}/admin/approve/${workerid}`,reqbody)
}

// user:get all workers

export const GetAllworkers=async(reqHeader)=>{
    return await commonApi('GET',`${base_url}/user/viewworkers`,"",reqHeader)
}

// user:booking

export const bookApi=async(reqBody,reqHeader)=>{
    return await commonApi('POST',`${base_url}/user/book`,reqBody,reqHeader)
}

// worker:viewbooking

export const viewBookings=async(reqHeader)=>{
    return await commonApi('GET',`${base_url}/worker/viewbookings`,"",reqHeader)
}

// worker:approve booking

export const approveBookingApi=async(bookingid,reqbody)=>{ 
    return await commonApi('PUT',`${base_url}/booking/approve/${bookingid}`,reqbody)
}

// user:booking history

export const viewbookingHistory=async(reqHeader)=>{
    return await commonApi('GET',`${base_url}/user/viewbookings`,"",reqHeader)
}

// user:cancel booking

export const cancelbookApi=async(bookingId,reqHeader)=>{
    // projects id passed as path parameter
    return await commonApi('DELETE',`${base_url}/booking/cancel/${bookingId}`,{},reqHeader)
}





