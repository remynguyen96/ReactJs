import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import Rows from './Rows';
import LazyLoading from "../lazy-loading";
import UndoRedoApp from "../undo-redo";
import Styles from './Styles.scss';
import images from '../lazy-loading/image.jpg';


export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      listData: [],
    };
  };

  async componentDidMount() {
    const response = await fetch('./product.json');
    const { data: listData } = await response.json();
    this.setState({ listData });
  };

  render() {
    const { listData } = this.state;
    if (listData.length === 0) return null;
    return (
      <div className={Styles.app}>
        <UndoRedoApp />
        <h3 className={Styles.title}>List Product In One Year</h3>
        <Rows listData={listData} />
        <Link to="/">Home</Link>
        <Link to="/also/will/not/match">Also Will Not Match</Link>
        <LazyLoading
          src={images}
          width="100%"
          height="auto"
        />
      </div>
    );
  }
}