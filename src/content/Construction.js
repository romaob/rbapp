import { Typography } from '@mui/material'
import React from 'react'
import Logo from '../components/Logo'

export default function Construction() {
  return (
    <div>
        <img src={require('../images/art/rb-logo-blue.png')} alt="logo" style={{
            width: 300,
            height: 300,
            objectFit: 'contain',
        }}/>
        <Logo />
        <Typography 
            fontSize={22}
            color={'primary'}
            style={{
            marginTop: 10,
        }}>Em breve...</Typography>
    </div>
  )
}
