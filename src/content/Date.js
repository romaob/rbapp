import { Typography } from '@mui/material'
import React from 'react'
import Countdown from '../components/Countdown'
import strings from '../values/strings'
import theme from '../values/theme'

export default function Date() {
  return (
    <div style={styles.container}>
        {/* Main Date */}        
        <Typography
            style={styles.date}
            fontFamily={'Pinyon Script'}
        >
            {strings.date_dot}
        </Typography>

        <Typography style={styles.message}>
            Estamos muito animados para comemorar nosso dia especial com nossa família e amigos. Muito obrigado por visitar nosso site!
        </Typography>

        <div style={styles.countdownContainer}>
            <Typography 
                style={styles.message}
                fontFamily={'Pinyon Script'}
                fontSize={36}
            >
                Apenas mais alguns...
            </Typography>
            <div style={{marginLeft: 20, marginRight: 20}}>
                <Countdown fontColor={theme.customColors.textContrast} backgroundColor={'transparent'}/>
            </div>
            <Typography 
                style={styles.message}
                fontFamily={'Pinyon Script'}
                fontSize={36}
            >
                até nos casarmos!
            </Typography>
        </div>
    </div>
  )
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    date: {
        fontSize: '6vmax'
    },
    message: {
        margin: 15,
        maxWidth: 650,
        textAlign: 'center',
    },
    countdownContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        marginTop: 15,
        marginBottom: 15,
    },
}
