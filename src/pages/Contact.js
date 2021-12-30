import React from 'react';
import emailjs from 'emailjs';
import './Contact.css';
import Watch from '../image/watch.png';
import Girl from '../image/girl.png';
import Boy from '../image/boy.svg';
import Frame from '../image/Frame.png';

const Contact = () => {
    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm(
            'service_xy3v8u6',
            'template_yraik3v',
            e.target,
            'user_tkFfz8Paq4GBRKXYdCi1K'
        ).then(res => {
            alert('Mensagem enviada com sucesso')
        }).catch(err => console.log(err));
    }

    return (
        <div className='container'>
            <div className='bodyform'>
                <div>Contact Form</div>
                <form className='row' onSubmit={sendEmail}>
                    <label>Name:</label>
                    <input type='text' name='name' className='form-control' />

                    <label>Email:</label>
                    <input type='email' name='user_email' className='form-control' />

                    <label>Message:</label>
                    <textarea name='message' rows='4' className='form-control' />
                    <input type='submit' value='Send' className='form-control btn btn-primary btn-send' />

                </form>
            </div>
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

export default Contact
