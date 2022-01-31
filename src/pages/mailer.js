import React from 'react';
import emailjs from 'emailjs-com';
import swal from 'sweetalert';

import './Contact.css';

const Contact = () => {

    function alertSucess() {
        swal({
            title: "Done",
            text: "Email successfully sent!",
            icon: "success",
            button: "close",
        });
    }



    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm(
            'service_v9r84j1',
            'template_yraik3v',
            e.target,
            'user_tkFfz8Paq4GBRKXYdCi1K'
        ).then(res => {
            alertSucess();

        }).catch(err => console.log(err));
        e.target.reset();
    }

    return (
        <div className='bodyform'>
            <div className='title_form'>
                <h1>Contact Form</h1>
                <p> Schedule a class? Feel free to contact me</p>
            </div>
            <form className='row' onSubmit={sendEmail}>
                <label>Name:</label>
                <input required type='text' name='name' className='form-control' />

                <label>Email:</label>
                <input required type='email' name='user_email' className='form-control' />

                <label>Message:</label>
                <textarea required name='message' rows='4' className='controltextarea' />
                <input type='submit' value='Send message' className='btn' />

            </form>
        </div>

    )
}

export default Contact;
