import { amber, grey, lightGreen } from "@mui/material/colors"

let style = 'light'

const light = {    
    palette:{
        mode: 'light',
        primary: {
            main: amber[400]
        },
        secondary: {
            main: grey["A200"]
        },
        background: {
            paper: "#FFFFFF",
            default: "#d2dce8"
        }        
    }, 
}

const dark = {
    palette:{
        mode: 'dark',
        primary: {
            main: amber[400]
        },
        secondary: {
            main: grey["A700"]
        },
        background: {
            paper: grey[900],
            default: "#0b0b0b"
        },
    },    
}

const customColors = {
    color1: "#0b0b0b",
    color2: "#d2dce8",
    textContrast: "#FFF",
    backgroundContrast: "#000",
}

export default {
    getTheme: () => {
        if(style === 'light') return light
        return dark
    },
    getStyle: () => {
        return style
    },
    customColors,
    /*
    setStyle: (style) => {
        style = style
    },
    */
}