export default function init() {
  let paletteType = 0;
  const localConfig = JSON.parse(localStorage.getItem('themeConfig'));
  if(localConfig?.paletteType) {
    paletteType = localConfig?.paletteType;
  }else {
    const { matches } = window.matchMedia('prefers-color-scheme: dark');
    if(matches) paletteType = 1;
  }

  return {
    paletteType,
  }
}