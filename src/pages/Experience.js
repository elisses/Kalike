import React from 'react';
import YouTube from 'react-youtube';
import "./Experience.css";
import Client from '../image/student.png';
import Client1 from '../image/student1.png';
import Client2 from '../image/student2.png';


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
                <div className='boxVideo'>
                    <YouTube className='youtube' videoId={videoCode} opts={opts} videoOnReady={(e) => videoOnReady(e)} />

                </div>
            </div>
            <div className='fedback'>
                <div className='client'>
                    <div className='picture_client'>
                        <img src={Client} alt='#' />
                    </div>
                    <div className='client_fed'>
                        <p>Elis Fernanda</p>
                        <p>
                            I'm having a opportunity to learn english with great teacher. In few months my english grow up very faster.
                        </p>
                    </div>

                </div>
                <div className='client'>
                    <div className='picture_client'>
                        <img src={Client1} alt='#' />
                    </div>
                    <div className='client_fed'>
                        <p>Mohammad Noor</p>
                        <p>
                            When I started taking English lessons I could only understand Arabic and now I'm studying for
                            a bachelor's degree in civil engineering using the language. Thanks to the patience
                            and dedication of Mwila.
                        </p>
                    </div>

                </div>
                <div className='client'>
                    <div className='picture_client'>
                        <img src={Client2} alt='#' />
                    </div>
                    <div className='client_fed'>
                        <p>Athar Khan</p>
                        <p>
                            I have been taking English lessons from Kaliki for 4 months now and found it helpful in my search for employment.
                        </p>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Experience
