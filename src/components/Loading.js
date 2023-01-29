import React from 'react'

export default function Loading() {
  return (
    <div style={styles.loadingContainer}>        
        <img src={require('../images/art/rb-logo-white.png')} alt="logo" style={{
            width: 300,
            height: 300,
            objectFit: 'contain',
        }}/>
        <img src={require('../images/Infinity-white.gif')} alt="loading" style={{
            width: 75,
            objectFit: 'contain',
        }}/>
    </div>
  )
}

const styles = {
    loadingContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: 'rgb(153,172,174)',
        background: 'linear-gradient(0deg, rgba(153,172,174,1) 0%, rgba(196,190,177,1) 100%)',
    }
}
