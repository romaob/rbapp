import { amber, grey, blue, lightBlue } from "@mui/material/colors"

let style = 'light'

const light = {    
    typography: {
        fontFamily: 'Quicksand, Roboto, sans-serif',
        fontSize: 16,
    },
    palette:{
        mode: 'light',
        primary: {
            main: '#274C8F',
        },
        secondary: {
            main: "#eb949e"
        },
        background: {
            paper: "#FFFFFF",
            default: "#EEF1F6"
        },
        text: {
            primary: "#3D3D3D",
            secondary: "#3D3D3D"
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
    azulSerenity: "#80abdb",
    azulDark: "#274C8F",
    rose: "#eb949e",
    textContrast: "#FFF",
    textMain: "#3d3f4d",
    background: "#EEF1F6",
    backgroundContrast: "#000",
}
const theme = {
    getTheme: () => {
        if(style === 'light') return light
        return dark
    },
    getStyle: () => {
        return style
    },
    sizes: {
        headerFontSize: 80,
        headerFontSizeSmall: 36,
    },
    customColors,
    /*
    setStyle: (style) => {
        style = style
    },
    */
}

export default theme;