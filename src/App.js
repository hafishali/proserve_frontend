import { Route, Routes } from 'react-router-dom';
import './App.css';
import Adminauth from './pages/Admin/Adminauth';
import Proauth from './pages/Professional/Proauth';
import Userauth from './pages/user/Userauth';
import Mainhome from './pages/home/Mainhome';
import Userhome from './pages/user/Userhome';
import Bookworker from './pages/user/Bookworker';
import Bookinghistory from './pages/user/Bookinghistory';
import Bookingdetails from './pages/user/Bookingdetails';
import Profhome from './pages/Professional/Profhome';
import Workerprofile from './pages/Professional/Workerprofile';
import Viewbooking from './pages/Professional/Viewbooking';
import Adminhome from './pages/Admin/Adminhome';
import Adviewworker from './pages/Admin/Adviewworker';


function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Mainhome/>}></Route>
        
        <Route path='/adminlogin' element={ <Adminauth />}></Route>
        <Route path='/pofessionalregister' element={ <Proauth proregister/>}></Route>
        <Route path='/pofessionallogin' element={ <Proauth/>}></Route>
        <Route path='/userregister' element={<Userauth usrregister />  }></Route>
        <Route path='/userlogin' element={ <Userauth/>}></Route>
        <Route path='/userhome' element={ <Userhome/>}></Route>
        <Route path='/booking' element={ <Bookworker/>}></Route>
        <Route path='/bookinghistory' element={ <Bookinghistory/>}></Route>
        <Route path='/bookingdetails' element={ <Bookingdetails/>}></Route>
        <Route path='/profhome' element={ <Profhome/>}></Route>
        <Route path='/profile' element={ <Workerprofile/>}></Route>
        <Route path='/viewbooking' element={ <Viewbooking/>}></Route>
        <Route path='/adminhome' element={ <Adminhome/>}></Route>
        <Route path='/viewworker' element={ <Adviewworker/>}></Route>

      </Routes>
     
    </div>
  );
}

export default App;
