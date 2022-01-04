import React from 'react';

const InputGroup = ({ label, id, onChange, value, type, ...rest }) => {
  return (
    <div className="input-container">
      <input type={type} id={id} value={value} onChange={onChange} {...rest} />
      <label className={value !== '' ? 'shrink' : ''} htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

export default InputGroup;
