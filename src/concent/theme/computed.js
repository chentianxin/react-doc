import { createMuiTheme } from "@material-ui/core/styles";

export function paletteTypeText({ paletteType }) {
  return paletteType === 0 ? "浅色模式" : "深色模式";
}

export function muiTheme({ paletteType }) {
  return createMuiTheme({
    palette: {
      type:  paletteType === 0 ? 'light' : 'dark',
    },
    typography: {
      fontFamily: `Roboto,-apple-system,BlinkMacSystemFont,segoe ui,helvetica neue,Arial,noto sans,sans-serif,apple color emoji,segoe ui emoji,segoe ui symbol,noto color emoji`,
    },
  })
}