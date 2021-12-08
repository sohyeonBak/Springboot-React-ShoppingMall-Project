import React from 'react';
import ReviewStar from './review-star';

interface ReviewIProps {
  review : {
    id: number,
    image: string,
    rate: number,
    user: {
      id: number,
      name: string
    },
    comment: string,
    data: string
  },
  productTitle : string
}

const Review = ({review, productTitle}: ReviewIProps) => {

  const name = review.user.name.split('');
  name.splice(review.user.name.length-4,4,'****');
  
  return(
    <div className="product-review--content">
      <div className="product-review--image">
        {review.image.length > 0 ? <img src={review.image} alt=''/> : ''}
      </div>
      <div className="product-review--subs">
        <h4>{productTitle}</h4>
        <div>
          {[1,2,3,4,5].map((idx) => 
            <ReviewStar key={idx} index={idx} rate={review.rate}/>
          )}
        </div>
        <p>{review.comment}</p>
        <em>{name.join('')}</em>
      </div>
      <div className="product-review--date">
        <p>{review.data}</p>
      </div>
    </div>
  )}

export default Review;