import React from 'react';
import './Delivery.css';

const Delivery = () => {
  return (
    <div className="delivery">
      <div className="truck-right truck">
      <i className="fa-solid fa-truck"></i>

      </div>
      <div className="truck-left truck">
        <i className="fa-solid fa-truck fa-flip-horizontal"></i>
      </div>
      <div className="highway">
        <div className="road"></div>
        <hr />
        <div className="road"></div>
      </div>
    </div>
  );
};

export default Delivery;
