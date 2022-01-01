import React from 'react';

const InputGroup = ({ label, id, onChange, value, type }) => {
  return (
    <div className="input-container">
      <input type={type} id={id} value={value} onChange={onChange} />
      <label className={value !== '' ? 'shrink' : ''} for={id}>
        {label}
      </label>
    </div>
  );
};

export default InputGroup;
