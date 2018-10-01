import React, { PureComponent } from 'react';
import Rows from './Rows';
import Styles from './Styles.scss';
import LazyLoading from "../lazy-loading";
import images from '../lazy-loading/image.jpg';
import UndoRedoApp from "../undo-redo";
import NotFound from "./NotFound";

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
        <NotFound />
        <UndoRedoApp />
        <h3 className={Styles.title}>List Product In One Year</h3>
        <Rows listData={listData} />
        <LazyLoading
          src={images}
          width="100%"
          height="auto"
        />
      </div>
    );
  }
}