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
        <div style={{
          color: theme.customColors.azulDark,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}>          
          <div>
            <Typography variant='h1' style={{fontFamily: 'Pinyon Script'}}>
              Romão
            </Typography>
            <div style={{
              display: 'flex',
              flexDirection: 'row',
            }}>
              <Typography variant='h1' style={{fontFamily: 'Luxurious Script', marginRight: 20}}>
                &
              </Typography>
              <Typography variant='h1' style={{fontFamily: 'Pinyon Script'}}>
                Brunna
              </Typography>
            </div>
          </div>
        </div>
    </div>
  )
}
