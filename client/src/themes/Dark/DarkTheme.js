import { createTheme } from "@mui/material/styles";

const DarkTheme = createTheme({
    palette: {
        background: {
            default: "#1a2035",
            sidenav: "#1f283e",
            card: "#202940",
          },
        
          text: {
            main: "#ffffffcc",
            focus: "#ffffffcc",
          },
        
          transparent: {
            main: "transparent",
          },
        
          white: {
            main: "#ffffff",
            focus: "#ffffff",
          },
        
          black: {
            light: "#000000",
            main: "#000000",
            focus: "#000000",
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
            main: "#f0f2f566",
            focus: "#f0f2f566",
          },
        
          dark: {
            main: "#344767",
            focus: "#2c3c58",
          },
    }
})

export default DarkTheme;