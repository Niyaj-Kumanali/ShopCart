import { useDispatch, useSelector } from 'react-redux';
import './Deal.css';
import {
  addToWishlist,
  removeFromCart,
  removeFromWishlist,
  setStoreCart,
} from '../../store/data';
import StarRating from '../StarRating/StarRating';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Deal = ({ deal }: { deal: any }) => {
  const [isHeartFilled, setIsHeartFilled] = useState(false);
  const wishlist = useSelector((state: any) => state.wishlist);

  const cart = useSelector((state: any) => state.cart);
  const dispatch = useDispatch();

  const fillHeart = () => {
    setIsHeartFilled((prev) => !prev);

    if (isHeartFilled) {
      dispatch(removeFromWishlist(deal.id));
    } else {
      if (!wishlist.includes(deal)) {
        dispatch(addToWishlist(deal));
      }
    }
  };

  return (
    <div className="deal" >
        <div className="deal-image">
      <Link to="deal-details" state={deal}>
          <img src={deal.thumbnail} alt={deal.title} />
      </Link>

          <button onClick={fillHeart} className="wish-icon">
            {wishlist.includes(deal) ? (
              <i className="ri-heart-2-fill"></i>
            ) : (
              <i className="ri-heart-2-line"></i>
            )}
          </button>
        </div>
      <div className="information">
        <div className="deal-title-price">
          <h3>{deal.title}</h3>
          <h3>${deal.price}</h3>
        </div>
        <div className="deal-discount">
          <span>{deal.discountPercentage}</span>
        </div>
        <div className="deal-rating">
          <StarRating rating={deal.rating} />
          <span className="number-rating">{deal.rating}</span>
        </div>
        <div className="deal-description">
          <p>{deal.description}</p>
        </div>
        <div className="cart-btn">
          {!cart.find((item)=> item.id == deal.id) ? (
            <button
              className=""
              onClick={() => {
                dispatch(setStoreCart(deal));
              }}
            >
              Add to Cart
            </button>
          ) : (
            <button
              className="active"
              onClick={() => {
                dispatch(removeFromCart(deal.id));
              }}
            >
              Added to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Deal;
