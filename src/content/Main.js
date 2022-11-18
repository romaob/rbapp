import { Typography } from '@mui/material'
import React from 'react'
import Logo from '../components/Logo'
import Construction from './Construction'
import Section from '../components/Section'
import Top from './Top'
import About from './About'
import Date from './Date'
import Event from './Event'
import Story from './Story'
import Numbers from './Numbers'
import Gallery from './Gallery'
import Bottom from './Bottom'

//* Making itens fade in as they scroll into view
//* Add fixed menu and drawer menu

export default function Main() {
  return (
    <div style={{
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    }}>    
        <Top />
        <Section title={'Olá!'}>
          <About />
        </Section>
        <Section dark title={'O grade dia'}>
          <Date />
        </Section>
        <Section title={'A nossa história'}>
          <Story />
        </Section>
        <Section dark>
          <Numbers />
        </Section>
        <Section title={'O evento'}>
          <Event />
        </Section>
        <Section title={'Galeria'}>
          <Gallery />
        </Section>
        <Section dark>
          <Bottom />
        </Section>
    </div>
  )
}
