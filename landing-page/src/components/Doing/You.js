import React, { Component } from 'react';
import { Motion, spring } from "react-motion";
import Rodal from 'rodal';
import PropTypes from "prop-types";

class You extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  static propTypes = {
    title: PropTypes.string.isRequired,
    infomation: PropTypes.array.isRequired,
  };

  static defaultProps = {
    title: '',
    infomation: [],
  };

  showMore = () => {
    this.setState({ visible: true });
  };

  hideMore = () => {
    this.setState({ visible: false });
  };

  render() {
    const { title, infomation } = this.props;
    return (
        <Motion defaultStyle={{ y: -150 }} style={{ y: spring(0) }} >
          {(initStyle) => (
              <div style={{transform: `translateY(${initStyle.y}px)`}}>
                <Rodal width={600} height={350} closeOnEsc={true} animation='door' visible={this.state.visible} onClose={this.hideMore}>
                  <div>Show more here !!!!</div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam autem consectetur dolore dolorem eligendi, illum iusto minima nam natus nesciunt nisi reiciendis rem sunt voluptate voluptates! Dolor eius fuga quia!</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam autem consectetur dolore dolorem eligendi, illum iusto minima nam natus nesciunt nisi reiciendis rem sunt voluptate voluptates! Dolor eius fuga quia!</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam autem consectetur dolore dolorem eligendi, illum iusto minima nam natus nesciunt nisi reiciendis rem sunt voluptate voluptates! Dolor eius fuga quia!</p>
                </Rodal>
                <h3 className="you-til">{title}</h3>
                <section className="you-desc">
                  <ul className="you-list">
                    {infomation.map((item) => (
                        <li key={item} className="you-item">{item}</li>
                    ))}
                    <span className="you-more" onClick={this.showMore}>...</span>
                  </ul>
                </section>
              </div>
          )}
        </Motion>
    );
  }
}

export default You;
