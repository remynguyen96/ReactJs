let loadYT = null;
let YT = null;

let onPlayerReady = (event) => {
  event.target.playVideo();
};

const onPlayerStateChange = (event) => {
  if (event.data === YT.PlayerState.PAUSED) {
    event.target.playVideo();
  }
};

const YoutubeApi = ({ element, autoplay= 0, controls= 0, showinfo= 1, mute= false, videoId= 'c9pQYOGIWM8' }) => {
  if (mute) {
    onPlayerReady = (event) => {
      event.target.mute();
      event.target.playVideo();
    };
  }
  if (!loadYT) {
    loadYT = new Promise((resolve) => {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      window.onYouTubeIframeAPIReady = () => resolve(window.YT);
    })
  }
  loadYT.then((youtube) => {
    YT = youtube;
    new YT.Player(element, {
      width: 600,
      height: 400,
      videoId,
      playerVars: {
        autoplay,
        controls,
        showinfo,
        playlist: videoId,
        disablekb: 1,
        rel: 0,
        loop: 1,
        fs: 0,
        modestbranding: 1,
        iv_load_policy: 3,
        autohide: 1,
      },
      events: {
        onReady: onPlayerReady,
        onStateChange: onPlayerStateChange,
      }
    });
  });
};

export default YoutubeApi;
