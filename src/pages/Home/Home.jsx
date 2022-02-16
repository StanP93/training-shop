import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header';
import Title from '../../components/Title/Title';
import Clothing from '../../components/Clothing/Clothing';
import LookBook from '../../components/LookBook/LookBook';
import Subscribe from '../../components/Subscribe/Subscribe';
import Blog from '../../components/Blog/Blog';
import ClothingTop from '../../components/ClothingTop/ClothingTop';
import SeeAll from '../../components/SeeAll/SeeAll';

const Home = () => {
  return (
    <div>
        <Header/>
        <Title/>
        <ClothingTop sex={'women'} />
        <Clothing sex={'women'} data-test-id={`clothes-women`}/>
        <SeeAll sex={'women'}/>
        <ClothingTop sex={'men'} />
        <Clothing sex={'men'} data-test-id={`clothes-men`}/>
        <SeeAll sex={'men'}/>
        <LookBook />
        <Subscribe />
        <Blog />
        <Footer/>
    </div>
  )
}

export default Home