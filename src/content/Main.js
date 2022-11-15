import { Typography } from '@mui/material'
import React from 'react'
import Logo from '../components/Logo'
import Construction from './Construction'

export default function Main() {
  return (
    <div style={{
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }}>
        <Construction />
    </div>
  )
}
