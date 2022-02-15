import React from 'react';
import catalogLeft from '../../images/catalog-left.svg';
import catalogRight from '../../images/catalog-right.svg';
import classes from './LookBook.module.css';

const LookBook = () => {
  return (
    <div className={classes.lookbook}>
        <div className={classes.wrapper}>
            <div className={classes.catalog}>
                <img src={catalogLeft} alt="left" />
                <div className={classes.catalogBanner}>
                    <p>New Season</p>
                    <h3>lookbook collection</h3>
                </div>
            </div>
            <div className={classes.catalog}>
                <img src={catalogRight} alt="right" />
                <div className={classes.catalogBanner}>
                    <p>Sale</p>
                    <h3>Get UP to <span style={{color: '#E91E63'}}>50% off</span></h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LookBook