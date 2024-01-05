import { Link } from 'react-router-dom';
import './BottomFooter.css';
const BottomFooter = ({ setPop }) => {
  return (
    <div className="bottom-footer">
      <div className="bottom-left-part">
        <div className="become-seller bottom-item">
          <Link to="/become-a-seller">
            <i className="ri-briefcase-line"></i>
            <span>Become Seller</span>
          </Link>
        </div>
        <div className="gift-cards bottom-item"  onClick={()=> setPop(true)}>
          <i className="ri-gift-line"></i>
          <span>Gift Cards</span>
        </div>
        <div className="help-center bottom-item">
          <Link to="/help">
            <i className="ri-question-line"></i>
            <span>Help Center</span>
          </Link>
        </div>
      </div>
      <div className="bottom-middle-part">
        <div className="terms-of-service bottom-item">
          <Link to="/terms-and-conditions">
            <span>Terms of Service</span>
          </Link>
        </div>
        <div className="privacy-policy bottom-item">
          <Link to="/Privacy-and-Policy">
            <span>Privacy Policy</span>
          </Link>
        </div>
      </div>
      <div className="bottom-right-part bottom-item">
        <div className="rights">
          <span>All Right reserved by Niyaj</span>
        </div>
      </div>
    </div>
  );
};

export default BottomFooter;
