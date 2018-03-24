import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Slider from 'react-slick';
import { YoutubeApi } from '../../utils/youtube-api';

const dataVideo = [
  // { id: 'UpHHPkLkoG8', name: 'Count On Me' },
  // { id: 'Pj5PkQY9x8I', name: 'Ta Đã Gặp Mẹ Con Như Thế Nào' },
  // { id: 'Ls6EBIR8hDE', name: 'Mân Côi' },
  { id: 'mdXeKm44Ubc', name: 'Bớt lo một ngày' },
  // { id: 'Z14lqZRf2ZM', name: 'Em Hãy Nhắn Tin' },
  // { id: 'Sa6VzCCP5Yg', name: 'Tôi Biết Em Không Biết' },
];

class Video extends Component {

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
          {dataVideo.map(({id, name}) => (
              <div key={id}>
                <div className="yt-player" ref={(element) => { YoutubeApi({ element, videoId: id, width, height }) }}></div>
                <h4 className="yt-title">{name}</h4>
              </div>
          ))}
        </Slider>
    );
  }
}

export default Video;
