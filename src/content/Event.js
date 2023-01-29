import { Button, Typography } from '@mui/material'
import React from 'react'
import values from '../values'
import theme from '../values/theme'

export default function Event() {
  return (
    <div style={styles.container}>
      <Typography fontSize={theme.sizes.small}>
        A recepção dos convidados será a partir das 17:00h
      </Typography>
      <Typography fontSize={theme.sizes.small}>Saibam como chegar:</Typography>
      <Typography style={{marginTop: 15}}>{"Chácara Allan’De - Eventos"}</Typography>
      <div style={styles.mapholder}>
        <iframe 
          style={{
            border: 0,
          }}
          title='map'
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6998.04244051223!2d-52.0649909841508!3d-23.367169418975166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ed2bda5f8e81c3%3A0x60699cbd39d67dd9!2sCh%C3%A1cara%20Allan%E2%80%99De%20Eventos%20%26%20Lazer!5e0!3m2!1sen!2sbr!4v1671026232067!5m2!1sen!2sbr" 
          width="100%" 
          height="100%" 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
      <div style={{
        padding: 10,
      }}>
        <Button href={values.locationURL} target='_blank'>Abrir localização ➤</Button>
      </div>
    </div>
  )
}

const styles = {
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mapholder: {
    width: '90%',
    height: '350px',
    borderWidth: '1px',
    borderColor: '#CCC',
    borderStyle: 'solid',
    marginTop: 20,
  },
}