import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import WrapperVideo from './Wrapper';
import { YoutubeApi, PlayerReady, PlayerStateChange } from '../../../utils/youtube-api';

class VideoFull extends PureComponent {
  constructor(props) {
    super(props);
    this.elPlayer = null;
  }

  static propTypes = {
    // className: PropTypes.string.isRequired,
  };

  static defaultProps = {
    // className: '',
  };

  componentDidMount() {
    const settings = {
      element: this.elPlayer,
      // autoplay: 1,
      autoplay: 0,
      showinfo: 1,
      onPlayerReady: PlayerReady,
      onPlayerStateChange: PlayerStateChange,
    };
    YoutubeApi(settings);
  }

  showVideo = () => {
    console.log('show popup video !');
  };

  render() {
    return (
        <WrapperVideo>
          <button className="header-video-btn" onClick={this.showVideo}>
            <i className="fa fa-play-circle header-video-icon" aria-hidden="true"></i>
          </button>
          <section className="header-video">
            <div className="header-video-yt" ref={(ref) => { this.elPlayer = ref }}></div>
          </section>
        </WrapperVideo>
    );
  }
}

export default VideoFull;
