import React from 'react'

import Drawer from '@mui/material/Drawer';
import { Items } from './Menu';
import theme from '../values/theme';

export default function DrawerMenu({visible, onClose}) {

  function navigate(route){

  }
  
  return (
    <Drawer
      anchor='left'
      open={visible}
      onClose={onClose}
    >
      <Items onSelect={navigate} align='left' style={{display: 'flex', flexDirection: 'column'}}/>
    </Drawer>
  )
}
