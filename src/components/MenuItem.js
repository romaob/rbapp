import { Button, Typography } from '@mui/material'
import React from 'react'
import Link from 'react-scroll/modules/components/Link'

import theme from '../values/theme'

function MenuItemContent({label, onClick, align, dark, linkTo}) {
  return (
    <Button onClick={onClick} color={(dark ? 'secondary' : 'primary')} style={{
      padding: 10,
      margin: 10,
      display: 'flex',
      textAlign: align ?? 'center',
      justifyContent:  align ?? 'center',
      alignItems: 'center',
      fontSize: 16,
      textshadow: '0px 4px 4px rgba(0,0,0,0.4)',
    }}>
        {label}
    </Button>
  )
}

export default function MenuItem({label, onClick, align, dark, linkTo}) {
  return (
    <>
      {linkTo ?
        <Link activeClass='active' to={linkTo} smooth offset={-50} duration={500}>
          <MenuItemContent label={label} onClick={onClick} align={align} dark={dark} linkTo={linkTo} />
        </Link>
      :
        <MenuItemContent label={label} onClick={onClick} align={align} dark={dark} linkTo={linkTo} />
      }
    </>
  )
}
