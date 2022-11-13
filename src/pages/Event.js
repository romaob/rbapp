import { Paper, Typography } from '@mui/material'
import { borderRadius } from '@mui/system'
import React from 'react'
import Countdown from '../components/Countdown'
import Page from '../components/Page'
import PagePaper from '../components/PagePaper'
import TimeEventNode from '../components/TimeEventNode'
import theme from '../values/theme'

export default function Event() {
  return (
    <Page title={'O EVENTO'}>
        <Typography 
          fontSize={24}
          style={{
            textAlign: 'center',
        }}>
          Faltam apenas
        </Typography>
        <Countdown />     
        <Typography 
          fontSize={24}
          style={{
            textAlign: 'center',
        }}>
          para o grande dia!
        </Typography>   
        <div style={{
          paddingTop: 10,
          paddingBottom: 10,
        }}>
          <TimeEventNode ballText={'16:30'} topless>
            Entrada dos convidados
          </TimeEventNode>
          <TimeEventNode  ballText={'17:30'}>
            Inicio da cerimônia
          </TimeEventNode>
          <TimeEventNode ballText={'19:30'}>
            Coquetel
          </TimeEventNode>
          <TimeEventNode ballText={'21:00'}>
            Jantar
          </TimeEventNode>
          <TimeEventNode ballText={'22:30'} botomless>
            Inicio da festa
          </TimeEventNode>
        </div>
        <div style={{
          display: 'flex',
          backgroundColor: '#F00',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}>
          <div style={{
            flex: 1,
            minWidth: 300,
            height: 350,
            backgroundColor: '#0F0',
          }}>
            MAP
          </div>
          <div style={{
            flex: 1,
            height: 350,
            minWidth: 300,
            backgroundColor: '#00F',
          }}>
            Jardins Cristal
          </div>
        </div>
    </Page>
  )
}
