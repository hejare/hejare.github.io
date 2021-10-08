const logoAnimation = bodymovin.loadAnimation({
  container: document.getElementById('logo'),
  renderer: 'svg',
  loop: false,
  autoplay: true,
  path: './animations/logo_animation.json',
  speed: "0.1",
});

