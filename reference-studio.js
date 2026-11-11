(() => {
  const film = document.querySelector('.life-film');
  if (!film) return;

  const image = film.querySelector('.life-film__image');
  const count = film.querySelector('.life-film__counter span');
  const frames = [
    'flash-IMG_7330.jpg',
    'flash-IMG_7323.jpg',
    'flash-4365c699585a9e9f783811c57216ea96.jpg',
    'flash-IMG_4972 2.jpg',
    'flash-IMG_5895.jpg',
    'flash-IMG_5889.jpg',
    'flash-IMG_5886.jpg',
    'flash-IMG_5582.jpg',
    'flash-IMG_7530.jpg',
    'flash-IMG_5807.jpg',
    'flash-IMG_5916.jpg',
    'flash-IMG_5652.jpg',
    'flash-2025年07月12日(2)_0022.jpg',
    'flash-IMG_7087.jpg',
    'flash-IMG_2043.jpg',
    'flash-IMG_2044.jpg',
    'about-ending.jpg'
  ];
  const base = 'assets/about/';
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let current = 0;

  function show(index) {
    const src = base + frames[index];
    image.src = src;
    film.style.setProperty('--frame-image', `url("${src}")`);
    if (count) count.textContent = String(index + 1).padStart(2, '0');
    film.classList.toggle('is-final', index === frames.length - 1);
  }

  const preload = frames.map((name) => new Promise((resolve) => {
    const photo = new Image();
    photo.onload = photo.onerror = resolve;
    photo.src = base + name;
  }));

  Promise.all(preload).then(() => {
    if (reducedMotion) {
      show(frames.length - 1);
      return;
    }
    show(0);
    const timer = window.setInterval(() => {
      current += 1;
      show(current);
      if (current >= frames.length - 1) window.clearInterval(timer);
    }, 180);
  });
})();
