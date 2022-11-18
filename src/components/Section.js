import { Typography } from '@mui/material'
import React from 'react'
import theme from '../values/theme'

export default function Section({title, dark, style, children}) {
  return (
    <div style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        paddingTop: 45,
        paddingBottom: 45,
        paddingLeft: 15,
        paddingRight: 15,
        backgroundColor: dark ? theme.customColors.backgroundContrast : 'transparent',
        color: dark ? theme.customColors.textContrast : theme.customColors.textMain,
        ...style,
    }}>
        {title &&
          <Typography 
            fontFamily={'Pinyon Script'} 
            fontSize={theme.sizes.title} 
            color={dark ? theme.customColors.textContrast : theme.customColors.textMain}
          >
              {title}
          </Typography>
        }
        {children}
    </div>
  )
}
