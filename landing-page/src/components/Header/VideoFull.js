import React, { PureComponent } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import YoutubeApi from '../../utils/youtube-api';
import colorStyle from "../../utils/color-style";

const WrapperVideo = styled.div`
   & .header-video {
        position: relative;
        padding-bottom: 56.25%;
        &-yt {
          position: absolute;
          z-index: 5;
          top: -8rem;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          transform: skewY(5deg);
          transform-origin: bottom right;
        }
        &-btn {
          position: absolute;
          z-index: 6;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background-color: transparent;
          border: none;
          outline: none;
          cursor: pointer;
        }
        &-icon {
          font-size: 8.5rem;
          color: ${colorStyle.white};
        }
   }
`;

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
      autoplay: 1,
      controls: 0,
      showinfo: 1,
      mute: true,
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
