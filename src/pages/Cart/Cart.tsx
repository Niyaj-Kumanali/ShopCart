import { useSelector } from 'react-redux';

import './Cart.css';
import CartItem from '../../components/CartItem/CartItem';
import { useEffect, useState } from 'react';

const Cart = () => {
  let cart = useSelector((state: any) => state.cart);
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  useEffect(() => {
    setPrice(0);
    let discount = 0;
    let total = 0;
    cart &&
      cart.map(
        (item: {
          quantity: number;
          price: number;
          discountPercentage: number;
        }) => {
          if (item.quantity < 1) {
            item.quantity = 1;
          }
          total += item.price * item.quantity;
          discount += (item.price * item.discountPercentage* item.quantity) / 100.0;
        }
      );
    setPrice(total);
    setDiscount(Math.round(discount));
  }, [cart]);



  return cart.length != 0 ? (
    <div className="cart-container">
      <div className="cart">
        {cart.map((deal: any, index: number) => (
          <CartItem deal={deal} key={index} />
        ))}
      </div>

      <div className="price-details-container">
        <div className="price-details">
          <div className="price-details-heading">
            <h3>Price Details</h3>
          </div>
          <div className="product-price">
            <span>Price({cart.length} items)</span>
            <span>{price}</span>
          </div>
          <div className="product-discount">
            <span>Discount</span>
            <span>{discount}</span>
          </div>

          <div className="total-bill">
            <span>Total Amount</span>
            <span>{price - discount}</span>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className='empty'>No items in cart</div>
  );
};

export default Cart;
