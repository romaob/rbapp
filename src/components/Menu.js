import { Box, Fade, IconButton } from '@mui/material'
import React from 'react'
import routes from '../values/routes'
import DrawerMenu from './DrawerMenu'
import MenuItem from './MenuItem'
import MenuIcon from '@mui/icons-material/Menu';
import * as Scroll from 'react-scroll';
import { useNavigate } from "react-router-dom";
import theme from '../values/theme'
import { isMarried } from '../values'

const scroll = Scroll.animateScroll;
const married = isMarried();

function MiniMenuToggle({toggleMenu, dark}) {
  return (
    <IconButton
      style={{
        borderRadius: 100,
      }}
      color="inherit"
      aria-label="Menu"
      edge="start"
      onClick={toggleMenu}
      sx={{ mr: 2, display: { md: 'none' } }}
    >
      <MenuIcon color={dark ? 'primary' : 'secondary'} sx={{ fontSize: 36 }}/>
    </IconButton>
  )
}

export function Items({style, onSelect, align, dark}) {
  return (
    <div style={style}>
        <MenuItem label={'Início'} onClick={() => {scroll.scrollToTop(); onSelect()}} align={align} dark={dark}/>
        <MenuItem label={'História'} linkTo={routes.ABOUT} onClick={onSelect} align={align} dark={dark}/>
        {!married && 
          <MenuItem label={'O Evento'}  linkTo={routes.EVENT} onClick={onSelect} align={align} dark={dark}/>
        }
        {!married &&
          <MenuItem label={'Lista de presentes'}  linkTo={routes.GIFTS} onClick={onSelect} align={align} dark={dark}/>
        }
        <MenuItem label={'Galeria'}  linkTo={routes.GALLERY} onClick={onSelect} align={align} dark={dark}/>
        <MenuItem label={'Contato'}  onClick={() => {scroll.scrollToBottom(); onSelect()}} align={align} dark={dark}/>
    </div>
  )
}

export default function Menu() {
  const navigate = useNavigate();
  const [showDrawer, setShowDrawer] = React.useState(false);
  const [showMenuBar, setShowMenuBar] = React.useState(false);

  function onScrollChange(e) {
    if (window.scrollY >= window.innerHeight) {
      setShowMenuBar(true);
    } else {
      setShowMenuBar(false);
    }
  }

  React.useEffect(() => {
    window.addEventListener('scroll', onScrollChange);
    return () => window.removeEventListener('scroll', onScrollChange);
  }, [])

  return (
    <div style={{
        minHeight: 0, 
        width: '100%',
      }}>
        {!showMenuBar &&
          <Fade in={!showMenuBar} timeout={1000}>
            <div>
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                paddingLeft: 20,
              }}>
                <MiniMenuToggle toggleMenu={() => setShowDrawer(!showDrawer)} dark={showMenuBar} />
              </div>
              <Box sx={{ display: { xs: 'none', md: 'block' } }} 
                style={{
                  paddingLeft: 20, 
                  paddingRight: 20,
                }}>
                <Items dark={!showMenuBar} style={{
                  display: 'flex', 
                }} onSelect={navigate}/>
              </Box>
            </div>
          </Fade>
        }
        
          <Fade in={showMenuBar} timeout={500}>
            <div
              style={{
                display: 'flex',
                width: '100%',
                paddingLeft: 20, 
                paddingRight: 20,
                backgroundColor: theme.customColors.background,
                borderBottom: '1px solid #CCC',
                boxShadow: '0px 4px 4px rgba(0,0,0,0.1)',
                position: 'fixed',
                alignItems: 'flex-start',
                zIndex: 100,
                top: 0,
                left: 0,
              }}>
                <MiniMenuToggle toggleMenu={() => setShowDrawer(!showDrawer)} dark={showMenuBar} />
                <Box sx={{ display: { xs: 'none', md: 'block' } }} >
                  <Items dark={!showMenuBar} style={{
                    display: 'flex', 
                  }} onSelect={navigate}/>
                </Box>
            </div>
          </Fade>
        

        <DrawerMenu onClose={() => setShowDrawer(false)} visible={showDrawer} navigate={() => setShowDrawer(false)} />
    </div>
  )
}
