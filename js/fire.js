$(document).ready(function() {
  console.log('loading!');
    let scene = document.getElementById('scene');
  console.log('scene', scene);

  let flamezz = document.getElementsByClassName('flame-outline')
  for (let i = 0; i < flamezz.length; i++) {
    f = flamezz[i]
    console.log((i/flamezz.length).toString());
  }

  var parallax = new Parallax(scene, {
    relativeInput: true
  });
});
