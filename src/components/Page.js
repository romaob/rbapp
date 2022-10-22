import React from 'react';
import Menu from './Menu';

//import headerBg1 from '../images/testimages/torre.jpeg'
import Logo from './Logo';
import theme from '../values/theme';
import { Typography } from '@mui/material';

import { motion } from 'framer-motion';
import strings from '../values/strings';
import values from '../values';

const headerBg1 = 'https://iso.500px.com/wp-content/uploads/2014/07/big-one.jpg';

function HeaderFull(props) {
    return (
        <div style={styles.header_full}>
            <div style={styles.header_full_image}>
                <p style={{
                    fontSize: 22, 
                    fontFamily: 'Quicksand', 
                    color: theme.customColors.azulDark
                }}>{strings.date_plain}</p>
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
                //boxShadow: '0 -10px 50px -5px rgba(0,0,0,0.7)'
            }}>
                <div style={styles.content}>
                    {children}             
                </div>
            </div>

            <div style={styles.footer}>
                <img alt='' src={require('../images/art/rb-logo-white.png')} style={{width: 128}} />
                <Typography color="whitesmoke" style={{fontSize: 18, fontFamily: values.fonts.primary}}>{strings.date_plain}</Typography>
                <Typography color="whitesmoke" style={{fontSize: 12, fontFamily: values.fonts.primary}}>Desenhado pelo noivo</Typography>
            </div>            
        </motion.div>
    );
}

const styles = {
    main: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
    },    
    header_full: {
        height: '60%',
        minHeight: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        //backgroundColor: '#000',
    },    
    header_full_image: {
        //backgroundColor: theme.customColors.backgroundContrast,
        //backgroundImage: `url(${headerBg1})`, 
        height: '100%', 
        width: '100%', 
        backgroundPosition: 'center 30%', 
        backgroundRepeat: 'no-repeat', 
        backgroundSize: 'cover',
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end'
    },
    header: {
    },
    content: {
        flex: 1,
        display: 'flex',
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