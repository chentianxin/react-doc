export default function init() {
  let paletteType = 0;
  if(window.hasOwnProperty('matchMedia')) {
    const { matches } = window.matchMedia('prefers-color-scheme: dark');
    if(matches) paletteType = 2;
  }

  return {
    paletteType,
  }
}