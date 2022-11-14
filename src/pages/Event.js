import { Box, Paper, Typography } from '@mui/material'
import { borderRadius } from '@mui/system'
import React from 'react'
import Countdown from '../components/Countdown'
import Divider from '../components/Divider'
import Page, { TopicTitle } from '../components/Page'
import PagePaper from '../components/PagePaper'
import TimeEventNode, { TimeEventNodeHorizontal } from '../components/TimeEventNode'
import theme from '../values/theme'

export default function Event() {
  return (
    <Page title={'O EVENTO'}>
      <div style={{
        marginBottom: 20,
      }}>
          <TopicTitle textAlign={'left'}>
            Contagem regressiva
          </TopicTitle>
          <Countdown />     
      </div>
      
      <div style={{
        display: 'flex',
        justifyContent: 'center',
      }}>
        <Divider color={theme.customColors.rose}/>
      </div>

      <Box sx={{ display: { xs: 'block', md: 'none' } }} 
        style={{
          paddingTop: 20,
          paddingBottom: 20,
      }}>
        <TopicTitle textAlign={'left'}>Programação</TopicTitle> 
        <div style={{
          paddingTop: 20,
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
            Festa
          </TimeEventNode>
        </div>
      </Box>


      <Box sx={{ display: { xs: 'none', md: 'block' } }} 
        style={{
          paddingTop: 20,
          paddingBottom: 20,
      }}>
        <TopicTitle textAlign={'left'}>Programação</TopicTitle> 
        <div style={{
          paddingTop: 20,
          paddingBottom: 10,
          display: 'flex',
          flexDirection: 'row',
        }}>
          <TimeEventNodeHorizontal ballText={'16:30'} leftless>
            Entrada dos convidados
          </TimeEventNodeHorizontal>
          <TimeEventNodeHorizontal  ballText={'17:30'}>
            Inicio da cerimônia
          </TimeEventNodeHorizontal>
          <TimeEventNodeHorizontal ballText={'19:30'}>
            Coquetel
          </TimeEventNodeHorizontal>
          <TimeEventNodeHorizontal ballText={'21:00'}>
            Jantar
          </TimeEventNodeHorizontal>
          <TimeEventNodeHorizontal ballText={'22:30'} rightless>
            Festa
          </TimeEventNodeHorizontal>
        </div>
      </Box>

      <div style={{
        display: 'flex',
        justifyContent: 'center',
      }}>
        <Divider color={theme.customColors.rose}/>
      </div>
      <div style={{
        paddingTop: 20,
        paddingBottom: 20,
      }}>
        <TopicTitle textAlign={'left'}>Localização</TopicTitle>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}>
          <div style={{
            paddingLeft: 10,
            paddingRight: 10,
            paddingTop: 20,
            paddingBottom: 20,
          }}>
            <a href='https://instagram.com/jardins.cristal' style={{
              textDecoration: 'none',
            }}>
              <div style={{
                height: 200,
                display: 'flex',
                flexDirection: 'column',
                padding: 20,
                alignItems: 'center',
                justifyContent: 'center',
                border: '5px dashed ' + theme.customColors.rose,
                borderRadius: 10,
                backgroundColor: 'rgba(241,245,255,1)',
              }}>
                {/* 
                <img src={require('../images/art/jardins-cristal-logo.png')}
                  alt='event-center-logo'
                  style={{
                    width: 150,
                    height: 150,
                    objectFit: 'contain',
                    border: '2px solid #CCC',
                    borderRadius: 500,
                }}/>
                */}
                <Typography 
                  fontSize={36}
                  color={'secondary'}
                >
                  Jardins de Cristal
                </Typography>
                <Typography 
                  fontSize={28}
                  color={'secondary'}
                >
                    Centro de Eventos
                </Typography>
                <Typography
                  fontSize={22}
                  color={'primary'}
                >
                    Maringá - PR
                </Typography>
              </div>
            </a>
          </div>
          <div style={{
            flex: 1,
            minWidth: 300,
            height: 350,
            borderWidth: 2,
            borderColor: '#CCC',
            borderStyle: 'solid',
          }}>
            <iframe 
              style={{
                border: 0,
              }}
              title='map'
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3662.590546604509!2d-51.905051052917486!3d-23.366844280372014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc31b682d6293d110!2zMjPCsDIyJzAwLjAiUyA1McKwNTQnMTQuNiJX!5e0!3m2!1sen!2sbr!4v1668375987483!5m2!1sen!2sbr" 
              width="100%" 
              height="100%" 
              allowFullscreen="" 
              loading="lazy" 
              referrerpolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
          
        </div>
      </div> 
    </Page>
  )
}