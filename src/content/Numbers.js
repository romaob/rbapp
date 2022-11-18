import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

export default function Numbers() {
  return (
    <Box style={styles.container} sx={{ flexDirection: { xs: 'column', md: 'row' } }}>
        <Box style={styles.numberItem}>
            <Typography style={styles.number} fontFamily={'Pinyon Script'}>150</Typography>
            <Typography style={styles.label} fontFamily={'Pinyon Script'}>convidados</Typography>
        </Box>
        <Box style={styles.numberItem}>
            <img src={require('../images/art/infinity.png')} alt='infinity' style={styles.infinity}/>
            <Typography style={styles.label} fontFamily={'Pinyon Script'}>beijos</Typography>
        </Box>
        <Box style={styles.numberItem}>
            <Typography style={styles.number} fontFamily={'Pinyon Script'}>200</Typography>
            <Typography style={styles.label} fontFamily={'Pinyon Script'}>noites sem dormir</Typography>
        </Box>
        <Box style={styles.numberItem}>
            <Typography style={styles.number} fontFamily={'Pinyon Script'}>2500</Typography>
            <Typography style={styles.label} fontFamily={'Pinyon Script'}>dias juntos</Typography>
        </Box>
    </Box>
  )
}

const styles = {
    container: {
        width: '100%',
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
    },
    label: {
        fontSize: 26,
    },
    infinity: {
        width: 80,
        margin: 15,
    },
}
