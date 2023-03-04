import React from "react";
import'../CarIcon/CarIcon.css';

export const CarIcon = ({ counter }) => {
  return (
    <div className="car-item flex-center">
      <h3 className="car-item-number">{counter}</h3>
      <span className="fas fa-shopping-cart"></span>
    
    </div>
  );
};