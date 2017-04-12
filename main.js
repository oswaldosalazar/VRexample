//Set the event target to a window, on load perform callback
window.addEventListener('load', onVrViewLoad);

function onVrViewLoad() {
  //define vrView, assign it to id vrview and provide parameters
  var vrView = new VRView.Player('#vrview', {
    video: 'https://vr.jwplayer.com/content/AgqYcfAT/AgqYcfAT-8yQ1cYbs.mp4',
    is_stereo: false,
    width: window.innerWidth,
    height: window.innerHeight
  });
  vrView.on('ready',function(){
    vrView.addHotspot('#hotspot', {
      pitch: 7, // In degrees. Up is positive.
      yaw: 35.5, // In degrees. To the right is positive.
      radius:   0.03, // Radius of the circular target in meters.
      distance: 2, // Distance of target from camera in meters.
    });
  });
};

//Execute function
onVrViewLoad();
