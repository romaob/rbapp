import React from 'react';

function HeaderFull(props) {
    return (
        <div style={styles.header_full}>
            <img style={{height: '100%', width: '100%', objectFit: 'cover'}} src="images/header1.jpg" />
        </div>
    )
}

function Header(props) {
    return (
        <div style={styles.header}>
            
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
    header: {
        backgroundColor: '#FF0', //! DELETE
        height: '10%',
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