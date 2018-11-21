import React, {PropTypes} from 'react';

const SelectInput = ({name, label, onChange, defaultOption, value, error, options }) =>{
  const fromOptions = options? options: [];
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <div className="field">
        {/* Note, value is set here rather than on the option -docs: http://facebook.github.com*/}
        <select
          name={name}
          value={value}
          onChange={onChange}
          className="form-control">
        <option value="">{defaultOption}</option>
          {fromOptions.map((option)=>{
            return <option key={option.value} value={option.value}>{option.text}</option>;
          })}
          </select>
        {error && <div className="alert alert-danger"></div>}
      </div>
    </div>
  );
};


SelectInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  defaultOption: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object)
}


export default SelectInput;
