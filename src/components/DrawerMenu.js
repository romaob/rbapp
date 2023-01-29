import React from 'react'

import Drawer from '@mui/material/Drawer';
import { Items } from './Menu';

export default function DrawerMenu({visible, onClose, navigate}) {

  return (
    <Drawer
      anchor='left'
      open={visible}
      onClose={onClose}
    >
      <Items onSelect={navigate} align='left'
        style={{
          display: 'flex', 
          flexDirection: 'column',
          minWidth: 200,
        }}/>
    </Drawer>
  )
}
