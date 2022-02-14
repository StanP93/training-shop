import React from 'react'
import star from '../../icons/star.svg';
import classes from './Product.module.css';

const Product = ({image,text,price}) => {
  return (
    <div className={classes.product}>
        <img className={classes.product_image} src={image} alt="women" />
        <p>{text}</p>
        <div className={classes.rating}>
            <span>$ {price}</span>
            <div>
                <img src={star} alt="rate" />
                <img src={star} alt="rate" />
                <img src={star} alt="rate" />
                <img src={star} alt="rate" />
                <img src={star} alt="rate" />
            </div>
        </div>
    </div>
  )
}

export default Product