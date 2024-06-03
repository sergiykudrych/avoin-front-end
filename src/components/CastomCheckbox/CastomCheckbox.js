import React from 'react';
import './castom-checkbox.css';
const CastomCheckbox = ({ value, name, type, ...props }) => {
  return (
    <label className="castom-checkbox">
      <input type={type} name={name} value={value} className="castom-checkbox__input" onChange={(e) => props.onChange()} />
      <span className="custom-checkbox__icon"></span>
      <span className="custom-checkbox__text">{value}</span>
    </label>
  );
};

export default CastomCheckbox;
