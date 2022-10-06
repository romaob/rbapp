import { IconButton } from '@mui/material'
import React from 'react'
import routes from '../values/routes'
import DrawerMenu from './DrawerMenu'
import MenuItem from './MenuItem'
import MenuIcon from '@mui/icons-material/Menu';

function MiniMenuToggle({toggleMenu}) {
  return (
    <IconButton
      style={{position: 'absolute', top: 20, left: 20}}
      color="inherit"
      aria-label="Menu"
      edge="start"
      onClick={toggleMenu}
      sx={{ mr: 2, display: { sm: 'none' } }}
    >
      <MenuIcon color='secondary'/>
    </IconButton>
  )
}

export function Items({style, onSelect, align, dark}) {
  return (
    <div style={style}>
        <MenuItem label={'Home'} onClick={() => onSelect(routes.HOME)} align={align} dark={dark}/>
        <MenuItem label={'Os Noivos'} onClick={() => onSelect(routes.NOIVOS)} align={align} dark={dark}/>
        <MenuItem label={'O Evento'}  onClick={() => onSelect(routes.EVENTO)} align={align} dark={dark}/>
        <MenuItem label={'Confirmar Presença'}  onClick={() => onSelect(routes.CONFIRMAR_PRESENCA)} align={align} dark={dark}/>
        <MenuItem label={'Lista de Presentes'}  onClick={() => onSelect(routes.LISTA_PRESENTES)} align={align}dark={dark}/>
        <MenuItem label={'Recados'}  onClick={() => onSelect(routes.RECADOS)} align={align} dark={dark}/>
    </div>
  )
}

export default function Menu() {
  const [showDrawer, setShowDrawer] = React.useState(false);

  function navigate(route){

  }

  return (
    <div style={{}}>
        {!showDrawer &&
          <MiniMenuToggle toggleMenu={() => setShowDrawer(!showDrawer)}/>
        }
        <Items dark style={{display: 'flex', alignContent: 'center', justifyContent: 'center', }} onSelect={navigate}/>
        <DrawerMenu onClose={() => setShowDrawer(false)} visible={showDrawer}/>
    </div>
  )
}
