import React from 'react';
import './Footer.css';


const Footer = () => {
    return (
        <div className='footer_components'>
            <p>© 2021 developed by Elis Vieira</p>
            <ul>
                <li className='social'><a href="/#"><i class="fab fa-youtube"></i></a></li>
                <li className='social'><a href="https://www.facebook.com/UpThinQ.Global"><i class="fab fa-facebook-f"></i></a></li>
                <li className='social'><a href="/#"><i class="fab fa-linkedin-in"></i></a></li>
                <li className='social'><a href="https://web.whatsapp.com/send?phone=+919592017793"><i class="fab fa-whatsapp"></i></a></li>
            </ul>
        </div>
    )
}

export default Footer
