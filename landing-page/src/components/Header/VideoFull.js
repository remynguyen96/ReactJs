import React, { PureComponent } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import colorStyle from "../../utils/colorStyle";

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
    this.loadYT = null;
    this.YT = null;
  }

  static propTypes = {
    // className: PropTypes.string.isRequired,
  };

  static defaultProps = {
    // className: '',
  };

  componentDidMount() {
    if (!this.loadYT) {
      this.loadYT = new Promise((resolve) => {
        const tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        window.onYouTubeIframeAPIReady = () => resolve(window.YT);
      })
    }
    this.loadYT.then((YT) => {
      this.YT = YT;
      new YT.Player(this.elPlayer, {
        width: 600,
        height: 400,
        videoId: 'c9pQYOGIWM8',
        playerVars: {
          autoplay: 1,
          controls: 0,
          disablekb: 1,
          showinfo: 1,
          rel: 0,
          loop: 1,
          playlist: 'c9pQYOGIWM8',
          fs: 0,
          modestbranding: 1,
          iv_load_policy: 3,
          autohide: 1,
        },
        events: {
          onReady: this.onPlayerReady,
          onStateChange: this.onPlayerStateChange,
        }
      });
    })
  }

  onPlayerReady = (event) => {
    event.target.mute();
    event.target.playVideo();
  };

  onPlayerStateChange = (event) => {
    if (event.data === this.YT.PlayerState.PAUSED) {
      event.target.playVideo();
    }
  };

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
