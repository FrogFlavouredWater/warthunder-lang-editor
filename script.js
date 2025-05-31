function cycleHue() {
  const t = Date.now() / 1000;
  // Faster cycling for visible animation
  const h1 = Math.round((255 + 60 * Math.sin(t / 2)) % 360);
  const h2 = Math.round((222 + 60 * Math.cos(t / 2)) % 360);
  document.documentElement.style.setProperty('--hue1', h1);
  document.documentElement.style.setProperty('--hue2', h2);
  requestAnimationFrame(cycleHue);
}
requestAnimationFrame(cycleHue);
