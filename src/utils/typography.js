import Typography from "typography"
import irvingTheme from "typography-theme-irving"

irvingTheme.bodyFontFamily = ["Roboto", "georgia", "sans-serif"]
irvingTheme.headerWeight = 800

irvingTheme.overrideThemeStyles = () => {
  return {
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
  }
}

delete irvingTheme.googleFonts

const typography = new Typography(irvingTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
