import { Box } from "@mui/material";
import { styled } from '@mui/system';

const JBBoxStyle = styled(Box)(({theme, ownerState}) => {
    const {palette } = theme
    const { bgColor, color } = ownerState

    const validColors = [
        "transparent",
        "white",
        "black",
        "primary",
        "secondary",
        "info",
        "success",
        "warning",
        "error",
        "light",
        "dark",
    ]

    let backgroundValue = bgColor ? bgColor : "transparent";

    if(bgColor && validColors.find(el => el === bgColor)){
        backgroundValue = palette[bgColor] ?    palette[bgColor].main : "grey"
    }

    let colorValue = color ? color : "dark"

    if(color && validColors.find( el => el === color)) {
        colorValue = palette[color] ? palette[color].main : "grey"
    }


    return {
        background: backgroundValue,
        color: colorValue
    }
})


export default JBBoxStyle