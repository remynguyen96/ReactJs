import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Slider from 'react-slick';
import { YoutubeApi } from '../../utils/youtube-api';

const dataVideo = [
  { id: '1v5ZsM10S0o', name: 'Ngày trở về của Alice' },
  { id: 'u0e0AdP2Jds', name: 'Tôi yêu quê hương tôi từ khi mới thành người' },
  { id: 'JedTFseze7o', name: 'Đêm mơ mình nói tiếng Việt Nam' },
  { id: '7ayAiF3hHRc', name: 'Trở về và lập nghiệp tại đất mẹ' },
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
