import { Fade, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { isMarried } from '../values'
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
  const married = isMarried();

  return (
    <Fade in={true} timeout={2000}>
      <div style={{
        textShadow: '0px 4px 4px rgba(0, 0, 0, 0.5)',
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
            boxShadow: '0px 4px 10px #000000',
        }}></div>
        {!married ? (
          <Typography fontSize={theme.sizes.subtitle}>
            {strings.date_plain}
          </Typography>
        ) : (
          <Typography fontSize={theme.sizes.subtitle}>
            Recém-casados!
          </Typography>
        )}
      </div>
    </Fade>
  )
}
