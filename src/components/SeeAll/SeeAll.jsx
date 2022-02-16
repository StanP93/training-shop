import React from 'react';
import { Link } from 'react-router-dom';
import classes from './SeeAll.module.css';

const SeeAll = ({sex}) => {
  return (
    <div className={classes.footButton}>
        <Link to={sex}>See All</Link>
    </div>
  )
}

export default SeeAll