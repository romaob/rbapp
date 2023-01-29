import React from 'react'
import theme from '../values/theme'

export default function InfoPanel({img, children, reverse, style, infoStyle}) {
  return (
    <div style={{
        display: 'flex', 
        flexDirection: reverse ? 'row-reverse' : 'row',
        flexWrap: 'wrap',
        marginBottom: 20,
        backgroundColor: theme.getTheme().palette.background.paper,
        minHeight: 150,
        boxShadow: '2px 5px 10px rgba(0,0,0,0.2)',
        justifyContent: 'center',
        ...style
    }}>
        {img && 
            <div style={{
                display: 'flex',
                alignItems: 'center',
                overflow: 'hidden',
                justifyContent: 'center',
            }}>
                {img}
            </div>
        }
        <div style={{
            display: 'flex',
            flex: 1,
            alignItems: 'center',
            ...infoStyle
        }}>
            {children}
        </div>
    </div>
  )
}
