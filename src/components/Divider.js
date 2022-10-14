import React from 'react'

export default function Divider({width, invisible, style}) {
  return (
    <div style={{
        height: 1,
        backgroundColor: !invisible ? 'rgba(0,0,0,0.5)' : 'transparent',
        margin: 10,
        width: width ?? '80%',
        ...style
    }}/>
  )
}
