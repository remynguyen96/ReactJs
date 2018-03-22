import React, {Component} from 'react';
import PropTypes from 'prop-types';

class VideoFull extends Component {
  constructor(props) {
    super(props);
    this.elPlayer = null;
    this.loadYT = null;
    this.YT = null;
  }

  static propTypes = {
    className: PropTypes.string.isRequired,
  };

  static defaultProps = {
    className: '',
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
        width: window.innerWidth - 20,
        height: 600,
        videoId: '9ZfN87gSjvI',
        playerVars: {
          autoplay: 1,
          controls: 0,
          disablekb: 1,
          showinfo: 1,
          rel: 0,
          loop: 1,
          playlist: '9ZfN87gSjvI',
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

  render() {
    const { className } = this.props;
    return (
        <div className={className}
             ref={(ref) => { this.elPlayer = ref }}
        ></div>
    );
  }
}

export default VideoFull;
