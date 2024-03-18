// import { store } from "@/store";
import { PaletteMode } from "@mui/material";
import { createTheme } from "@mui/material/styles";

export type Theme = "light" | "dark";

const getDesignTokens = (mode:PaletteMode) => ({
  palette:{
    mode,
    ...(mode==='light'
    ?{
      primary: {
        main: "#6D0000", //red 
      },
      secondary: {
        main: "#900D09", // red Scarlet
      },
      info: {
        main: "#A91B0D", //red Apple
      },
      success: {
        main: "#F3F8FF", //white
      },
      
    }
    :{
      primary: {
        main: "#6D0000", //red 
      },
      secondary: {
        main: "#900D09", // red Scarlet
      },
      info: {
        main: "#A91B0D", //red Apple
      },
      success: {
        main: "#F3F8FF", //white
      },
    })
  }
})

 
// primary: {
//   main: "#6D0000", //red 
// },
// secondary: {
//   main: "#900D09", // red Scarlet
// },
// info: {
//   main: "#A91B0D", //red Apple
// },
// success: {
//   main: "#F3F8FF", //white
// },
// },
export const theme = createTheme(getDesignTokens('dark' || 'light'));
