import React from 'react';
import blog1 from '../../images/blog-image-1.svg';
import blog2 from '../../images/blog-image-2.svg';
import blog3 from '../../images/blog-image-3.svg';
import classes from './Blog.module.css';

const Blog = () => {
  return (
    <div className={classes.blog}>
        <div className={classes.blog_up}>
          <h2>LATEST FROM BLOG</h2>
          <a href="/">SEE ALL</a>
        </div>
        <div className={classes.blog_down}>
          <div className={classes.blog_down_part}>
            <img src={blog1} alt="blog1" />
            <div className={classes.blog_down_part_inner}>
              <h3>The Easiest Way to Break</h3>
              <p>But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was bor</p>
            </div>
          </div>
          <div className={classes.blog_down_part}>
            <img src={blog2} alt="blog2" />
            <div className={classes.blog_down_part_inner}>
              <h3>Wedding Season</h3>
              <p>But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was bor</p>
            </div>
          </div>
          <div className={classes.blog_down_part}>
            <img src={blog3} alt="blog3" />
            <div className={classes.blog_down_part_inner}>
              <h3>Recent Favorites On Repeat</h3>
              <p>But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was bor</p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Blog