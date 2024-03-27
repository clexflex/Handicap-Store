import React from 'react'
import './footer.css'
// import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pinterest_icon from '../Assets/pinterest_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            {/* <img src={footer_logo} alt="" /> */}
            <p className='shine'>Handicap's Store</p>
        </div>
        <ul className="footer-links ">
            <li className='hover'>Company</li>
            <li className='hover'>Products</li>
            <li className='hover'>Offices</li>
            <li className='hover'>About</li>
            <li className='hover'>Contact</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icons-container">
            <img src={instagram_icon} alt="" />
            </div>
            <div className="footer-icons-container">
            <img src={pinterest_icon} alt="" />    
            </div>
            <div className="footer-icons-container">
            <img src={whatsapp_icon} alt="" />
            </div>
        </div>
        <div className="footer-copyright">
            <hr />
            <p>Copyright @ 2024 - All Rights Reserved | ClexFlex</p>
        </div>
    </div>
  )
}

export default Footer