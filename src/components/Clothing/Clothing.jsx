import React from 'react';
import women_clothing_1 from '../../images/women-clothing-1.svg';
import women_clothing_2 from '../../images/women-clothing-2.svg';
import women_clothing_3 from '../../images/women-clothing-3.svg';
import women_clothing_4 from '../../images/women-clothing-4.svg';
import women_clothing_5 from '../../images/women-clothing-5.svg';
import women_clothing_6 from '../../images/women-clothing-6.svg';
import women_clothing_7 from '../../images/women-clothing-7.svg';
import women_clothing_8 from '../../images/women-clothing-8.svg';
import men_clothing_1 from '../../images/men-clothing-1.svg';
import men_clothing_2 from '../../images/men-clothing-2.svg';
import men_clothing_3 from '../../images/men-clothing-3.svg';
import men_clothing_4 from '../../images/men-clothing-4.svg';
import men_clothing_5 from '../../images/men-clothing-5.svg';
import men_clothing_6 from '../../images/men-clothing-6.svg';
import men_clothing_7 from '../../images/men-clothing-7.svg';
import men_clothing_8 from '../../images/men-clothing-8.svg';

import classes from './Clothing.module.css';
import Product from '../Product/Product';

const womenClothing = [
    {image: women_clothing_1, text: "Women's tracksuit Q109", price: '30.00',rating: 2},
    {image: women_clothing_2, text: "Women's tracksuit Q109", price: '50.00',rating: 4},
    {image: women_clothing_3, text: "Women's tracksuit Q109", price: '10.00',rating: 5},
    {image: women_clothing_4, text: "Women's tracksuit Q109", price: '60.00',rating: 3},
    {image: women_clothing_5, text: "Women's tracksuit Q109", price: '40.00',rating: 1},
    {image: women_clothing_6, text: "Women's tracksuit Q109", price: '90.00',rating: 2},
    {image: women_clothing_7, text: "Women's tracksuit Q109", price: '10.00',rating: 1},
    {image: women_clothing_8, text: "Women's tracksuit Q109", price: '20.00',rating: 2}]

const menClothing = [
    {image: men_clothing_1, text: "Men's tracksuit Q109", price: '35.00',rating: 4},
    {image: men_clothing_2, text: "Men's tracksuit Q109", price: '47.00',rating: 4},
    {image: men_clothing_3, text: "Men's tracksuit Q109", price: '14.00',rating: 5},
    {image: men_clothing_4, text: "Men's tracksuit Q109", price: '65.00',rating: 3},
    {image: men_clothing_5, text: "Men's tracksuit Q109", price: '73.00',rating: 2},
    {image: men_clothing_6, text: "Men's tracksuit Q109", price: '33.00',rating: 2},
    {image: men_clothing_7, text: "Men's tracksuit Q109", price: '11.00',rating: 1},
    {image: men_clothing_8, text: "Men's tracksuit Q109", price: '50.00',rating: 1}]

const Clothing = ({sex}) => {
  return (
    <div className={classes.clothes}>
        <div className={classes.wrapper}>
          <div className={classes.title}>
            <h2>{sex}'s</h2>
            <ul>
              <li>NEW ARRIVALS</li>
              <li>SPECIALS</li>
              <li>BESTSELLERS</li>
              <li>MOST VIEWED</li>
              <li>FEATURED PRODUCTS</li>
            </ul>
          </div>
          <div className={classes.allProducts}>
            {sex === 'women' ? womenClothing.map((item,index)=><Product image={item.image} text={item.text} price={item.price} rating={item.rating} key={index}/>) : menClothing.map((item,index)=><Product image={item.image} rating={item.rating} text={item.text} price={item.price} key={index}/>)}
          </div>
          <div className={classes.footButton}>
            <a href={sex}>See All</a>
          </div>
        </div>
      </div>
  )
}

export default Clothing