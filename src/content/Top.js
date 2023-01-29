import React from 'react'
import { isIOS } from 'react-device-detect'
import Logo from '../components/Logo'
import Menu from '../components/Menu'
import theme from '../values/theme'

//Full height TOP, with the main logo and info, and a static background
//* Still need to animate the information fading in
//* It must change to 'Just Married' after the wedding date
export default function Top({image}) {
     
  return (
    <div style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        color: theme.customColors.textContrast,
        flexDirection: 'column',
    }}>
        {/* Static Background*/}
        <div style={{
            backgroundColor: '#000',
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',   
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: isIOS ? 'unset' : 'fixed',
            top: 0,
            width: '100%',
            height: '100%',
            position: 'absolute',
            zIndex: -1,            
        }}></div>

        {/* Menu */}
        <Menu />

        {/* Top Spacer*/}
        <div style={{
            flex: 1,
        }}></div>

        {/* Top Content*/}
        <div style={{
            width: '100%',
            maxWidth: 800,
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
        }}>         
            <Logo />
        </div>
    </div>
  )
}
