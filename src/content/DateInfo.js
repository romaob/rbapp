import { Typography } from '@mui/material'
import React from 'react'
import Countdown from '../components/Countdown'
import { isMarried } from '../values'
import strings from '../values/strings'
import theme from '../values/theme'

export default function DateInfo() {
    const married = isMarried();
    
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
            {married ? strings.married : strings.not_married}
        </Typography>

        <div style={styles.countdownContainer}>
            <Typography 
                style={styles.message}
                fontFamily={'Pinyon Script'}
                fontSize={36}
            >
                {!married ? 'Faltam apenas...' : 'Já faz...'}
            </Typography>
                <Countdown fontColor={theme.customColors.textContrast} backgroundColor={'transparent'}/>
    
            <Typography 
                style={styles.message}
                fontFamily={'Pinyon Script'}
                fontSize={36}
            >
                {!married ? 'até nos casarmos!' : 'que nos casamos!'}
                
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
        fontSize: '6vmax',
        textShadow: '0px 4px 4px rgba(0,0,0,0.4)',
    },
    message: {
        margin: 15,
        maxWidth: 650,
        textAlign: 'center',
        marginLeft: 15,
        marginRight: 15,
        textShadow: '0px 4px 4px rgba(0,0,0,0.4)',
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
