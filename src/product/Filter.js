import React from 'react';
import Styles from './Styles.scss';

const Filter = ({ changeFilter }) => (
  <div className={Styles.filterProducts}>
    <label htmlFor="filter" className={Styles.filterProductsLabel}>Only show products > $60</label>
    <input type="checkbox"
           id="filter"
           className={Styles.filterProductsCheckbox}
           onChange={changeFilter}
    />
  </div>
);
export default Filter;

