import React from 'react'
import './footer.css'
const Footer = () => {
  return (
    <>
    <section className='footer section-m1'>
        <div className="first section-p1">
            <div className="first-left">
                <h2>Sign Up For Newsletters</h2>
                <p>Get E-mail updates about our lastest shop and <span>special offers.</span></p>
            </div>
            <div className="first-right">
                <input type="text" placeholder='Your email address' />
                <button>Sign Up</button>
            </div>

        </div>
        
    </section>
    <section className='about section-p1'>
        <div className="container">
                <img src="../img/logo.png" alt="" />
            <div className="about-content">
            <div className="about-left">
                <h2>Online Clothes Shop</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis assumenda minima mollitia, hic commodi aut ab exercitationem libero voluptatem officiis. Recusandae eum itaque aliquam? Maiores ab necessitatibus unde expedita voluptatum.</p>
               
                <ul class="social-media">
                        <li><i class="fa-brands fa-facebook-f"></i></li>
                        <li><i class="fa-brands fa-twitter"></i></li>
                        <li><i class="fa-brands fa-instagram"></i></li>
                        <li><i class="fa-brands fa-youtube"></i></li>
                        <li><i class="fa-brands fa-google"></i></li>
                        <li><i class="fa-brands fa-linkedin-in"></i></li>
                    
                    
                    </ul>
                
            </div>
            <div className="information">
                <h2>Information</h2>
                <ul>
                    <li>About us</li>
                    <li>Deleviry Information</li>
                    <li>Privacy Policy</li>
                    <li>Terms & condition</li>
                    <li>Site Map</li>
                </ul>
            </div>
            <div className="account">
                <h2>Account</h2>
                <ul>
                    <li>My Account</li>
                    <li>Older History</li>
                    <li>Wish LIst</li>
                    <li>Newsletter</li>
                    <li>Return</li>
                </ul>
            </div>
            <div className="install">
                <p>Form App Store or Google Play</p>
                <img src="../img/pay/app.jpg" alt="" />
                <img src="../img/pay/play.jpg" alt="" />
                <p>Secured Payment Or Google Getwways</p>
                <img src="../img/pay/pay.png" alt="" />
            </div>
        </div>
        </div>

    </section>
    <h2 id='khodor'><span>©</span> 23/11/2022 KHODOR HAJJ HASSAN</h2>
    
    
    </>
  )
}

export default Footer