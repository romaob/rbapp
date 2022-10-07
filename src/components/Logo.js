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
        justifyContent: small ? 'flex-start' : 'center',
        alignItems: 'center',
        paddingTop: 10,
        paddingLeft: small ? 75 : 20,
        paddingRight: 20,
      }}>
        <Typography variant={small ? 'h4' : 'h2'}>{strings.title_short}</Typography>
        {small &&
          <Typography variant={small ? 'h6' : 'h4'} style={{marginLeft: 10}}> / {strings.date_plain}</Typography>
        }
    </div>
  )
}
