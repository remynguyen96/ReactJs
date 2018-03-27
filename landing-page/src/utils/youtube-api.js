let loadYT = null;
let YT = null;

if (!loadYT) {
  loadYT = new Promise((resolve) => {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    window.onYouTubeIframeAPIReady = () => resolve(window.YT);
  })
}

export const PlayerReady = (event) => {
  event.target.mute();
  event.target.setVolume(0);
};

export const PlayerStateChange = (event) => {
  if (event.data === YT.PlayerState.PAUSED) {
    event.target.playVideo();
  }
};

export const YoutubeApi = ({ element, autoplay= 0, controls= 0, showinfo= 0, videoId= 'NUKKzdVy0EI', onPlayerReady= null, onPlayerStateChange= null }) => {

  return loadYT.then((youtube) => {
    YT = youtube;
    new YT.Player(element, {
      width: 400,
      height: 400,
      videoId,
      playerVars: {
        autoplay,
        controls,
        showinfo,
        modestbranding: 1,
        playlist: videoId,
        disablekb: 1,
        rel: 0,
        loop: 1,
        fs: 0,
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
