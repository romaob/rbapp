import { Button, Typography } from '@mui/material'
import React from 'react'
import Link from 'react-scroll/modules/components/Link'

import theme from '../values/theme'

export default function MenuItem({label, onClick, align, dark, linkTo}) {

  return (
    <Link activeClass='active' to={linkTo} smooth offset={-50} duration={500}>
      <Button onClick={onClick} color={(dark ? 'secondary' : 'primary')} style={{
        padding: 10,
        margin: 10,
        maxWidth: 170,
        display: 'flex',
        textAlign: align ?? 'center',
        justifyContent:  align ?? 'center',
        alignItems: 'center',
        fontSize: 16,
        textshadow: '0px 4px 4px rgba(0,0,0,0.4)',
      }}>
          {label}
      </Button>
    </Link>
  )
}
