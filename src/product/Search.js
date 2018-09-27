import React from 'react';
import Styles from './Styles.scss';

const Search = ({ changeSearch }) => (
  <input type="text"
         className={Styles.searchProducts}
         placeholder='Search Product'
         onChange={changeSearch}
  />
);
export default Search;
