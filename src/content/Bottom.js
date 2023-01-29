import { Typography } from '@mui/material'
import React from 'react'
import values from '../values'
import theme from '../values/theme'

export default function Bottom() {
  return (
    <div>
        <img src={require('../images/art/rb-logo-white.png')} alt="logo" style={{
            width: 300,
            height: 300,
            objectFit: 'contain',
        }}/>
        <div style={styles.socialMediaContainer}>
            {/* Instagram */}
            <a href={values.instagramURL} target="_blank" rel="noreferrer">
              <img style={styles.mediaImage} src={require('../images/social-media/instagram.png')} alt="instagram" />
            </a>
            {/* Facebook */}
            <a href={values.facebookURL} target="_blank" rel="noreferrer">
              <img style={styles.mediaImage} src={require('../images/social-media/facebook.png')} alt="facebook" />
            </a>
            {/* Tiktok */}
            <a href={values.tiktokURL} target="_blank" rel="noreferrer">
              <img style={styles.mediaImage} src={require('../images/social-media/tiktok.png')} alt="tiktok" />
            </a>
        </div>
        <Typography style={styles.bottomText} fontSize={theme.sizes.small}>
          Projetado por Romão Felipe
        </Typography>
    </div>
  )
}

const styles = {
    socialMediaContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    mediaImage: {
      margin: 10,
      marginLeft: 20,
      marginRight: 20,
      width: 40,
      height: 40,
      objectFit: 'contain',
    },
    bottomText: {
      marginTop: 20,
    }
  }

