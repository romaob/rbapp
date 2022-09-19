import React from 'react';
import Menu from './Menu';

import headerBg1 from '../images/header1.jpg'

function HeaderFull(props) {
    return (
        <div style={styles.header_full}>
            <div style={styles.header_full_image}>
                <Menu />
            </div>
        </div>
    )
}

function Header(props) {
    return (
        <div style={styles.header}>
            <Menu />
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
                FOOTER
            </div>            
        </div>
    );
}

const styles = {
    main: {
        backgroundColor: '#F00', //! DELETE
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
    },    
    header_full: {
        backgroundColor: '#FF0', //! DELETE
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
        backgroundColor: '#F00', //! DELETE
        minHeight: '10%',
    },
    content: {
        backgroundColor: '#0FF', //! DELETE
        flex: 1,
    },
    footer: {
        backgroundColor: '#00F', //! DELETE
    }
}

export default Page;