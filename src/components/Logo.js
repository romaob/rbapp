import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import values from '../values'
import strings from '../values/strings'
import theme from '../values/theme'

export function LogoText({fontSize}) {
  return (
    <div style={{
      display: 'flex',
    }}>
      <Typography style={{fontFamily: 'Pinyon Script'}} fontSize={fontSize}>
        Romão
      </Typography>
      
           <Typography fontSize={fontSize} style={{
              fontFamily: 'Luxurious Script', 
              marginRight: 20,
              marginLeft: 20,
            }}>
          &
        </Typography>
        <Typography style={{fontFamily: 'Pinyon Script'}} fontSize={fontSize}>
          Brunna
        </Typography>
    </div>
  )
}

export default function Logo() {
  return (
    <div style={{
      textShadow: '0px 4px 10px #000000',
    }}>
      {/* Larger Logo */}
      <Box sx={{ display: { xs: 'none', md: 'block' } }}>
          <LogoText fontSize={theme.sizes.headerFontSize}/>
      </Box>

      {/* Smaller Logo */}
      <Box sx={{ display: { xs: 'block', md: 'none' } }}>
          <LogoText fontSize={theme.sizes.headerFontSizeSmall}/>
      </Box>
        
      <div style={{
          width: '100%',
          borderBottom: '2px solid', 
          marginBottom: 10,
          borderColor: theme.customColors.textContrast,
      }}></div>
      <Typography fontSize={theme.sizes.title}>
        {strings.date_plain}
      </Typography>
    </div>
  )
}
