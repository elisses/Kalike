import React from 'react';
import YouTube from 'react-youtube';
import "./Experience.css";
import Client from '../image/eu3.jpg';


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
                <YouTube className='youtube' videoId={videoCode} opts={opts} videoOnReady={(e) => videoOnReady(e)} />
            </div>
            <div className='fedback'>
                <div className='client'>
                    <img src={Client} alt='#' />
                    <div className='client_fed'>
                        <p>Elis Fernanda</p>
                        <p>
                            I'm having a opportunity to learn english with great teacher. In few months my english grow up very faster.
                        </p>
                    </div>

                </div>
                <div className='client'>
                    <img src={Client} alt='#' />
                    <div className='client_fed'>
                        <p>Name</p>
                        <p>
                            Lorem Ipsum jest tekstem stosowanym jako przykładowy
                            wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w.
                        </p>
                    </div>
                </div>
                <div className='client'>
                    <img src={Client} alt='#' />
                    <div className='client_fed'>
                        <p>Name</p>
                        <p>
                            Lorem Ipsum jest tekstem stosowanym jako przykładowy
                            wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w.
                        </p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Experience
