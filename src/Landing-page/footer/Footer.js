import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.scss'

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className="first-footer-standalone">
                <Link className='link' to=''>Questions?</Link>
                <Link className='link' to=''>Contact us</Link>
            </div>
            <div className="footer-links-container">
                <div className="first-column">
                    <Link className='link' to=''>FAQ</Link>
                    <Link className='link' to=''>Investor Relations</Link>
                    <Link className='link' to=''>Privacy</Link>
                    <Link className='link' to=''>Speed Test</Link>
                </div>
                <div className="second-column">
                    <Link className='link' to=''>Help Center</Link>
                    <Link className='link' to=''>Jobs</Link>
                    <Link className='link' to=''>Cookies</Link>
                    <Link className='link' to=''>Legal Notices</Link>
                </div>
                <div className="third-column">
                    <Link className='link' to=''>Account</Link>
                    <Link className='link' to=''>Ways to Watch</Link>
                    <Link className='link' to=''>Corporate Information</Link>
                    <Link className='link' to=''>Netflix Originals</Link>
                </div>
                <div className="fourth-column">
                    <Link className='link' to=''>Media Center</Link>
                    <Link className='link' to=''>Term of Use</Link>
                    <Link className='link' to=''>Contact Us</Link>
                </div>
            </div>
            <span className="second-footer-standalone">Netflix Nigeria</span>
        </div>
    )
}

export default Footer
