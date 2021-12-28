import React from 'react';
import PictureOne from '../image/pictureOne.png';
import PictureTwo from '../image/pictureTwo.png';
import PictureThree from '../image/pictureThree.png';

import './About.css';

const About = () => {
    return (
        <div className='wrapper_about'>
            <div className='about_text'>
                <h1>About Me</h1>
                <p>I was born with a sixth sense to travel. Ever since I was a kid I loved to travel and experience the things I couldn’t experience in the environments I knew.</p>
                <p>  So when I was old enough to travel I set off to see the world.</p>
                <p>    I love to meet people and I’m open to new cultures and experiences, that most people find me approachable. And this is where my love for helping people develop proper language skills was born.</p>
                <p>   Generally I’m an outdoor person but on the occasion that I’m indoors, I love to cook different regional cuisine mostly Asian and African delicacies. Also read (historical politics and war books), play video games and watch any movie or show that intrigues me on TV.</p>
                <p>   The main reason I love my work with language is that it allows me to meet different people from all over the world with different cultures, beliefs and opinions on certain topics and just discuss with them, listen while in the process of teaching speech, writing, reading and listening.</p>
                <p>   It has been amazing and turned out to be one of my greatest adventure yet.
                </p>
            </div>
            <div className='about_picture'>
                <div className='img_01'>
                    <img src={PictureOne} alt='#' />
                </div>
                <div className='img_02'>
                    <img src={PictureTwo} alt='#' />
                </div>
                <div className='img_03'>
                    <img src={PictureThree} alt='#' />
                </div>

            </div>
        </div >
    )
}

export default About
