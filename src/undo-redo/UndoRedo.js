import React from 'react';
import Styles from './Styles.scss';

const UndoRedo = ({ handleMethodUndo, handleMethodRedo }) => (
  <div className={Styles.btn}>
    <button type="button" onClick={handleMethodUndo} className={Styles.btnUndo}>Undo</button>
    <button type="button" onClick={handleMethodRedo} className={Styles.btnRedo}>Redo</button>
  </div>
);
export default UndoRedo;
