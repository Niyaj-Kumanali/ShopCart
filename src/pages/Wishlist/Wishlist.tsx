import { useDispatch, useSelector } from 'react-redux';
import Deal from '../../components/Deal/Deal';

import './Wishlist.css'
const Wishlist = () => {
  const wishlist = useSelector((state: any) => state.wishlist);
  const dispatch = useDispatch();
  console.log(wishlist);

  return (
    <div className="wishlist-container">
      {wishlist.length != 0? (
        wishlist.map((deal: any, index: number) => (
          <Deal key={index} deal={deal} />
        ))
      ) : (
        <div className='empty'>No items in wishlist</div>
      )}
    </div>
  );
};

export default Wishlist;
