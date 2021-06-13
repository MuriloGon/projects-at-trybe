import React from 'react';
import PropTypes from 'prop-types';

const tags = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

const TagForm = ({ form, setFormParms }) => {
  const handleSelect = (
    { target: { value: tag } },
  ) => setFormParms({ ...form, tag });
  return (
    <label htmlFor="tag">
      <span className="wallet-exps-label">
        Tag:
      </span>
      <select
        id="tag"
        onChange={ handleSelect }
        data-testid="tag-input"
      >
        {tags.map((tag, i) => <option key={ i } value={ tag }>{tag}</option>)}
      </select>
    </label>
  );
};

TagForm.propTypes = {
  form: PropTypes.shape({}).isRequired,
  setFormParms: PropTypes.func.isRequired,
};

export default TagForm;
