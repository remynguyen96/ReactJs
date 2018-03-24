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

export const PlayerReady = ({ target }) => {
  target.mute();
  target.setVolume(0);
};

export const PlayerStateChange = ({ data, target }) => {
  if (data === YT.PlayerState.PAUSED) {
    target.playVideo();
  }
};

function changeBorderColor(playerStatus) {
  var color;
  if (playerStatus == -1) {
    color = "#37474F"; // unstarted = gray
  } else if (playerStatus == 0) {
    color = "#FFFF00"; // ended = yellow
  } else if (playerStatus == 1) {
    color = "#33691E"; // playing = green
  } else if (playerStatus == 2) {
    color = "#DD2C00"; // paused = red
  } else if (playerStatus == 3) {
    color = "#AA00FF"; // buffering = purple
  } else if (playerStatus == 5) {
    color = "#FF6DOO"; // video cued = orange
  }
  if (color) {
    document.getElementById('existing-iframe-example').style.borderColor = color;
  }
}
function onPlayerStateChange(event) {
  changeBorderColor(event.data);
}

export const YoutubeApi = ({ element, autoplay= 0, controls= 0, showinfo= 0, videoId= 'c9pQYOGIWM8', onPlayerReady= null, onPlayerStateChange= null }) => {

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
