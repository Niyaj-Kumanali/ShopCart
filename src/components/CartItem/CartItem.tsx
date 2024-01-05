import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, setStoreCart, setStoreCount } from '../../store/data';

import './CartItem.css';

const CartItem = ({ deal }: { deal: any }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state: any) => state.cart);

  const handleDecrease = () => {
    dispatch(setStoreCount(deal, deal.quantity > 1 ? deal.quantity-1: 1));
  };

  const handleIncrease = () => {
    dispatch(setStoreCount(deal, deal.quantity < 10 ? deal.quantity+1: 10));
  };

  return (
    <div className="cartItem">
      <div className="cart-image">
        <img src={deal.thumbnail} alt={deal.title} />
      </div>
      <div className="cart-details">
        <div className="cart-title">
          <h3>{deal.title}</h3>
        </div>
        <div className="cart-price">
          <h3>${deal.price}</h3>
        </div>
        <div className="cart-description">
          <p>{deal.description}</p>
        </div>
        <div className="cart-counter">
          <button onClick={handleDecrease} className="decrease">
            -
          </button>
          <p className="product-count">{deal.quantity}</p>
          <button onClick={handleIncrease} className="increase">
            +
          </button>
        </div>
        <div className="cart-btn">
          {!cart.includes(deal) ? (
            <button
              onClick={() => {
                dispatch(setStoreCart(deal));
              }}
            >
              Add to Cart
            </button>
          ) : (
            <button
              onClick={() => {
                dispatch(removeFromCart(deal.id));
              }}
            >
              Remove
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartItem;
