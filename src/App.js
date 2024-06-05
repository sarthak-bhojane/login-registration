// import React from 'react';
// import './App.css';
// import Sidebar from './components/Sidebar';
// import Post from './components/Post';
// import ArtistList from './components/ArtistList';

// function App() {
//   //write logic
//   return (
//     //write components ex html
//     <div className="app"> 
//       <div className="content">
//       <div className="logo">LOGO</div>
//       <Sidebar /> 
//       </div>
//       <div className="content">
//         <input type="text" placeholder="Search here..." className="search-bar" />
//         <Post />
//         </div>
//       <div className="content">
//         <button className="become-seller">Become a Seller</button>
//       <ArtistList />
//       </div>
//     </div>   
//   );
// }

// export default App;



import React, { useEffect } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Login from "./components/login";
import SignUp from "./components/register";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Profile from "./components/profile";
import { useState } from "react";
import { auth } from "./components/firebase";

function App() {
  const [user, setUser] = useState();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  });
  return (
    // <Router>
      <div className="App">
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route
                path="/"
                element={user ? <Navigate to="/profile" /> : <Login />}
              />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<SignUp />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
            <ToastContainer />
          </div>
        </div>
      </div>
    // </Router>
  );
}

export default App;