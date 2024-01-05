import React from 'react';
import { useLocation } from 'react-router-dom';
import StarRating from '../../components/StarRating/StarRating';
import './DealDetails.css';

const DealDetails = () => {
  const location = useLocation();
  const data = location.state;

  return (
    data && (
      <div className="deal-details">
        <div className="deal-details-image">
          <img
            className="deal-details-img"
            src={data.thumbnail}
            alt={data.title}
          />
          <div className="images">
            {data.images.map((image) => (
              <span>
                {' '}
                <img src={image} alt="" />
              </span>
            ))}
          </div>
        </div>
        <div className="deal-details-information">
          <div className="deal-details-brand">
            <h2>{data.brand}</h2>
          </div>
          <div className="deal-details-title">
            <h3>{data.title}</h3>
          </div>
          <div className="deal-details-price">
            <h2 className="new-price">${Math.ceil(data.price - (data.price*data.discountPercentage/100.0))}</h2>
            <span className="old-price">${data.price}</span>
            <span className="deal-discount">{data.discountPercentage}% off</span>
          </div>

          <div className="deal-details-rating">
            <StarRating rating={data.rating} />
            <span className="number-rating">{data.rating} <i className="ri-star-fill"></i></span>
          </div>
          <div className="deal-details-description">
            <p>{data.description}</p>
          </div>
          <div className="deal-details-stock">
            <p>In stock: {data.stock}</p>
          </div>
        </div>
      </div>
    )
  );
};

export default DealDetails;
