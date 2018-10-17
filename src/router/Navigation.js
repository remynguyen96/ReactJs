import React from 'react';
import { Link } from "react-router-dom";
import Styles from './Styles.scss';

export const Navigation = ({ menu }) => (
  <ul className={Styles.navigation}>
    {
      menu.map(({ link, name }) => (
        <li key={link} className={Styles.itemNavigation}>
          <Link to={link} className={Styles.linkNavigation}>{name}</Link>
        </li>
      ))
    }
  </ul>
);