import React from 'react';
import Clothing from '../../components/Clothing/Clothing';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import PageTitle from '../../components/PageTitle/PageTitle';


const Women = () => {
  return (
    <div>
        <Header/>
        <PageTitle sex={'women'}/>
        <Clothing sex={'women'}/>
        <Footer/>
    </div>
  )
}

export default Women