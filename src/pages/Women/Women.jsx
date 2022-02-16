import React from 'react';
import Clothing from '../../components/Clothing/Clothing';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import PageTitle from '../../components/PageTitle/PageTitle';
import loading from '../../icons/loading.svg';


const Women = () => {
  return (
    <div data-test-id={`products-page-women`}>
        <Header/>
        <PageTitle sex={'women'}/>
        <Clothing sex={'women'}/>
        <img src={loading} alt="" style={{ display: 'flex', margin: 'auto', padding: '18px 0 80px 0'}}/>
        <Footer/>
    </div>
  )
}

export default Women