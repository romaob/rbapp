import React from 'react'

export default function Divider({width, invisible, color, style}) {
  return (
    <div style={{
        height: 3,
        backgroundColor: !invisible ? (color ?? 'rgba(0,0,0,0.5)') : 'transparent',
        margin: 10,
        width: width ?? '95%',
        ...style
    }}/>
  )
}
