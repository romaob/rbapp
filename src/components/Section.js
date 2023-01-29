import { Fade, Typography } from '@mui/material'
import React from 'react'
import handleViewport from 'react-in-viewport';
import { Element } from 'react-scroll/modules';
import theme from '../values/theme'

//* Section of the webapp - Displaying a non mandatory title and the children
//* It uses a combination of react-in-viewport and the material-ui Fade component to fade in the content when it is in the viewport
//* The result is that the content is animated in as the user scrolls down the page
//* It also wraps the component in a Element from react-scroll to allow the user to scroll to the section by clicking on the menu

function SectionContent(props){
  const { name, title, dark, style, children, image, inViewport, forwardedRef } = props;
  return (   
    <Element name={name}>
      <Fade in={inViewport} timeout={1000}>
        <div  className="viewport-block" ref={forwardedRef} style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          marginTop: 10,
          paddingTop: 35,
          paddingBottom: 45,
          paddingLeft: 15,
          paddingRight: 15,
          backgroundColor: dark ? theme.customColors.backgroundContrast : 'transparent',
          color: dark ? theme.customColors.textContrast : theme.customColors.textMain,
          backgroundImage: image ? `url(${image})` : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          ...style,
      }}>
          {title &&
            <Typography 
              fontFamily={'Pinyon Script'} 
              fontSize={theme.sizes.title} 
              color={dark ? theme.customColors.textContrast : 'primary'}
              style={{
                textShadow: '0px 4px 4px rgba(0,0,0,0.4)',
              }}
            >
                {title}
            </Typography>
          }
          {children}
      </div>
    </Fade>
  </Element> 
  )
}

const ViewportSectionContent = handleViewport(SectionContent);

export default function Section({name, title, dark, style, children, image}) {

  return (
    <ViewportSectionContent name={name} title={title} dark={dark} style={style} image={image}>
      {children}
    </ViewportSectionContent>
  )
}