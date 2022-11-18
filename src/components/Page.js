import React from 'react';
import Menu from './Menu';

import Logo from './Logo';
import theme from '../values/theme';
import { Paper, Typography } from '@mui/material';

import { motion } from 'framer-motion';
import strings from '../values/strings';
import values from '../values';

export function Title({children}) {
    return (
        <Typography 
            style={{
                //textShadow: '0 3px 3px rgba(0,0,0,0.2)',
                fontweight: 'bold',
                marginBottom: 30,
                textAlign: 'Left',
            }}
            variant='h4' 
            color='secondary'
            >
            {children}
        </Typography>
    )
}

export function TopicTitle({children, textAlign}) {
    return (
        <Typography
            style={{
                fontweight: 'bold',
                paddingTop: 10,
                paddingBottom: 10,
            }}
            variant='h5'
            textAlign={textAlign}
            fontWeight={700}
            color={theme.customColors.textMain}>
            {children}
        </Typography>
    )
}
 
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

function Page({fullHeader, children, title}) {
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
                        <Paper style={{padding: 15}}>
                            {title && <Title>{title}</Title>}
                            {children}      
                        </Paper>       
                    </div>
            </div>

            <div style={styles.footer}>
                <div style={{
                    width: '100%',
                    borderBottom: '2px solid', 
                    borderColor: theme.customColors.azulDark,
                    marginBottom: 20,
                }}></div>
                <img alt='' src={require('../images/art/rb-logo-blue.png')} style={{width: 148}} />
                <Typography style={{fontSize: 18, fontFamily: values.fonts.primary, color: theme.customColors.azulDark}}>{strings.date_plain}</Typography>
                <Typography style={{fontSize: 12, fontFamily: values.fonts.primary,  color: theme.customColors.azulDark}}>Desenhado pelo noivo</Typography>
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
        marginBottom: 30,
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
        display: 'flex',
    },
    content: {
        flex: 1,
        display: 'flex',
        padding: 20,
        width: '100%',
        maxWidth: 1024,
        flexDirection: 'column',
    },
    footer: {
        //backgroundColor: theme.customColors.backgroundContrast,
        padding: 20,
    }
}

export default Page;