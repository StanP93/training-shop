import React from 'react';
import location from '../../icons/footer-location.svg';
import phone from '../../icons/footer-phone.svg';
import clock from '../../icons/footer-clock.svg';
import mail from '../../icons/footer-mail.svg';
import instagram from '../../icons/header-instagram.svg';
import twitter from '../../icons/header-twitter.svg';
import facebook from '../../icons/header-facebook.svg';
import pinterest from '../../icons/header-pinterest.svg';
import stripe from '../../icons/Stripe.png';
import aes from '../../icons/AES256.png';
import paypal from '../../icons/paypal.png';
import visa from '../../icons/visa.png';
import mastercard from '../../icons/mastercard.png';
import discover from '../../icons/discover.png';
import americanExpress from '../../icons/american-express.png';
import classes from './Footer.module.css';
import { Link } from 'react-router-dom';

const payments = [stripe,aes,paypal,visa,mastercard,discover,americanExpress];
const socialIcons = [facebook,twitter,instagram,pinterest];
const categories = ['Men','Women','Accessories','Beauty'];
const information = ['information','About us', 'Contact us', 'Blog', 'FAQs'];
const usefulLinks = ['useful Links','Terms & Conditions', 'Returns & Exchanges', 'Shipping & Delivery', 'Privacy Policy'];
const contactUs = [
  {text: 'Belarus, Gomel, Lange 17',image: location},
  {text: '+375 29 100 20 30',image: phone}, 
  {text: 'All week 24/7',image: clock},
  {text: 'info@clevertec.ru',image: mail}
];

const Footer = () => {
  return (
    <footer data-test-id='footer'>
        <div className={classes.footer_top}>
          <div className={classes.wrapper}>
            <h3>BE IN TOUCH WITH US:</h3>
            <div className={classes.joinUs}>
              <input type="email" name="" id="" placeholder='Enter your email'/>
              <button>Join us</button>
            </div>
            <div className={classes.icons}>
              {socialIcons.map((item,index)=><img src={item} alt = 'icon' key={index}/>)}
            </div>
          </div>
        </div>
        <div className={classes.footer_middle}>
          <ul>
            <li>Categories</li>
            {categories.map((i,index)=><li key={index}><Link to={`/${i}`} data-test-id ={`footer-nav-link-${i}`}>{i}</Link></li>)}
          </ul>
          <ul>
            {information.map((i,index)=><li key={index}>{i}</li>)}
          </ul>
          <ul>
            {usefulLinks.map((i,index)=><li key={index}>{i}</li>)}
          </ul>
          <ul>
            <li>Contact Us</li>
            {contactUs.map((item,index)=><li key={index}>{<img src={item.image} alt="location" />}{item.text}</li>)}
          </ul>
        </div>
        <div className={classes.footer_bottom}>
          <div className={classes.wrapper}>
            <div>
              <p>Copyright © 2032 all rights reserved</p>
            </div>
            <div>
              {payments.map((item,index)=><img src={item} alt="payments" key={index}/>)}
            </div>
            <div>
              <a href="http://Clevertec.ru/training">Clevertec.ru/training</a>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer