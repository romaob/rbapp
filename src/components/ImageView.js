import { Button, Fade } from '@mui/material'
import React from 'react'
import theme from '../values/theme'

export default function ImageView({visible, onClose, image, onNext, onPrevious}) {
    const [show, setShow] = React.useState(true);

    function imageChange(handler){
        setShow(false);
        setTimeout(() => {
            setShow(true);
            handler();
        }, 500);
    }

    React.useEffect(() => {
      
    }, [image])

  return (
    <div style={{...styles.container, display: visible ? 'flex' : 'none'}}>
        <div style={styles.content}>
            <Button style={styles.buttonClose} onClick={onClose}> 
                X
            </Button>
            <Fade in={show} timeout={500}>
                <div style={styles.imageContainer}>
                    <Button style={styles.prevButton} onClick={() => imageChange(onPrevious)}> 
                        {'<'}
                    </Button>
                    <img alt={'img'} src={image} style={styles.image}/>           
                    <Button style={styles.nextButton} onClick={() => imageChange(onNext)}> 
                        {'>'}
                    </Button>
                </div>
            </Fade>
        </div>
    </div>
  )
}

const styles = {
    container: {
        zIndex: 101,
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.8)',
        display: 'flex',
        padding: 10,
    },
    content: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonClose: {
        fontSize: 25,
        position: 'absolute',
        top: 10,
        right: 10,
        zIndex: 102,
        color: theme.customColors.textContrast,
    },
    imageContainer: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        maxWidth: '100%',
        maxHeight: '100%',
    },
    nextButton: {
        fontSize: 32,
        position: 'absolute',
        right: 10,
        top: '45%',
        zIndex: 102,
        color: theme.customColors.textContrast,
    },
    prevButton: {
        fontSize: 32,
        position: 'absolute',
        left: 10,
        top: '45%',
        zIndex: 102,
        color: theme.customColors.textContrast,
    },
}
