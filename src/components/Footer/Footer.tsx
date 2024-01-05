import { useSelector } from 'react-redux';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  const categories = useSelector((state: any) => state.categories);
  const aboutUs = [
    'Shopcart Help',
    'Returns',
    'Track Orders',
    'Contact Us',
    'Feedback',
    'Security',
  ];

  const services = [
    'Gift Cart',
    'Mobile App',
    'Shopping & Delivery',
    'Order Pickup',
    'Account Signup',
  ];

  const department = [
    'Shopcart Help',
    'Returns',
    'Track Orders',
    'Contact Us',
    'Feedback',
    'Security',
  ];

  return (
    <div className="footer">
      <div className="top-footer">
        <div className="left-footer">
          <div className="footer-logo">
            <h1 className="logo-text">Shopcart</h1>
          </div>
          <div className="footer-text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna
              aliqua.onsectetur adipi
            </p>
          </div>
          <h3>Accepted Payments</h3>
          <div className="payments">
            <div className="payment-logo">
              <i className="fa-brands fa-stripe"></i>
            </div>
            <div className="payment-logo">
              <i className="fa-brands fa-paypal"></i>
            </div>
            <div className="payment-logo">
              <i className="fa-brands fa-cc-visa"></i>
            </div>
            <div className="payment-logo">
              <i className="fa-brands fa-cc-mastercard"></i>
            </div>
            <div className="payment-logo">
              <i className="fa-brands fa-amazon-pay"></i>
            </div>
            <div className="payment-logo">
              <i className="fa-brands fa-google-pay"></i>
            </div>
            <div className="payment-logo">
              <i className="fa-brands fa-apple-pay"></i>
            </div>
            <div className="payment-logo">
              <i className="ri-wechat-pay-fill"></i>
            </div>
          </div>
        </div>
        <div className="right-footer">
          <div className="footer-item">
            <h3>Department</h3>
            <ul>
              {categories.map((category: string, index: number) => {
                return (
                  <Link key={index} to={`/categories/${category}`}>
                    <li>{category}</li>
                  </Link>
                );
              })}
            </ul>
          </div>
          <div className="footer-item">
            <h3>About Us</h3>
            <ul>
              {aboutUs.map((about, index) => {
                return (
                  <Link key={index} to={`/aboutUs/${about}`}>
                    <li>{about}</li>
                  </Link>
                );
              })}
            </ul>
          </div>
          <div className="footer-item">
            <h3>Services</h3>
            <ul>
              {services.map((service, index) => {
                return (
                  <Link key={index} to={`/services/${service}`}>
                    <li>{service}</li>
                  </Link>
                );
              })}
            </ul>
          </div>
          <div className="footer-item">
            <h3>Department</h3>
            <ul>
              {department.map((department, index) => {
                return (
                  <Link key={index} to={`/department/${department}`}>
                    <li>{department}</li>
                  </Link>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
