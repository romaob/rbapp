import React from 'react'
import theme from '../values/theme'

export default function InfoPanel({img, children, reverse, style, infoStyle}) {
  return (
    <div style={{
        display: 'flex', 
        flexDirection: reverse ? 'row-reverse' : 'row',
        marginBottom: 20,
        backgroundColor: theme.getTheme().palette.background.paper,
        minHeight: 150,
        boxShadow: '2px 5px 10px rgba(0,0,0,0.2)',
        ...style
    }}>
        {img && 
            <div style={{
                display: 'flex',
                alignItems: 'center',
                maxWidth: '40%',
                overflow: 'hidden',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                {img}
            </div>
        }
        <div style={{
            display: 'flex',
            flex: 1,
            padding: 5,
            marginLeft: 10,
            marginRight: 10,
            alignItems: 'center',
            ...infoStyle
        }}>
            Info
            {children}
        </div>
    </div>
  )
}
