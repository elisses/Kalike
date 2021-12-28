import React from 'react';
import YouTube from 'react-youtube';
import "./Experience.css";
import Kalike from '../image/kalike.png';


const Experience = () => {
    const url = "https://www.youtube.com/watch?v=Klta3uf4uzw";
    const videoCode = url.split("v=")[1].split("&")[0];

    function videoOnReady(event) {
        event.target.pauseVideo();
    }

    const opts = {
        height: '390',
        playerVars: {

            autoplay: 1,
        },
    };

    return (
        <div className='wrapper_experience'>
            <div className='video'>
                <YouTube videoId={videoCode} opts={opts} videoOnReady={(e) => videoOnReady(e)} />
            </div>
            <div className='fedback'>
                <div className='client'>
                    <img src={Kalike} alt='#' />
                    <p>Name</p>
                    <p>
                        Lorem Ipsum jest tekstem stosowanym jako przykładowy
                        wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w.
                    </p>
                </div>
                <div className='client'>
                    <img src={Kalike} alt='#' />
                    <p>Name</p>
                    <p>
                        Lorem Ipsum jest tekstem stosowanym jako przykładowy
                        wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w.
                    </p>
                </div>
                <div className='client'>
                    <img src={Kalike} alt='#' />
                    <p>Name</p>
                    <p>
                        Lorem Ipsum jest tekstem stosowanym jako przykładowy
                        wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w.
                    </p>
                </div>

            </div>

        </div>
    )
}

export default Experience
