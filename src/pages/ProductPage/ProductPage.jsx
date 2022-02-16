import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import classes from './ProductPage.module.css';
import share from '../../icons/share.svg';
import yellowStar from '../../icons/yellowstar.svg';
import { Link } from 'react-router-dom';
import chevronUp from '../../icons/chevron-up.svg';
import chevronDown from '../../icons/chevron-down.svg';
import small1 from '../../images/product-small1.svg';
import small2 from '../../images/product-small2.svg';
import small3 from '../../images/product-small3.svg';
import small4 from '../../images/product-small4.svg';
import big from '../../images/product-big.svg';
import images4 from '../../images/images-four.svg';
import sizes from '../../images/sizes.svg';
import xmlid from '../../icons/XMLID.svg';
import heart from '../../icons/heart.svg';
import scale from '../../icons/scale.svg';
import truck from '../../icons/truck.svg';
import refresh from '../../icons/refresh.svg';
import mail from '../../icons/footer-mail.svg';
import systems from '../../icons/systems.png';
import annotation from '../../icons/annotation.svg';
import chevronLeft from '../../icons/chevron-left.png';
import chevronRight from '../../icons/chevron-right.png';
import girls1 from '../../images/girls1.svg';
import girls2 from '../../images/girls2.svg';
import girls3 from '../../images/girls3.svg';
import girls4 from '../../images/girls4.svg';
import Product from '../../components/Product/Product';


const optionsList = [
    {image: truck, description: 'Shipping & Delivery'},
    {image: refresh, description: 'Returns & Exchanges'},
    {image: mail, description: 'Ask a question'}]

const womenClothing = [
    {id: 1, image: girls1, text: "Women's tracksuit Q109", price: '30.00',rating: 2},
    {id: 2, image: girls2, text: "Women's tracksuit Q109", price: '50.00',rating: 4},
    {id: 3, image: girls3, text: "Women's tracksuit Q109", price: '10.00',rating: 5},
    {id: 4, image: girls4, text: "Women's tracksuit Q109", price: '60.00',rating: 3},]
const ProductPage = ({sex}) => {
  return (
    <div data-test-id={`product-page-${sex}`}>
        <Header/>
        <div>
            <div className={classes.back}>
                <div className={classes.wrapper}>
                    <div className={classes.back_left}>
                        <Link to='/'>Home</Link>
                        <Link to={`/${sex}`} style={{textTransform: 'capitalize'}}><span>►</span>{sex}</Link>
                        <p><span>►</span>{sex}'s tracksuit  Q109</p>
                    </div>
                    <a href='/'><img src={share} alt="" />Share</a>
                </div>
                <h1>{sex}'s tracksuit  Q109</h1>
                <div className={classes.wrapper}>
                    <div className={classes.back_bottom}>
                        <div>
                            <img src={yellowStar} alt="star" />
                            <img src={yellowStar} alt="star" />
                            <img src={yellowStar} alt="star" />
                            <img src={yellowStar} alt="star" />
                            <img src={yellowStar} alt="star" />
                        </div>
                        <p>2 Reviews</p>
                    </div>
                    <div className={classes.back_bottom}>
                        <p>SKU:<span>777</span></p>
                        <p>Availability: <span>In Stock</span></p>
                    </div>
                </div>
            </div>
        </div>
        <div className={classes.main}>
            <div className={classes.wrapper}>
                <div className={classes.main_small_images}>
                    <div className={classes.chevrons}>
                        <img src={chevronUp} alt="chevron" />
                        <img src={chevronDown} alt="chevron" />
                    </div>
                    <img src={small1} alt="small1" />
                    <img src={small2} alt="small2" />
                    <img src={small3} alt="small3" />
                    <img src={small4} alt="small4" />
                </div>
                <div className={classes.title_image}>
                    <img src={big} alt="" />
                </div>
                <div className={classes.product_info}>
                    <div className={classes.colorAndSize}>
                        <h3>Color:<span> Blue</span></h3>
                        <img src={images4} alt="" />
                        <h3>Size:<span> S</span></h3>
                        <img src={sizes} alt="" />
                        <div>
                            <img src={xmlid} alt="" />
                            <p>Size guide</p>
                        </div>
                    </div>
                    <div className={classes.priceAndButton}>
                        <p>$ 379.99</p>
                        <button>Add to card</button>
                        <img src={heart} alt="" />
                        <img src={scale} alt="" />
                    </div>
                    <div className={classes.options}>
                        {optionsList.map((item,index)=><div key={index}>
                            <img src={item.image} alt="" width={'40px'}/>
                            <p>{item.description}</p>
                        </div>)}
                    </div>
                    <div className={classes.payments}>
                        <h3>guaranteed safe checkout</h3>
                        <div>adssadasdasdaadssadadadadadadadadadasdasdasdsadsada</div>
                    </div>
                    <img src={systems} alt="" style={{margin: '23px 0 32px 0'}}/>
                    <div className={classes.description}>
                        <h3>DESCRIPTION</h3>
                    </div>
                    <div className={classes.additional}>
                        <h3>Additional information</h3>
                        <p><span className={classes.blackColor}>Color:</span> Blue, White, Black, Grey</p>
                        <p><span className={classes.blackColor}>Size:</span> XS, S, M, L</p>
                        <p><span className={classes.blackColor}>Material:</span> 100% Polyester</p>
                    </div>
                    <div className={classes.reviews}>
                        <h3>Reviews</h3>
                        <div className={classes.starsReview}>
                            <div className={classes.back_bottom}>
                                <div>
                                    <img src={yellowStar} alt="star" />
                                    <img src={yellowStar} alt="star" />
                                    <img src={yellowStar} alt="star" />
                                    <img src={yellowStar} alt="star" />
                                    <img src={yellowStar} alt="star" />
                                </div>
                                <p>2 Reviews</p>
                            </div>
                            <div className={classes.annotation}>
                                <img src={annotation} alt="annotation" />
                                <p>Write a review</p>
                            </div>
                        </div>
                        <div className={classes.peoples}>
                            <div className={classes.peoples_1}>
                                <h2>Oleh Chabanov</h2>
                                <div>
                                    <span>3 months ago</span>
                                    <img src={yellowStar} alt="star" />
                                    <img src={yellowStar} alt="star" />
                                    <img src={yellowStar} alt="star" />
                                    <img src={yellowStar} alt="star" />
                                    <img src={yellowStar} alt="star" />
                                </div>
                            </div>
                            <div>
                                <p>On the other hand, we denounce with righteous indignation and 
                                    like men who are so beguiled and demoralized by the charms of 
                                    pleasure of the moment</p>
                            </div>
                        </div>
                        <div className={classes.peoples}>
                            <div className={classes.peoples_1}>
                                <h2>ShAmAn design</h2>
                                <div>
                                    <span>3 months ago</span>
                                    <img src={yellowStar} alt="star" />
                                    <img src={yellowStar} alt="star" />
                                    <img src={yellowStar} alt="star" />
                                    <img src={yellowStar} alt="star" />
                                    <img src={yellowStar} alt="star" />
                                </div>
                            </div>
                            <div>
                                <p>On the other hand, we denounce with righteous indignation and 
                                    like men who are so beguiled and demoralized by the charms of 
                                    pleasure of the moment</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className={classes.prefooter}>
            <div className={classes.prefooter_1}>
                <h2>RELATED PRODUCTS</h2>
                <div>
                    <img src={chevronLeft} alt="" />
                    <img src={chevronRight} alt="" />
                </div>
            </div>
            <div className={classes.prefooter_2}>
                {womenClothing.map((item,index)=><Product key={index} image={item.image} text={item.text} price={item.price} rating={item.rating} id={item.id}/>)}
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default ProductPage