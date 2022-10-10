import { Typography } from '@mui/material'
import React from 'react'
import strings from '../values/strings'
import theme from '../values/theme'

export default function Logo({small}) {
  return (
    <div style={{
        fontSize: 48,
        color: theme.customColors.textContrast,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: small ? 'flex-start' : 'center',
        alignItems: 'center',
        paddingLeft: small ? 75 : 20,
        paddingRight: 20,
      }}>
        <img alt='Romão & Brunna' src={require('../images/art/romaobrunna-transp-dark.png')} style={{width: "40%", minWidth: small ? 300 : 400, maxWidth: 1000, paddingLeft: 10, paddingRight: 10}}/>
        {small && //2 < 1 &&
          <Typography variant={small ? 'h6' : 'h4'} style={{flex: 1, textAlign: 'right', fontFamily: "'Pinyon Script', cursive"}}>{strings.date_plain}</Typography>
        }
    </div>
  )
}
