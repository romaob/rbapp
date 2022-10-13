import { Typography } from '@mui/material'
import React from 'react'
import strings from '../values/strings'
import theme from '../values/theme'

export default function Logo({small}) {
  return (
    <div style={{
        flex: 1,
        fontSize: 48,
        color: theme.customColors.textContrast,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: small ? 'flex-start' : 'center',
        alignItems: 'center',
        paddingLeft: small ? 75 : 10,
        paddingRight: 10,
      }}>
        <img alt='Romão & Brunna' src={require('../images/art/romaobrunna-transp-dark.png')} style={{width: "45%", minWidth: small ? 275 : 375, maxWidth: 1000, paddingLeft: 10, paddingRight: 10}}/>
    </div>
  )
}
