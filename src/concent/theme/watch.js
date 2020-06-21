export function paletteType(newState) {
  localStorage.setItem('themeConfig', JSON.stringify(newState));
}