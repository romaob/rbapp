import React from 'react';
import Menu from './Menu';

import headerBg1 from '../images/header1.jpg'
import Logo from './Logo';
import theme from '../values/theme';
import { Typography } from '@mui/material';

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
        <div style={styles.main}>
            
            {fullHeader && <HeaderFull />}
            {!fullHeader && <Header />}
            
            <div style={styles.content}>
                CONTENT
                {children}             
            </div>
            <div style={styles.footer}>
                <Typography color="whitesmoke" variant='h5'>Romão & Brunna</Typography>
                <Typography color="whitesmoke">06 de Maio de 2023</Typography>
            </div>            
        </div>
    );
}

const styles = {
    main: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
    },    
    header_full: {
        height: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
    },    
    header_full_image: {
        backgroundImage: `url(${headerBg1})`, 
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
        flex: 1,
    },
    footer: {
        backgroundColor: theme.customColors.backgroundContrast,
        padding: 10,
    }
}

export default Page;