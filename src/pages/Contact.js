import React from 'react';
import Mailer from './mailer';
import './Contact.css';
import Watch from '../image/watch.png';
import Girl from '../image/girl.png';
import Boy from '../image/boy.svg';
import Frame from '../image/Frame.png';

const Contact = () => {



    return (
        <div className='container'>
            <Mailer />
            <div className='pictures'>
                <div className='picture1'>
                    <img src={Watch} alt='#' />
                </div>
                <div className='picture2'>
                    <img src={Girl} alt='#' />
                </div>
                <div className='picture3'>
                    <img src={Boy} alt='#' />
                </div>
                <div className='picture4'>
                    <img src={Frame} alt='#' />
                </div>

            </div>

        </div>
    )
}

export default Contact;
