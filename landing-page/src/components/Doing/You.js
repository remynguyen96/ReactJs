import React, {Component} from 'react';
import Rodal from 'rodal';
import Fade from 'react-reveal/Fade';
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
    this.setState({visible: true});
  };

  hideMore = () => {
    this.setState({visible: false});
  };

  render() {
    const {title, infomation} = this.props;
    return (
        <Fade bottom cascade>
          <div className="you">
            <Rodal width={600} height={350} closeOnEsc={true} animation='door' visible={this.state.visible}
                   onClose={this.hideMore}>
              <ul className="you-list you-modal">
                {infomation.map((item) => (
                    <li key={item} className="you-item">{item}</li>
                ))}
              </ul>
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
        </Fade>
    );
  }
}

export default You;
