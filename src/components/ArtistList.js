import React from 'react';
import '../components/ArtistList.css';

import bg from '../assets/styles/bg.png';
import bg1 from '../assets/styles/bg1.png';
import bg2 from '../assets/styles/bg2.png';
import bg3 from '../assets/styles/bg3.png';

import imgbg1 from '../assets/styles/imgbg1.png';
import imgbg2 from '../assets/styles/imgbg2.png';
import imgbg3 from '../assets/styles/imgbg3.png';
import imgbg4 from '../assets/styles/imgbg4.png';

const ArtistList = () => {

    const backgroundStyle = {
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '201px',
        height: '100px'
    };

    const backgroundStyle1 = {
        backgroundImage: `url(${bg1})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '201px',
        height: '100px'
    };
    const backgroundStyle2 = {
        backgroundImage: `url(${bg2})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '201px',
        height: '100px'
    };
    const backgroundStyle3 = {
        backgroundImage: `url(${bg3})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '201px',
        height: '100px'
    };

    return (
        <div className="artist-list" >
            <div className="artist" style={backgroundStyle}>
                <img src={imgbg1} alt="Artist" className="artist-image" />
                <div>
                    <h4>Thomas Edward</h4>
                    <p>@thewildwithyou</p>
                </div>
            </div>
            <div className="artist" style={backgroundStyle1}>
                <img src={imgbg2} alt="Artist" className="artist-image" />
                <div>
                    <h4>Chris Doe</h4>
                    <p>@thewildwithyou</p>
                </div>
            </div>
            <div className="artist" style={backgroundStyle2}>
                <img src={imgbg3} alt="Artist" className="artist-image" />
                <div>
                    <h4 >Emilie Jones</h4>
                    <p>@thewildwithyou</p>
                </div>
            </div>
            <div className="artist" style={backgroundStyle3}>
                <img src={imgbg4} alt="Artist" className="artist-image" />
                <div>
                    <h4>Jessica William</h4>
                    <p>@thewildwithyou</p>
                </div>
            </div>
        </div>
    );
};

export default ArtistList;
