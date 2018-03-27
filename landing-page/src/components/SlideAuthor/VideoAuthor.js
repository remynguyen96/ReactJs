import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Slider from 'react-slick';
import { YoutubeApi } from '../../utils/youtube-api';

const dataVideo = [
  {
    id: 'exZjPWROmdw',
    name: 'Pierre Massei và hành trình về quê mẹ',
    info: 'State of the art technology and an incentivized marketing community, perfectly balanced.',
  },
  {
    id: 'Rp2v08lVbg4',
    name: 'Mỹ Hương Lê và câu chuyện tìm mẹ',
    info: 'The more that people take part and contribute, the more the system itself is empowered, becoming more valuable to all those that use it.',
  },
  {
    id: 'f8SX1xI59vQ',
    name: 'Một người Mỹ vì Việt Nam',
    info: 'We have designed a better kind of network; an ecosystem, where everyone can benefit and be empowered by a myriad of blockchain-based services and applications.',
  },
  {
    id: 'NUKKzdVy0EI',
    name: 'Lakeside Campfire with Relaxing Nature Night Sounds',
    info: 'We have designed a better kind of network; an ecosystem, where everyone can benefit and be empowered by a myriad of blockchain-based services and applications.',
  },
];

class VideoAuthor extends Component {

  static propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    settings: PropTypes.object.isRequired,
  };

  static defaultProps = {
    width: 400,
    height: 400,
    settings: {},
  };

  render() {
    const { width, height, settings } = this.props;
    return (
        <Slider {...settings}>
          {dataVideo.map(({id, name, info}) => (
              <div key={id} className="author-slide">
                <div className="author-player"
                     ref={(element) => { YoutubeApi({ element, videoId: id, width, height }) }}
                >
                </div>
                <div className="author-info">
                  <h4 className="author-name">{name}</h4>
                  <p className="author-desc">{info}</p>
                </div>
              </div>
          ))}
        </Slider>
    );
  }
}

export default VideoAuthor;

