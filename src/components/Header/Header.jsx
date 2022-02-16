import React from 'react';
import { Link } from 'react-router-dom';
import phone from '../../icons/header-phone.svg';
import location from '../../icons/header-location.svg';
import clock from '../../icons/header-clock.svg';
import instagram from '../../icons/header-instagram.svg';
import twitter from '../../icons/header-twitter.svg';
import facebook from '../../icons/header-facebook.svg';
import pinterest from '../../icons/header-pinterest.svg';
import cleverShop from '../../icons/CleverShop.svg';
import search from '../../icons/header-search.svg';
import globe from '../../icons/header-globe.svg';
import user from '../../icons/header-user.svg';
import shopping from '../../icons/header-shopping.svg';
import classes from './Header.module.css'
import HeaderBar from '../HeaderBar/HeaderBar';

const barInfo = [
  {image: phone,description: '+375 29 100 20 30'},
  {image: location, description: 'Belarus, Gomel, Lange 17'},
  {image: clock, description: 'All week 24/7'}]

const socialIcons = [facebook,twitter,instagram,pinterest];

const navList = ['about us', 'women', 'men', 'beauty', 'accessories', 'blog','contact'];

const buttonList = [search,globe,user,shopping];
const Header = () => {
  return (
    <header data-test-id='header'>
          <div className={classes.header_up}>
            <div className={classes.wrapper}>
              <div className={classes.header_up_left}>
                {barInfo.map((item, index)=> <HeaderBar image={item.image} text={item.description} key={index}/>)}
              </div>
              <div className={classes.header_up_right}>
                {socialIcons.map((item,index)=><img src={item} alt = 'icon' key={index}/>)}
              </div>
            </div>
          </div>
          <div className={classes.header_down}>
            <div className={classes.wrapper}>
              <Link to='/'><img src={cleverShop} alt="logo" data-test-id='header-logo-link'/></Link>
              <nav className={classes.header_down_list} data-test-id='menu'>
                {navList.map((item,index)=><Link to={`/${item}`} key={index} data-test-id={`menu-link-${item}`}>{item}</Link>)}
              </nav>
              <div className={classes.header_down_icons}>
                {buttonList.map((item,index)=>item === shopping ? <button key={index} style={{position:'relative'}}><img src={item} alt='button' /><span className={classes.cart}>2</span></button>:<button key={index}><img src={item} alt='button' /></button>)}
              </div>
            </div>
          </div>
      </header>
  )
}

export default Header