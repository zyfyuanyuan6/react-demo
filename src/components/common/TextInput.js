/* eslint-disable no-empty */
import React, { PropTypes } from 'react';

const TextInput = ({name, label, onChange, placeholder, value, error}) => {

  let wrapperClass = 'form-group';
  if(error && error.length){
    wrapperClass += " " + 'has-error';
  }

  return (
    <div className = {wrapperClass}>
      <label htmlFor= {name}> {label}</label>
      <div className="field">
        <input
        type="text"
        name= {name}
        className="form-control"
        value={value}
        onChange={onChange}/>
        {error && <div className="alert alert-danger">{error} </div>}
      </div>
    </div>
  )
};


TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onchange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string
}

export default TextInput;
