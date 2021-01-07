import React from 'react'
import './Footer.css'
import { NavLink } from 'react-router-dom'

// logo picture
import logo from '../src/photos/crop logo.png'

// social media icons
import facebook from './social media iicons/facebook.png'
import twitter from './social media iicons/twitter.png'
import insta from './social media iicons/instagram.png'
import whatsapp from './social media iicons/whatsapp.png'



function Footer() {
    return (
        <div>
            <footer className="footer__section text-white">
                <div className="row footer_logo_details">
                    <NavLink style={{textDecoration: 'none'}} exact to="/"><div className="d-flex"><img className="footer__image" src={logo} /><span className="footer__desc">Slacks Fit</span></div></NavLink>
                </div>

                <div className="customer__services">
                    <NavLink to="/" className="cr__services__links"><span className="customer__services__br__Spans">help & contact us</span></NavLink>
                    <NavLink to="/" className="cr__services__links"><span className="customer__services__br__Spans">Return & refunds</span></NavLink>
                    <NavLink to="/" className="cr__services__links"><span className="customer__services__br__Spans">Online stores</span></NavLink>
                    <NavLink to="/" className="cr__services__links"><span>Terms & conditions</span></NavLink>
                </div>

                <div className="socialMedia__icons">
                    <span className="pr-2"><img src={facebook} className="sm__icons" /></span>
                    <span className="pr-2" ><img src={twitter} className="sm__icons" /></span>
                    <span className="pr-2"><img src={insta} className="sm__icons" /></span>
                    <span className="pr-2"><img src={whatsapp} className="sm__icons" /></span>
                </div>

                <div className="col-lg-6 copyrights">
                    <p className="small text-light mb-0">&copy; 2020 All rights reserved.</p>
                </div>
            </footer>
        </div>
    )
}


export default Footer
