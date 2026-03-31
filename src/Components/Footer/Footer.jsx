import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/footer_logo.svg'
import user_icon from '../../assets/user_icon.svg'
import github_icon from '../../assets/github_icon.svg'
import linkedin_icon from '../../assets/linkedin_icon.svg'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-top'>
            <div className="footer-top-left">
                <img src={footer_logo} alt=""/>
                <p>I am looking forward to working with you</p>
            </div>
            <div className="footer-top-right">
              <div className="footer-email-input">
                  <img src={user_icon} alt="" />
                  <input type="email" placeholder='Enter your email here' />
              </div>
              <div className="footer-subscribe">Subscribe</div>
            </div>
        </div>
        <hr />
        <div className="footer-bottom">
            <p className='footer-bottom-left'>© 2026 Ian Kala. All rights reserved.</p>
            <div className="footer-bottom-middle">
                <p><a href="#services">Term of Services</a></p>
                <p><a href="#contact">Privacy Policy</a></p>
            </div>
            <div className="footer-bottom-right">
                <a href="https://github.com/iankala" target="_blank" rel="noreferrer" className="footer-social">
                    <img src={github_icon} alt="GitHub" />
                </a>
                <a href="https://www.linkedin.com/in/ian-kala-91a680239/" target="_blank" rel="noreferrer" className="footer-social">
                    <img src={linkedin_icon} alt="LinkedIn" />
                </a>
            </div>
        </div>
    </div>
  )
}

export default Footer