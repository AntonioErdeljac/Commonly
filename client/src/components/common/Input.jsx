import PropTypes from 'prop-types';
import React from 'react';

const Input = (props) => {
  const { className, hideLabel, label, name, onChange, placeholder, type } = props;
  return (
    <div className="form-group">
      <label htmlFor={name}>{hideLabel ? null : label}</label>
      <input
        type={type || 'text'}
        className={`${className} form-control form-control-lg`}
        onChange={ev => onChange(ev.target.value, name)}
        placeholder={placeholder}
      />
    </div>
  );
};

Input.defaultProps = {
  className: null,
  onChange: null,
  type: null,
  hideLabel: false,
};

Input.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  hideLabel: PropTypes.bool,
  onChange: PropTypes.func,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default Input;
