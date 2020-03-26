import * as Typography from "typography"
import lawtonTheme from "typography-theme-lawton"

// const typography = new (<any>Typography)(lawtonTheme)

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.45,
  headerFontFamily: ["Raleway", "serif"],
  bodyFontFamily: ["Roboto", "sans-serif"],
  googleFonts: [
    {
      name: "Caveat",
      styles: ["400", "700"]
    }
  ],
});

export default typography
export const rhythm = typography.rhythm
