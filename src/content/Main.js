import { Typography } from '@mui/material'
import React from 'react'
import Logo from '../components/Logo'
import Construction from './Construction'
import Top from './Top'

export default function Main() {
  return (
    <div style={{
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    }}>    
        <Top />
        <Logo />
        <Logo />
        <Logo />
        <Logo />
        <Logo />
        <Logo />
        <Logo />
        <Logo />
        <Logo />
    </div>
  )
}
