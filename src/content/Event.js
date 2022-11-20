import { Button, Typography } from '@mui/material'
import React from 'react'
import values from '../values'
import theme from '../values/theme'

export default function Event() {
  return (
    <div style={styles.container}>
      <Typography fontSize={theme.sizes.small}>
        A recepção dos convidados será a partir das 16:30.
      </Typography>
      <Typography fontSize={theme.sizes.small}>Saiba como chegar:</Typography>
      <div style={styles.mapholder}>
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
      <div>
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
  },
  mapholder: {
    width: '100%',
    height: '350px',
    borderWidth: '1px',
    borderColor: '#CCC',
    borderStyle: 'solid',
    marginTop: 20,
  },
}
