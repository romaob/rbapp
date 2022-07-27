import { Cancel, Check, CheckCircle, Edit } from '@mui/icons-material';
import { IconButton, TextField, Typography } from '@mui/material';
import React from 'react';
//import { writeJsonFile } from 'write-json-file';
import Strings from '../values/strings';


function Label({style, textId, text, variant, component}) {    
    const [value, setValue] = React.useState(text ?? '')    

    function getValueByID(id) {
        const value = Strings[id]
        setValue(value)
    }

    React.useEffect(() => {
        if(textId) {
            getValueByID(textId)
        }
    }, [textId])

    return (
        <div style={{
            ...styles.container,            
            ...style
        }}>
            <Typography variant={variant} component={component}>
                {value}
            </Typography>
        </div>
    );
}

const styles = {
    container: {
        backgroundColor: '#f5f5f5',
        border: '2px solid rgba(0, 0, 0, 1)'
    },
    editIcons: {
        fontSize: 15
    }
}

export default Label;