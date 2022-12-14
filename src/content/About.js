import { Typography } from '@mui/material'
import React from 'react'
import theme from '../values/theme'

export default function About() {
  return (
    <div style={styles.container}>
        <Typography>
            Estamos convidando você para celebrar nosso casamento.
        </Typography>
        {/* Profiles */}
        <div style={styles.profiles}>
            <div style={styles.profile}>
                <div style={{
                    ...styles.profileImage,
                    //backgroundImage: 'url(https://i.imgur.com/1Z1Z1Z1.jpg)',
                }}></div>
                <Typography
                    fontSize={theme.sizes.subtitle}
                >
                    Romão Felipe
                </Typography>
            </div>

            <img alt='heart' style={styles.heart} src={require('../images/art/heart-rose.png')}/>
            
            <div style={styles.profile}>
                <div style={{
                    ...styles.profileImage,
                    //backgroundImage: 'url(https://i.imgur.com/1Z1Z1Z1.jpg)',
                }}></div>
                <Typography
                    fontSize={theme.sizes.subtitle}
                >
                    Brunna Nicolly
                </Typography>
            </div>
        </div>
    </div>
  )
}

const styles = {
    container: {

    },
    profiles: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        paddingTop: 40,
        paddingBottom: 40,
    },
    profile: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 30,
        marginRight: 30,
    },
    profileImage: {
        width: 200,
        height: 200,
        borderRadius: 100,
        backgroundColor: '#CCC',
        backgroundSize: 'cover',
        backgroundPosition: 'center',                    
    },
    heart: {
        width: 40,
        marginTop: 30,
        marginBottom: 30,
        marginLeft: 75,
        marginRight: 75,
    },
}