import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import values from '../values'

export default function Numbers() {
    const [days, setDays] = useState(
        Math.floor(
            (new Date().getTime() - values.initial_date.getTime()) / 86400000
        )
    );

  return (
    <Box style={styles.container} sx={{ flexDirection: { xs: 'column', md: 'row' } }}>
        <Box style={styles.numberItem}>
            <Typography style={styles.number} fontFamily={'Pinyon Script'}>150</Typography>
            <Typography style={styles.label} fontFamily={'Pinyon Script'}>Convidados</Typography>
        </Box>
        <Box style={styles.numberItem}>
            <img src={require('../images/art/infinity.png')} alt='infinity' style={styles.infinity}/>
            <Typography style={styles.label} fontFamily={'Pinyon Script'}>Beijos</Typography>
        </Box>
        {/* 
        <Box style={styles.numberItem}>
            <Typography style={styles.number} fontFamily={'Pinyon Script'}>845</Typography>
            <Typography style={styles.label} fontFamily={'Pinyon Script'}>fotos</Typography>
        </Box>
        */}
        <Box style={styles.numberItem}>
            <Typography style={styles.number} fontFamily={'Pinyon Script'}>{days}</Typography>
            <Typography style={styles.label} fontFamily={'Pinyon Script'}>Dias juntos</Typography>
        </Box>
    </Box>
  )
}

const styles = {
    container: {
        width: '100%',
        minHeight: 350,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    numberItem: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        margin: 40,
    },
    number: {
        fontSize: 40,
        fontWeight: 'bold',
        textShadow: '0px 4px 4px rgba(0,0,0,0.4)',
    },
    label: {
        fontSize: 26,
        textShadow: '0px 4px 4px rgba(0,0,0,0.4)',
    },
    infinity: {
        width: 80,
        margin: 15,
    },
}
