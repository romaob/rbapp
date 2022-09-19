import React from 'react'

export default function MenuItem({label, onClick}) {
  return (
    <div style={{
        color: 'white',
        padding: 10,
        margin: 10,
        maxWidth: 170,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        fontSize: 20,
        cursor: 'pointer'
    }} onClick={onClick}>
        {label}
    </div>
  )
}
