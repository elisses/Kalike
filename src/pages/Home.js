import React from 'react';
import Kalike from '../image/kalike.png';
import './Home.css';

const Home = () => {
    return (
        <div className='wrapper'>
            <div className='home_text'>
                <p>Hey, I’m Mwila.</p>
                <p>
                    A language instructor and native speak of the English language.
                </p>
                <p>
                    Unlike the difficult and impossible to accomplish task, most learners think the English language is.
                    I have learnt over time to simplify and reveal its beauty to my students, regardless of age, native
                    language or reason for study.
                </p>
                <ul>
                    <li className='social'><a href="/#"><i class="fab fa-youtube"></i></a></li>
                    <li className='social'><a href="https://www.facebook.com/UpThinQ.Global"><i class="fab fa-facebook-f"></i></a></li>
                    <li className='social'><a href="https://linkedin.com/in/henry-kaliki-mwila-24930919a"><i class="fab fa-linkedin-in"></i></a></li>
                    <li className='social'><a href="https://web.whatsapp.com/send?phone=+919592017793"><i class="fab fa-whatsapp"></i></a></li>
                </ul>
            </div>
            <div className='home_img'>
                <div className='img_Kalike'>
                    <img src={Kalike} alt="" />
                </div>
            </div>

        </div>
    )
}

export default Home
