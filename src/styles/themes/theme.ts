import { createTheme } from "@mui/material";
import { blue } from "@mui/material/colors";

export const theme = createTheme({
    palette: {
      primary: {
        main: blue[800],
        light: "skyblue"
      },
      secondary: {
        main: "#15c630",

      },
    }
})