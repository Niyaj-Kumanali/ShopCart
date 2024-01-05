import { useDispatch, useSelector } from 'react-redux';
import {
  setSearchItems,
  setStoreCategories,
  setStoreSearchTerms,
} from '../../store/data';
import { ChangeEvent, KeyboardEvent, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const data = useSelector((state: any) => state.data);
  const cart = useSelector((state: any) => state.cart);
  const searchTermList = useSelector((state: any) => state.searchTerms);
  const dispatch = useDispatch();
  const inputRef = useRef<HTMLInputElement>(null);
  const [isSearchTerm, setIsSearchTerm] = useState(false);

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const newCategories = data.reduce(
      (acc: any[], item: { category: string }) => {
        if (!acc.includes(item.category)) {
          acc.push(item.category);
        }
        return acc;
      },
      []
    );

    setCategories(newCategories);
    dispatch(setStoreCategories(newCategories));
  }, [data, dispatch]);

  

  useEffect(() => {
    inputRef.current && inputRef.current.focus();
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newSearchTerm = e.target.value;
    setSearchTerm(newSearchTerm);
  };

  useEffect(() => {
    if (isSearchTerm) {
      handleClick();
    }
  }, [searchTerm]);
  

  

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleClick();
    }
  };
  const handleClick = () => {
    dispatch(
      setSearchItems(
        data.filter((item: any) =>
          item.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
      )
    );
    dispatch(setStoreSearchTerms(searchTerm));
    setIsSearchTerm(false);
  };
  

  const handleRecentSearches = (searchString: string) => {
    setSearchTerm(searchString);
  };
  

  return (
    <div id="navbar">
      <div className="nav-items nav-logo">
        <Link to="/">
          <h2>SHOPCART</h2>
        </Link>
      </div>
      <div className="nav-items">
        <div className="nav-categories nav-link">
          <select name="" id="">
            <option value="">Category</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <Link className="nav-link" to="/Deals">
          Deals
        </Link>
        <Link className="nav-link" to="/Wishlist">
          Wishlist
        </Link>
        <Link className="nav-link" to="/Delivery">
          Delivery
        </Link>
        <div className="search-bar">
          <input
            ref={inputRef}
            type="text"
            value={searchTerm}
            placeholder="Search Product"
            onClick={()=> setIsSearchTerm(true)}
            onChange={(e) => handleChange(e)}
            onKeyDown={(e) => handleKeyDown(e)}
          />
          <button onClick={() => handleClick()}>
            <i className="ri-search-line"></i>
          </button>

          {isSearchTerm && (
            <div className="searchTerms">
              {searchTermList.map((item: any) => (
                <div
                  key={item.id}
                  className="searchTerm"
                  onClick={() => handleRecentSearches(item)}
                >
                  {item}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="nav-items ">
        <Link to="/account">
          <div className="account nav-link">
            <i className="ri-user-3-line"></i>
            <span>Account</span>
          </div>
        </Link>
        <Link to="/cart">
          <div className="nav-link">
            <div className="cart-icon">
              <i className="ri-shopping-cart-2-line"></i>
              <div className="cart-count">{cart.length}</div>
            </div>
            <span>Cart</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
