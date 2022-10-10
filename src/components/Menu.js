import { Box, IconButton } from '@mui/material'
import React from 'react'
import routes from '../values/routes'
import DrawerMenu from './DrawerMenu'
import MenuItem from './MenuItem'
import MenuIcon from '@mui/icons-material/Menu';
import { useHistory, useNavigate } from "react-router-dom";

function MiniMenuToggle({toggleMenu}) {
  return (
    <IconButton
      style={{position: 'absolute', top: 5, left: 20}}
      color="inherit"
      aria-label="Menu"
      edge="start"
      onClick={toggleMenu}
      sx={{ mr: 2, display: { md: 'none' } }}
    >
      <MenuIcon color='secondary' sx={{ fontSize: 36 }}/>
    </IconButton>
  )
}

export function Items({style, onSelect, align, dark}) {
  return (
    <div style={style}>
        <MenuItem label={'Home'} onClick={() => onSelect(routes.HOME)} align={align} dark={dark}/>
        <MenuItem label={'Os Noivos'} onClick={() => onSelect(routes.ABOUT)} align={align} dark={dark}/>
        <MenuItem label={'O Evento'}  onClick={() => onSelect(routes.EVENT)} align={align} dark={dark}/>
        <MenuItem label={'Confirmar Presença'}  onClick={() => onSelect(routes.CONFIRMATION)} align={align} dark={dark}/>
        <MenuItem label={'Lista de Presentes'}  onClick={() => onSelect(routes.GIFTS_LIST)} align={align}dark={dark}/>
        <MenuItem label={'Recados'}  onClick={() => onSelect(routes.BLOG)} align={align} dark={dark}/>
    </div>
  )
}

export default function Menu() {
  const navigate = useNavigate();
  const [showDrawer, setShowDrawer] = React.useState(false);

  return (
    <div style={{minHeight: 0}}>
        {!showDrawer &&
          <MiniMenuToggle toggleMenu={() => setShowDrawer(!showDrawer)}/>
        }
        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
          <Items dark style={{display: 'flex', alignContent: 'center', justifyContent: 'center', }} onSelect={navigate}/>
        </Box>
        <DrawerMenu onClose={() => setShowDrawer(false)} visible={showDrawer} navigate={navigate} />
    </div>
  )
}
