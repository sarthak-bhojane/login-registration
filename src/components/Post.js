// import React from 'react';
import '../components/Post.css';
import img1 from '../assets/styles/img1.png';
import img2 from '../assets/styles/img2.png';
import like from '../assets/styles/like.png';
import comment from '../assets/styles/comment.png';
import share from '../assets/styles/share.svg';

import Thomas from '../assets/styles/thomas.png';

import image1 from '../assets/styles/image1.png';
import image2 from '../assets/styles/image2.png';
import image3 from '../assets/styles/image3.png';
import image4 from '../assets/styles/image4.png';

// fetching data from firebase
import React, { useEffect, useState } from "react";
import { auth, db } from "./firebase";
import { doc, getDoc } from "firebase/firestore";

const postImages = [
    { src: image1, title: "Modern Wall Decor Framed Painting", description: "$199.99" },
    { src: image2, title: "Modern Wall Decor Framed Painting", description: "$199.99" },
    { src: image3, title: "Modern Wall Decor Framed Painting", description: "$199.99" },
    { src: image4, title: "Title 4", description: "Description 4" },
  ];

const Post = () => {  
    // const postImages = [image1, image2, image3, image4];
//fectching data from firebase
const [userDetails, setUserDetails] = useState(null);
  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      console.log(user);

      const docRef = doc(db, "Users", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setUserDetails(docSnap.data());
        console.log(docSnap.data());
      } else {
        console.log("User is not logged in");
      }
    });
  };
  useEffect(() => {
    fetchUserData();
  }, []);

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
    <>
    <div className="post">
      <div className="post-header">
        <img src={img1} alt="Profile" className="profile-pic" />
        <div>

        {userDetails ? (
        <>
          {/* <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              src={userDetails.photo}
              width={"40%"}
              style={{ borderRadius: "50%" }}
            />
          </div> */}

          <h3> {userDetails.firstName} </h3>
          <p> {userDetails.email}</p>

          </>
      ) : (
        <p>Loading...</p>
      )}


        </div>
      </div>
      <p>
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
      </p>
      <img src={img2} alt="Post" className="post-image" />
      <div className="post-footer">
        <span> <img src={like} /> 9.8k</span>
        <span> <img src={comment} /> 8.6k</span>
        <span> <img src={share} /> 7.2k</span>
      </div>
    </div>

<div className="post">
<div className="post-header">
  <img src={Thomas} alt="Profile" className="profile-pic" />
  <div>
    <h3>Thomas J.</h3>
    <p>@thecustomcreater</p>
  </div>
  
</div>
<p>
  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
</p>
<img src={img2} alt="Post" className="post-image" />
<div className="post-footer">
  <span> <img src={like} /> 9.8k</span>
  <span> <img src={comment} /> 8.6k</span>
  <span> <img src={share} /> 7.2k</span>
</div>
</div>

{/* Horizontally scrollable images
<div className="post-images-container">
        {postImages.map((image, index) => (
          <img key={index} src={image} alt={`Post ${index}`} className="post-image" />
        ))}
      </div>
      <div className="post-footer">
        <span>9.8k</span>
        <span>8.6k</span>
        <span>7.2k</span>
      </div> */}
  
   {/* Horizontally scrollable images with details */}
   <div className="post-images-container">
        {postImages.map((image, index) => (
          <div key={index} className="post-image-wrapper">
            <img src={image.src} alt={`Post ${index}`} className="post-image" />
            <div className="post-image-details">
              <h4>{image.title}</h4>
              <p>{image.description}</p>
            </div>
          </div>
        ))}
        </div>
</>
  );
};

export default Post;
