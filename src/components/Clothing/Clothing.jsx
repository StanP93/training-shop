import React from 'react';
import women_clothing_1 from '../../icons/women-clothing-1.svg';
import classes from './Clothing.module.css';
import Product from '../Product/Product';

const womenClothing = [
    {image: women_clothing_1, text: "Women's tracksuit Q109", price: '30.00'},
    {image: women_clothing_1, text: "Women's tracksuit Q109", price: '30.00'},
    {image: women_clothing_1, text: "Women's tracksuit Q109", price: '30.00'},
    {image: women_clothing_1, text: "Women's tracksuit Q109", price: '30.00'},
    {image: women_clothing_1, text: "Women's tracksuit Q109", price: '30.00'},
    {image: women_clothing_1, text: "Women's tracksuit Q109", price: '30.00'},
    {image: women_clothing_1, text: "Women's tracksuit Q109", price: '30.00'},
    {image: women_clothing_1, text: "Women's tracksuit Q109", price: '30.00'}]

const menClothing = [
    {image: women_clothing_1, text: "Men's tracksuit Q109", price: '30.00'},
    {image: women_clothing_1, text: "Men's tracksuit Q109", price: '30.00'},
    {image: women_clothing_1, text: "Men's tracksuit Q109", price: '30.00'},
    {image: women_clothing_1, text: "Men's tracksuit Q109", price: '30.00'},
    {image: women_clothing_1, text: "Men's tracksuit Q109", price: '30.00'},
    {image: women_clothing_1, text: "Men's tracksuit Q109", price: '30.00'},
    {image: women_clothing_1, text: "Men's tracksuit Q109", price: '30.00'},
    {image: women_clothing_1, text: "Men's tracksuit Q109", price: '30.00'}]

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
            {sex == 'women' ? womenClothing.map((item,index)=><Product image={item.image} text={item.text} price={item.price} key={index}/>) : menClothing.map((item,index)=><Product image={item.image} text={item.text} price={item.price} key={index}/>)}
          </div>
          <div className={classes.footButton}>
            <a href={sex}>See All</a>
          </div>
        </div>
      </div>
  )
}

export default Clothing