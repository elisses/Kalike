import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Experience from '../pages/Experience';
import Contact from '../pages/Contact';
import Navbar from './Navbar';
import PageNotFound from '../pages/PageNotFound';

const router = () => {
    return (
        <Router>
            <Navbar />
            <div className='wave'>
                <svg className='wave' width="100%" viewBox="0 0 1440 233" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M-1 233H29.0208C59.0417 233 119.083 233 179.125 206.032C239.167 178.525 299.208 124.051 359.25 108.949C419.292 93.3079 479.333 116.5 539.375 143.468C599.417 170.975 659.458 201.718 719.5 201.718C779.542 201.718 839.583 170.975 899.625 143.468C959.667 116.5 1019.71 93.3079 1079.75 108.949C1139.79 124.051 1199.83 178.525 1259.87 197.942C1319.92 217.359 1379.96 201.718 1409.98 194.167L1440 186.616V0H1409.98C1379.96 0 1319.92 0 1259.87 0C1199.83 0 1139.79 0 1079.75 0C1019.71 0 959.667 0 899.625 0C839.583 0 779.542 0 719.5 0C659.458 0 599.417 0 539.375 0C479.333 0 419.292 0 359.25 0C299.208 0 239.167 0 179.125 0C119.083 0 59.0417 0 29.0208 0H-1V233Z" fill="#CFC036" />
                </svg>
            </div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </Router>

    )
}

export default router
