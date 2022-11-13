import { Typography } from '@mui/material'
import React from 'react'
import theme from '../values/theme'

export default function TimeEventNode({ballText, children, topless, botomless}) {
  return (
    <div style={{
        minHeight: 75,
        display: 'flex',
        flexDirection: 'row',
        flex: 1,
    }}>
        <div style={{
            display: 'flex',
            width: '40%',
            maxWidth: 200,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            paddingRight: 5,
        }}>
            <div style={{
                display: 'flex',
                flex: 1,
                textAlign: 'center',
                backgroundColor: theme.customColors.azulSerenity,
                width: topless ? 0 : 3,
            }}>
            </div>     
            <div style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <div style={{
                    flex: 1
                }}></div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    fontSize: 24,
                    fontWeight: 'bold',
                    color: theme.customColors.textContrast, 
                    borderRadius: 10,
                    paddingLeft: 10,
                    paddingRight: 10,
                    backgroundColor: theme.customColors.azulSerenity,
                }}>
                    {ballText}
                </div>
                <div style={{
                    flex: 1,
                    height: 3,
                    backgroundColor: theme.customColors.azulSerenity,
                }}></div>
            </div>
            <div style={{
                display: 'flex',
                flex: 1,
                textAlign: 'center',
                backgroundColor: theme.customColors.azulSerenity,
                width: botomless ? 0 : 3,
            }}>
            </div>  
        </div>
        <div style={{
            display: 'flex',
            flex: 1,
            alignItems: 'center',
            paddingLeft: 10,
        }}>
            <Typography textAlign={'left'} fontWeight={'bold'}>
                {children}
            </Typography>
        </div>
    </div>
  )
}
