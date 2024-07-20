import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Adminauth from './pages/Admin/Adminauth';
import Proauth from './pages/Professional/Proauth';
import Userauth from './pages/user/Userauth';
import Mainhome from './pages/home/Mainhome';
import Userhome from './pages/user/Userhome';
import Bookworker from './pages/user/Bookworker';
import Bookinghistory from './pages/user/Bookinghistory';
import Profhome from './pages/Professional/Profhome';
import Workerprofile from './pages/Professional/Workerprofile';
import Viewbooking from './pages/Professional/Viewbooking';
import Adminhome from './pages/Admin/Adminhome';
import Adviewworker from './pages/Admin/Adviewworker';
import Viewusers from './pages/Admin/Viewusers';
import Bookstatus from './pages/Professional/Bookstatus';

function App() {
  
  const isAuthenticated = !!sessionStorage.getItem('token');

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Mainhome />} />

        <Route path="/adminlogin" element={<Adminauth />} />
        <Route path="/professionalregister" element={<Proauth proregister />} />
        <Route path="/professionallogin" element={<Proauth />} />
        <Route path="/userregister" element={<Userauth usrregister />} />
        <Route path="/userlogin" element={<Userauth />} />
        <Route path="/userhome"element={ <Userhome usrheader /> }/>
        <Route path="/profhome" element={ <Profhome /> } />
        <Route path="/adminhome"element={ <Adminhome adhome /> }/>
        
        <Route
          path="/booking"
          element={isAuthenticated ? <Bookworker usrheader /> : <Navigate to="/" replace />}
        />
        <Route
          path="/bookinghistory"
          element={isAuthenticated ? <Bookinghistory /> : <Navigate to="/" replace />}
        />
        
        <Route
          path="/profile"
          element={ <Workerprofile /> }
        />
        <Route
          path="/viewbooking"
          element={isAuthenticated ? <Viewbooking /> : <Navigate to="/" replace />}
        />
        <Route
          path="/booking/history"
          element={isAuthenticated ? <Bookstatus /> : <Navigate to="/" replace />}
        />
      
        <Route
          path="/viewworker"
          element={isAuthenticated ? <Adviewworker /> : <Navigate to="/" replace />}
        />
        <Route
          path="/admin/viewusers"
          element={isAuthenticated ? <Viewusers /> : <Navigate to="/" replace />}
        />
      </Routes>
    </div>
  );
}

export default App;
