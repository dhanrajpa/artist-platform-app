import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Component/Login';
import Registration from './Component/Registration';
import ArtistRegistration from './Component/ArtistRegistration'
import HomePage from './Component/HomePage';
import ArtistDB from './artistDashBoard/ArtistDB';
// import Sidebar from './artistDashBoard/Sidebar'
// import Rightbar from './artistDashBoard/Rightbar'
// import Navbar from './artistDashBoard/Navbar'
// import EventForm from './artistDashBoard/EventForm';
// import AboutUs from './Component/AboutUs';
import Contactus from './Component/Contactus';
import Nav from './Component/Nav';
import RequiredAuth from './authCheck/RequiredAuth';
import UserDashBoard from './UserDashBoard/UserDashBoard';

function App() {

  return (
    <div className="App">

      <BrowserRouter>
        <Nav />
        <Routes>

          <Route path='/' element={<HomePage />} />
          <Route path='/Login' element={<Login />} />
          <Route path="/ArtistRegistration" element={<ArtistRegistration />} />
          <Route path="/userRegistration" element={<Registration />} />

          <Route element={<RequiredAuth allowedRoles={["user"]} />}>
            <Route path='/userDashboard' element={<UserDashBoard />} />
          </Route>

          <Route element={<RequiredAuth allowedRoles={["artist"]} />}>
            <Route path='/home' element={<HomePage />} />
            <Route path='/aDashboard' element={<ArtistDB />} />
          </Route>

          {/* <Route path="/EventForm" element={<EventForm/>}/> 
        <Route path="/aboutUs" element={<AboutUs/>}/>
        <Route path="/contactUs" element={<Contactus/>}/> */}
          {/* <Route path="/logout" element={<HomePage/>}/> */}

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
