import { createTheme } from "@mui/material/styles";

const LightTeme = createTheme({
    palette: {
        background: {
            default: "#f0f2f5",
        },
        transparent: {
          main: "transparent",
        },
        primary: {
          main: "#e91e63",
          focus: "#e91e63",
        },
      
        secondary: {
          main: "#7b809a",
          focus: "#8f93a9",
        },
      
        info: {
          main: "#1A73E8",
          focus: "#1662C4",
        },
      
        success: {
          main: "#4CAF50",
          focus: "#67bb6a",
        },
      
        warning: {
          main: "#fb8c00",
          focus: "#fc9d26",
        },
      
        error: {
          main: "#F44335",
          focus: "#f65f53",
        },
      
        light: {
          main: "#f0f2f5",
          focus: "#f0f2f5",
        },
      
        dark: {
          main: "#344767",
          focus: "#2c3c58",
        },
    }
})

export default LightTeme;