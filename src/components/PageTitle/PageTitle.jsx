import React from 'react';
import classes from './PageTitle.module.css';
import share from '../../icons/share.svg';
import { Link } from 'react-router-dom';
import adjustment from '../../icons/adjustments.svg';
import chevron from '../../icons/chevron.svg';
import grid from '../../icons/grid.svg';
import list from '../../icons/list.svg';

const PageTitle = ({sex}) => {
  return (
    <div>
        <div className={classes.back}>
            <div className={classes.wrapper}>
                <div className={classes.back_left}>
                    <Link to='/'>Home</Link>
                    <p><span>►</span>{sex}</p>
                </div>
                <a href={sex}><img src={share} alt="" />Share</a>
            </div>
            <h1>{sex}</h1>
        </div>
        <div className={classes.footer}>
            <div>
                <img src={adjustment} alt="adjustment" />
                <h3>Filter</h3>
            </div>
            <div>
                <img src={list} alt="list" />
                <img src={grid} alt="grid" />
            </div>
            <div>
                <h3>Bestsellers</h3>
                <img src={chevron} alt="chevron" />
            </div>
        </div>
    </div>
  )
}

export default PageTitle