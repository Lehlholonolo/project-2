import { Routes, Route, BrowserRouter } from "react-router-dom"
import Home from "./pages/home/Home";
import Layout from "./components/layout/Layout";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Forgot from "./pages/auth/Forgot";
import ResetPassword from "./pages/auth/ResetPassword";
import SecondAuth from "./pages/auth/SecondAuth";
import Profile from "./pages/profile/Profile";
import Verify from "./pages/auth/Verify";
import ChangePassword from "./pages/changePassword/ChangePassword";
import UserList from "./pages/userList/UserList";
// import Cards from "./components/card/ServiceData";
import Feature from './components/featured/Featured';
import Tab from './components/pageMenuHome/pageMenuHome';





function App() {
  return (
   <>
   <BrowserRouter>
 
   <Routes>
    <Route path="/" element={ <Layout><Tab/><Feature/><Home/></Layout> }></Route>
    <Route path="/login" element={ <Login/> }></Route>
    <Route path="/register" element={ <Register/> }></Route>
    <Route path="/forgot" element={ <Forgot/> }></Route>
    <Route path="/resetPassword/:resetToken" element={ <ResetPassword/> }></Route>
    <Route path="/secondAuth/:email" element={ <SecondAuth/> }></Route>
    <Route path="/forgot" element={ <Forgot/> }></Route>
    <Route path="/verify/:verificationToken" element={ <Layout><Verify/></Layout> }></Route>
    <Route path="/profile" element={ <Layout><Profile/></Layout> }></Route>
    <Route path="/changePassword" element={ <Layout><ChangePassword/></Layout> }></Route>
    <Route path="/users" element={ <Layout><UserList/></Layout> }></Route>
    {/* <Route path="/serviceCards" element={ <Layout><Cards/></Layout> }></Route> */}
    
   </Routes>
   
   </BrowserRouter>
   
   </>
  );
}

export default App;
