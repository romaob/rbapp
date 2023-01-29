import { Typography } from '@mui/material'
import React from 'react'
import theme from '../values/theme'

export default function StyledTypographyScript(props) {
  return (
    <Typography 
        fontFamily={'Pinyon Script'} 
        fontSize={props.fontSize ?? theme.sizes.title} 
        color={props.dark ? theme.customColors.textContrast : theme.customColors.textMain}
        style={{
            textShadow: '0px 4px 4px rgba(0,0,0,0.4)',
        }}
        >
            {props.children}
    </Typography>
  )
}
