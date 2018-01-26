import PropTypes from 'prop-types';
import React from 'react';

const Input = (props) => {
  const { className, label, name, placeholder, type } = props;
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input type={type || 'text'} className={`${className} form-control form-control-lg`} placeholder={placeholder} />
    </div>
  );
};

Input.defaultProps = {
  className: null,
  type: null,
};

Input.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default Input;
