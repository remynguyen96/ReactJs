import React, {Component} from 'react';
import { onYouTubePlayerAPIReady } from '../../utils/apiYoutube';
window.onYouTubePlayerAPIReady = onYouTubePlayerAPIReady;

class VideoFull extends Component {
  // constructor(props) {
  //   super(props);
  // }

  componentWillMount() {

  }

  render() {
    return (
       <div id="video-player"></div>
    );
  }
}

export default VideoFull;
