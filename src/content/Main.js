import { Typography } from '@mui/material'
import React from 'react'
import Logo from '../components/Logo'
import Construction from './Construction'
import Section from '../components/Section'
import Menu from '../components/Menu'
import Top from './Top'
import About from './About'
import Date from './Date'
import Event from './Event'
import Story from './Story'
import Numbers from './Numbers'
import Gallery from './Gallery'
import Bottom from './Bottom'
import routes from '../values/routes'

//* Making itens fade in as they scroll into view
//* Add fixed menu and drawer menu
//* Make the page LOADING while the images are loading

//* Add real images
//* Complete implementation
//* Clean code
//* Publish

export default function Main() {
  return (
    <div style={{
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    }}>    
        <Top image={'https://html.fairytheme.studio/belle/img/header-bg.jpg'} />
        <Section title={'Olá!'} name={routes.HOME}>
          <About />
        </Section>
        <Section dark title={'O grade dia'} image={'https://html.fairytheme.studio/belle/img/header-bg.jpg'}>
          <Date />
        </Section>
        <Section title={'A nossa história'} name={routes.ABOUT}>
          <Story />
        </Section>
        <Section dark image={'https://html.fairytheme.studio/belle/img/header-bg.jpg'}>
          <Numbers />
        </Section>
        <Section title={'O evento'} name={routes.EVENT}>
          <Event />
        </Section>
        <Section title={'Galeria'}>
          <Gallery />
        </Section>
        <Section dark image={'https://html.fairytheme.studio/belle/img/header-bg.jpg'}>
          <Bottom />
        </Section>
    </div>
  )
}
