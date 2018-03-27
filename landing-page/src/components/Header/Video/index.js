import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import Rodal from 'rodal';
import WrapperVideo from './Wrapper';
import { YoutubeApi, PlayerReady, PlayerStateChange } from '../../../utils/youtube-api';
import 'rodal/lib/rodal.css';

class VideoFull extends PureComponent {
  constructor(props) {
    super(props);
    this.elPlayer = null;
    this.state = {
      visible: false,
    };
  }

  static propTypes = {
    videoId: PropTypes.string.isRequired,
  };

  static defaultProps = {
    videoId: 'Ftm2uv7-Ybw',
  };

  componentDidMount() {
    const settings = {
      videoId: this.props.videoId,
      element: this.elPlayer,
      autoplay: 1,
      showinfo: 1,
      onPlayerReady: PlayerReady,
      onPlayerStateChange: PlayerStateChange,
    };
    YoutubeApi(settings);
  }

  showVideo = () => {
    this.setState({ visible: true });
  };

  hideVideo = () => {
    this.setState({ visible: false });
  };

  render() {
    return (
        <WrapperVideo>
          {
            !(window.innerWidth <= 1024) && (
              <Fragment>
                <Rodal closeOnEsc={true} animation='slideUp' visible={this.state.visible} onClose={this.hideVideo}>
                  <div>Video Here !!!!</div>
                </Rodal>
                <button className="header-video-btn" onClick={this.showVideo}>
                  <i className="fa fa-play-circle header-video-icon" aria-hidden="true"></i>
                </button>
              </Fragment>
            )
          }
          <section className="header-video">
            <div className="header-video-yt" ref={(ref) => { this.elPlayer = ref }}></div>
          </section>
        </WrapperVideo>
    );
  }
}

export default VideoFull;
