import React from 'react';
import Styles from './Styles.scss';

const convertStr = (str) => str.toLowerCase();
const TableData = ({ listData, searchTxt, hasFilter }) => (
  <div className={Styles.rows}>
    {
      listData.map(({ title, products }) => (
        <div className={Styles.products} key={title}>
          <h4 className={Styles.productsTitle}>{title}</h4>
          <ul className={Styles.productsTable}>
            {Object.keys(products).map(product => {
              const price = products[product];
              if (!convertStr(product).includes(convertStr(searchTxt))) return null;
              if (hasFilter && parseFloat(price.slice(1)) <= 60) return null;
              return (
                <li className={Styles.productsItems} key={product}>
                  <span className={Styles.productsItemsName}>{product}: </span>
                  <span className={Styles.productsItemsPrice}>{price}</span>
                </li>
              );
            })}
          </ul>
        </div>
      ))
    }
  </div>
);
export default TableData;
