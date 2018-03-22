const tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let player;
let done = false;

const stopVideo = () => {
  player.stopVideo();
};

const onPlayerReady = (event) => {
  event.target.playVideo();
};

const onPlayerStateChange = (event) => {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    setTimeout(stopVideo, 6000);
    done = true;
  }
};

export const onYouTubePlayerAPIReady = () => {
  player = new YT.Player('video-player', {
    height: '390',
    width: '640',
    videoId: 'M7lc1UVf-VE',
    playerVars: {
      autoplay: 1,
      controls: 0,
      disablekb: 1,
      autohide: 1,
      rel: 0,
      showinfo: 0,
      loop: 1,
      fs: 0,
      modestbranding: 1,
      iv_load_policy: 3,
      wmode:'transparent'
    },
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
};
