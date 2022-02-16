import React from 'react'
import titleImage from '../../icons/title-image.svg';
import titleImage2 from '../../icons/title-image2.svg';
import titleImage3 from '../../icons/title-image3.svg';
import titleImage4 from '../../icons/title-image4.svg';
import truck from '../../icons/truck.svg';
import refresh from '../../icons/refresh.svg';
import support from '../../icons/support.svg';
import classes from './Title.module.css';
import arrowLeft from '../../icons/arrow-left.svg';
import arrowRight from '../../icons/arrow-right.svg';
import TitleOptions from '../TitleOptions/TitleOptions';
import { Link } from 'react-router-dom';

const optionsList = [
    {image: truck, title: 'FREE SHIPPING', description: 'On all UA order or order above $100'},
    {image: refresh, title: '30 DAYS RETURN', description: 'Simply return it within 30 days for an exchange'},
    {image: support, title: 'SUPPORT 24/7', description: 'Contact us 24 hours a day, 7 days a week'}]

const Title = () => {
  return (
    <div className={classes.title}>
        <div className={classes.wrapper}>
          <div className={classes.images}>
            <div className={classes.images_left}>
              <img src={titleImage} alt="1" width='100%'/>
              <img src={arrowLeft} alt="arrow" style={{position: 'absolute', top: '46%',left: '5%'}} className={classes.arrow}/>
              <div className={classes.banner_left}>
                  <p>BANNER</p>
                  <h2>YOUR TITLE TEXT</h2>
              </div>
              <img src={arrowRight} alt="arrow" style={{position: 'absolute', top: '46%',right: '5%'}} className={classes.arrow}/>
            </div>
            <div className={classes.images_right}>
              <div className={classes.images_right_1}>
                <img src={titleImage2} alt="2" width='100%' />
                <div className={classes.banner_right}>
                    <Link to='/women'>Women</Link>
                </div>
              </div>
              <div className={classes.images_right_2}>
                <img src={titleImage3} alt="3" width='100%' />
                <div className={classes.banner_right}>
                <Link to='/men'>Men</Link>
                </div>
              </div>
              <div className={classes.images_right_3}>
                <img src={titleImage4} alt="4" width='100%' />
                <div className={classes.banner_right}>
                    <h3>Accessories</h3>
                </div>
              </div>
            </div>
          </div>
          </div>
          <div className={classes.options}>
            <div className={classes.options_wrapper}>
                {optionsList.map((item,index)=><TitleOptions image={item.image} title={item.title} description={item.description} key={index}/>)}
          </div>
        </div>
      </div>
  )
}

export default Title