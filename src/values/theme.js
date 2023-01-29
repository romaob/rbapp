import { amber, grey, blue, lightBlue } from "@mui/material/colors"

let style = 'light'

const light = {    
    typography: {
        fontFamily: 'Lato, Quicksand, Roboto, sans-serif',
        fontSize: 20,
    },
    palette:{
        mode: 'light',
        primary: {
            main: '#274C8F',
        },
        secondary: {
            main: "#FFF"
        },
        background: {
            paper: "#FFFFFF",
            default: "#EEF1F6"
        },
        text: {
            primary: "#20243e",
            secondary: "#404460"
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
            main: '#FFF'
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
        headerFontSize: 96,
        headerFontSizeSmall: '13vw',
        title: 52,
        subtitle: 28,
        small: 18,
    },
    customColors,
    /*
    setStyle: (style) => {
        style = style
    },
    */
}

export default theme;