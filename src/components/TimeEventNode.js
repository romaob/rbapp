import { Typography } from '@mui/material'
import React from 'react'
import theme from '../values/theme'

export function TimeEventNodeHorizontal({ballText, children, leftless, rightless}){
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
        }}>
            <div style={{
                flex: 1,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
            }}>
                <div style={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                }}>
                    <div style={{
                        flex: 1,
                        height: leftless ? 0 : 3,
                        width: '100%',
                        backgroundColor: theme.customColors.azulSerenity,
                    }}/>
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
                        height: rightless ? 0 : 3,
                        width: '100%',
                        backgroundColor: theme.customColors.azulSerenity,
                    }}/>
                </div>
                <div style={{
                    width: 3,
                    height: 30,
                    backgroundColor: theme.customColors.azulSerenity,
                }}></div>
            </div>
            <div style={{
                flex: 1,
            }}>
                {children}
            </div>
        </div>
    )
}

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
