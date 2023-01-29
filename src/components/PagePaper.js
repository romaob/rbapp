import { Paper, Typography } from '@mui/material'
import React from 'react'
import values from '../values'
import theme from '../values/theme'
import Divider from './Divider'

export default function PagePaper({title, children, style}) {
  return (
    <Paper style={{flex: 1, display: 'flex', flexDirection: 'column', padding: 20, alignItems: 'center', ...style}}>
        {title && 
          <>
            <Typography variant='h4' fontFamily={values.fonts.fancy}>{title}</Typography>
            <Divider />
          </>
        }
        
        <div style={{textAlign: 'left', display: 'flex', width: '100%'}}>
            {children}
        </div>
    </Paper>
  )
}
