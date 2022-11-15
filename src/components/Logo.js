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
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20,
      }}>
        <div style={{
          color: theme.customColors.azulDark,
          flex: 1,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}>       
        {!small ? (
          <div style={{
            display: 'flex',
          }}>
            <Typography style={{fontFamily: 'Pinyon Script'}} color='primary' fontSize={theme.sizes.headerFontSize}>
              Romão
            </Typography>
            
                 <Typography style={{
                    fontFamily: 'Luxurious Script', 
                    marginRight: 20,
                    marginLeft: 20,
                  }} fontSize={theme.sizes.headerFontSize}>
                &
              </Typography>
              <Typography style={{fontFamily: 'Pinyon Script'}} fontSize={theme.sizes.headerFontSize}>
                Brunna
              </Typography>
          </div>
        ) : (
          <div style={{display: 'flex', height: 64, alignItems: 'center'}}>
            <Typography style={{fontFamily: 'Pinyon Script'}} color='primary' fontSize={theme.sizes.headerFontSizeSmall}>
              Romão
            </Typography>
            <div style={{
              display: 'flex',
              flexDirection: 'row',
            }}>
              <Typography style={{fontFamily: 'Luxurious Script', marginRight: 20, marginLeft: 20}} fontSize={theme.sizes.headerFontSizeSmall}>
                &
              </Typography>
              <Typography style={{fontFamily: 'Pinyon Script'}} fontSize={theme.sizes.headerFontSizeSmall}>
                Brunna
              </Typography>
            </div>
          </div>
        )}
        </div>

      <div style={{
          width: '100%',
          borderBottom: '2px solid', 
          borderColor: theme.customColors.azulDark,
      }}></div>
    </div>
  )
}
