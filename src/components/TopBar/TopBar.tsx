import { Link } from 'react-router-dom';
import './TopBar.css'

const TopBar = () => {
  return (
    <div id="top-bar">
      <div className="top-items">
        <Link to={'tel:+' + 8217097121}>
          <i className="ri-phone-line"></i>
          <span className="phone-number">+918217097121</span>
        </Link>
      </div>
      <div className="top-items">
        <p>Get 50% off on Selected Items</p>
        <p>Shop Now</p>

      </div>
      <div className="top-items">
        <select name="language" id="language">
          <option value="English">English</option>
          <option value="Hindi">Hindi</option>
          <option value="Marathi">Marathi</option>
        </select>
        <select name="country" id="country">
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="Japan">Japan</option>
        </select>
      </div>
    </div>
  );
};

export default TopBar;
