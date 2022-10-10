import React from 'react';
import Menu from './Menu';

import headerBg1 from '../images/testimages/torre.jpeg'
import Logo from './Logo';
import theme from '../values/theme';
import { Typography } from '@mui/material';

import { motion } from 'framer-motion';

function HeaderFull(props) {
    return (
        <div style={styles.header_full}>
            <div style={styles.header_full_image}>
                <Logo />
                <Menu />
            </div>
        </div>
    )
}

function Header(props) {
    return (
        <div style={styles.header}>
            <div style={styles.header_full_image}>
                <Logo small/>
                <Menu />
            </div>
        </div>
    )
}

function Page({fullHeader, children}) {
    return (
        <motion.div 
            style={styles.main} 
            initial={{width: 0}}
            animate={{width: "100%"}}
            exit={{width: 0, transition: {duration: 0.2}}}
        >
            
            {fullHeader && <HeaderFull />}
            {!fullHeader && <Header />}
            
            <div style={{ 
                flex: 1, 
                display: 'flex', 
                justifyContent: 'center',
                boxShadow: '0 -10px 50px -5px rgba(0,0,0,0.7)'
            }}>
                <div style={styles.content}>
                    {children}             
                </div>
            </div>

            <div style={styles.footer}>
                <Typography color="whitesmoke" variant='h5'>Romão & Brunna</Typography>
                <Typography color="whitesmoke">06 de Maio de 2023</Typography>
            </div>            
        </motion.div>
    );
}

const styles = {
    main: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
    },    
    header_full: {
        height: '60%',
        minHeight: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
    },    
    header_full_image: {
        backgroundColor: theme.customColors.backgroundContrast,
       //backgroundImage: `url(${headerBg1})`, 
        height: '100%', 
        width: '100%', 
        backgroundPosition: 'center', 
        backgroundRepeat: 'no-repeat', 
        backgroundSize: 'cover',
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end'
    },
    header: {
        minHeight: '10%',
    },
    content: {
        padding: 20,
        width: '100%',
        maxWidth: 1024,
    },
    footer: {
        backgroundColor: theme.customColors.backgroundContrast,
        padding: 10,
    }
}

export default Page;