import { Button, Paper, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import ApiFetch from '../utils/ApiFetch';

export default function GiftAddModal({visible, handleClose}) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [imageURL, setImageURL] = useState('');
    const [link, setLink] = useState('');
    const [category, setCategory] = useState('');

    function cancelAndClose(refetch) {
        setName('');
        setDescription('');
        setPrice('');
        setImageURL('');
        setLink('');
        setCategory('');
        setLoading(false);
        setError(null);
        handleClose(refetch);
    }

    function addGift() {

        setLoading(true);
        setError(null);
        let gift = null;
        try{
            gift = {
                name,
                description,
                price: parseFloat(price),
                imageURL,
                link,
                category
            }
        } catch (err) {
            setError('Dados invalidos');
            setLoading(false);
            return;
        }

        ApiFetch(`/gifts`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',  
            },
            body: JSON.stringify(gift)
        })
        .then(res => {
            if(res.error || res.status !== 201) {
                setError(res.error);
            }
        }).catch(err => {
            setError(err);
        }).finally(() => {
            setLoading(false);
            cancelAndClose(true);
        })
    }


  return (
    <>
        {visible &&
            <div style={styles.container}>
                <div style={styles.disableArea} onClick={() => cancelAndClose()}></div>
                <Paper elevation={3} style={styles.modal}>
                    {error && <Typography style={styles.error}>{error}</Typography>}
                    {!error &&
                        <>
                        <Typography>Adicionar Presente</Typography>
                        <TextField style={styles.input} label="Nome" value={name} onChange={(e) => setName(e.target.value)} />
                        <TextField style={styles.input} label="Descricao" value={description} onChange={(e) => setDescription(e.target.value)} />
                        <TextField style={styles.input} label="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
                        <TextField style={styles.input} label="imageURL" value={imageURL} onChange={(e) => setImageURL(e.target.value)} />
                        <TextField style={styles.input} label="url" value={link} onChange={(e) => setLink(e.target.value)} />
                        <TextField style={styles.input} label="Categoria" value={category} onChange={(e) => setCategory(e.target.value)} />
                        </>
                    }
                    <div style={styles.menu}> 
                        <Button variant="contained" onClick={() => cancelAndClose()} disabled={loading}>Cancelar</Button>
                        {!error && <Button variant="contained" onClick={() => addGift()} disabled={loading}>{loading ? 'Salvando...' : 'Salvar'}</Button>}
                    </div>
                </Paper>
            </div>
        }
    </>
  )
}

const styles = {
    container: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000
    },
    disableArea: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    modal: {
        width: '80%',
        maxWidth: 500,
        padding: 20,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        overflow: 'auto scroll',
        zIndex: 1001,
    },
    input: {
        width: '100%',
        marginBottom: 10,
    },
    menu: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        marginTop: 10,
        justifyContent: 'space-between'
    }
}