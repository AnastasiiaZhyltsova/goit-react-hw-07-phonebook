import React from 'react';
import style from './Filter.module.css';
// import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { filterSlice } from '../../redux';

const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(filterSlice.getFilter);

  const changeFilter = e => {
    dispatch(filterSlice.filterItems(e.currentTarget.value));
  };

  return (
    <label className={style.label}>
      <span>Find contacts by name</span>
      <input
        type="text"
        value={value}
        onChange={changeFilter}
        className={style.input}
      />
    </label>
  );
};

export default Filter;

// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };
