import { Button } from '@mui/material'
import React from 'react'

import theme from '../values/theme'

export default function MenuItem({label, onClick, align, dark}) {

  return (
    /*
    <div style={{
        color: dark ? theme.customColors.azulDark : undefined,
        padding: 10,
        margin: 10,
        maxWidth: 170,
        display: 'flex',
        justifyContent:  align ?? 'center',
        alignItems: 'center',
        flex: 1,
        fontSize: 20,
        cursor: 'pointer',
        fontFamily: 'Quicksand, courier, sans-serif',
    }} onClick={onClick} >
        {label}
    </div>
    */
    <Button onClick={onClick} style={{
      padding: 10,
      margin: 10,
      maxWidth: 170,
      display: 'flex',
      textAlign: align ?? 'center',
      justifyContent:  align ?? 'center',
      alignItems: 'center',
      flex: 1,
      fontSize: 20,
    }}>
        {label}
    </Button>
  )
}
