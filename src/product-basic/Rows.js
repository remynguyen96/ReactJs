/* eslint-disable no-unused-expressions */
import React, { PureComponent, Fragment } from 'react';
import TableData from './TableData';
import Search from "./Search";
import Filter from "./Filter";

let timeOut;
export default class Rows extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      hasFilter: false,
      searchTxt: '',
    };
  };
  /**
   @Description: Search Method
   */
  changeSearch = (e) => {
    timeOut ? clearTimeout(timeOut) : null;
    const { value } = e.target;
    timeOut = setTimeout(() => {
      this.setState({
        searchTxt: value.trim(),
      });
    }, 450);
  };

  /**
   @Description: Filter Method
   */
  changeFilter = (e) => {
    const { checked } = e.target;
    this.setState({
      hasFilter: checked,
    });
  };

  render() {
    const { listData } = this.props;
    const { hasFilter, searchTxt } = this.state;
    return (
      <Fragment>
        <Search changeSearch={this.changeSearch} />
        <Filter changeFilter={this.changeFilter} />
        <TableData listData={listData} searchTxt={searchTxt} hasFilter={hasFilter} />
      </Fragment>
    );
  }
}