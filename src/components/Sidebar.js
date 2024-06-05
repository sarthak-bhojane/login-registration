import React from 'react';
import '../components/Sidebar.css';
import home from '../assets/styles/home.svg';
import notification from '../assets/styles/notification.svg';
import heart from '../assets/styles/heart.svg';
import message from '../assets/styles/message.svg';
import message1 from '../assets/styles/message(1).svg';
import favorite from '../assets/styles/favorite.svg';
import profile from '../assets/styles/profile.svg';
import setting from '../assets/styles/setting.svg';
import logout from '../assets/styles/logout.svg';


import { auth, db } from "./firebase";


const Sidebar = () => {
  async function handleLogout() {
        try {
          await auth.signOut();
          window.location.href = "/login";
          console.log("User logged out successfully!");
        } catch (error) {
          console.error("Error logging out:", error.message);
        }
      }
  return (
    <div className="sidebar">
      <ul>
        <li>  <img src={home}/> &nbsp; Home</li> <br/>
        <li> <img src={notification}/> &nbsp; Notifications</li> <br/>
        <li> <img src={heart}/> &nbsp; Shop</li> <br/>
        <li> <img src={message}/> &nbsp; Conversation</li> <br/>
        <li> <img src={message1}/> &nbsp; Wallet</li> <br/>
        <li><img src={favorite}/> &nbsp; Subscription</li> <br/>
        <li> <img src={profile}/> &nbsp; My Profile</li> <br/>
        <li> <img src={setting}/> &nbsp; Settings</li> <br/>
        <br/> <br/> <br/> <br/>
        
        <li> <img src={logout}/> &nbsp;
        <button className="btn btn-primary" onClick={handleLogout}>
            Logout
        </button>
        </li>

      </ul>
    </div>
  );
};

export default Sidebar;
