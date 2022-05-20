import React from 'react'
import classes from './reviews.module.css'
import { BsHeart } from 'react-icons/bs';
import { BsStarFill } from 'react-icons/bs';
import { BiTimeFive } from 'react-icons/bi';
import { IoIosFlash } from 'react-icons/io';


const Reviews = () => {
  return (
    <div className={classes.reviewContainer}>
      <div className={classes.reviewHeadRow}>

        <div className={classes.reviewHeadLeft}>
          <h1 className={classes.reviewHeading}>Popular Tour in the month</h1>
        </div>

        <div className={classes.reviewHeadRight}>
          <h4>Pick a span</h4>
          <select className={classes.reviewDaysSelection}>
            <option value="Choose" disabled selected>choose</option>
            <option value="day">days</option>
            <option value="week">weeks</option>
            {/* <option value="month">months</option> */}
          </select>
        </div>

      </div>

      <div className={classes.reviewBodyRow}>
        <div className={classes.reviewBodyCol}>
          <div className={classes.reviewUpDiv}>
            <img src="https://picsum.photos/200" alt="" className={classes.reviewImg} />
            <p className={classes.reviewTag}>Featured</p>
          </div>
          <div className={classes.reviewDownDiv}>
            <div className={classes.reviewDownHead}>
              <h4 className={classes.reviewLocation}>Mysore</h4>
              <span className={classes.reviewLike}><BsHeart/></span>
            </div>
            <div className={classes.reviewBodyDesc}>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </div>
            <div className={classes.reviewRating}>
              <span className={classes.reviewRatingStars}>
                <BsStarFill className={classes.reviewRatingEachStar} />
                <BsStarFill className={classes.reviewRatingEachStar} />
                <BsStarFill className={classes.reviewRatingEachStar} />
                <BsStarFill className={classes.reviewRatingEachStar} />
                <BsStarFill className={classes.reviewRatingEachStar} />
              </span>
              <span className={classes.reviewRatingCount}>5 Reviews</span>
            </div>
            <div className={classes.reviewPeriodPrice}>
              <div className={classes.reviewPeriodLeft}>
                <span><BiTimeFive /></span>
                <p>10 days</p>
              </div>
              <div className={classes.reviewPriceRight}>
                <span><IoIosFlash /> </span>
                <p>from &#8377;40000</p>
              </div>
            </div>
          </div>
          
        </div>   
        <div className={classes.reviewBodyCol}>
          <div className={classes.reviewUpDiv}>
            <img src="https://picsum.photos/280" alt="" className={classes.reviewImg} />
            <p className={classes.reviewTag}>Featured</p>
          </div>
          <div className={classes.reviewDownDiv}>
            <div className={classes.reviewDownHead}>
              <h4 className={classes.reviewLocation}>Mysore</h4>
              <span className={classes.reviewLike}><BsHeart/></span>
            </div>
            <div className={classes.reviewBodyDesc}>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </div>
            <div className={classes.reviewRating}>
              <span className={classes.reviewRatingStars}>
                <BsStarFill className={classes.reviewRatingEachStar} />
                <BsStarFill className={classes.reviewRatingEachStar} />
                <BsStarFill className={classes.reviewRatingEachStar} />
                <BsStarFill className={classes.reviewRatingEachStar} />
                <BsStarFill className={classes.reviewRatingEachStar} />
              </span>
              <span className={classes.reviewRatingCount}>5 Reviews</span>
            </div>
            <div className={classes.reviewPeriodPrice}>
              <div className={classes.reviewPeriodLeft}>
                <span><BiTimeFive /></span>
                <p>10 days</p>
              </div>
              <div className={classes.reviewPriceRight}>
                <span><IoIosFlash /> </span>
                <p>from &#8377;40000</p>
              </div>
            </div>
          </div>
          
        </div>
        <div className={classes.reviewBodyCol}>
          <div className={classes.reviewUpDiv}>
            <img src="https://picsum.photos/240" alt="" className={classes.reviewImg} />
            <p className={classes.reviewTag}>Featured</p>
          </div>
          <div className={classes.reviewDownDiv}>
            <div className={classes.reviewDownHead}>
              <h4 className={classes.reviewLocation}>Mysore</h4>
              <span className={classes.reviewLike}><BsHeart/></span>
            </div>
            <div className={classes.reviewBodyDesc}>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </div>
            <div className={classes.reviewRating}>
              <span className={classes.reviewRatingStars}>
                <BsStarFill className={classes.reviewRatingEachStar} />
                <BsStarFill className={classes.reviewRatingEachStar} />
                <BsStarFill className={classes.reviewRatingEachStar} />
                <BsStarFill className={classes.reviewRatingEachStar} />
                <BsStarFill className={classes.reviewRatingEachStar} />
              </span>
              <span className={classes.reviewRatingCount}>5 Reviews</span>
            </div>
            <div className={classes.reviewPeriodPrice}>
              <div className={classes.reviewPeriodLeft}>
                <span><BiTimeFive /></span>
                <p>10 days</p>
              </div>
              <div className={classes.reviewPriceRight}>
                <span><IoIosFlash /> </span>
                <p>from &#8377;40000</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>

    </div>
    )
}

export default Reviews