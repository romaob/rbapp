import { ArrowBackSharp, FileCopySharp } from '@mui/icons-material'
import { Button, Checkbox, Fade, FormControlLabel, FormGroup, IconButton, Paper, Slider, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { pixPayload } from '../utils/pix/pixPayload'
import copy from "copy-to-clipboard";  

import values from '../values'
import theme from '../values/theme'
import ApiFetch from '../utils/ApiFetch';

const PIX_INFO = {
    chave: '49b951ee-741c-4933-9496-81a74e9f08e5',
    recebedor: 'Brunna Nicolly',
    cidade: 'Campo Mourao',
    identificador: 'Casamento',
    mensagem: 'Presente de casamento Romao e Brunna',
    cep: '87305225'
}    

const MIN_VALUE = 50;

export default function 
GiftModal({visible, record, onClose}) {
    const [gift, setGift] = useState(record?.fields || {})
    const [reserved, setReserved] = useState([]);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [val, setVal] = useState(0);
    const [selectedVal, setSelectedVal] = useState(1);
    const [confirmation, setConfirmation] = useState(false);
    const [method, setMethod] = useState(null);
    const [completed, setCompleted] = useState(false);

    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [phone, setPhone] = useState(null);

    const [editing, setEditing] = useState(null); 
    const [giftSend, setGiftSend] = useState({...gift}) 

    const [pix, setPix] = useState('');


  useEffect(() => {
    if (!record) return;
    const gift = record?.fields || {};
    console.log(gift);
    setGift(gift);
    //Calculate the total amount remaining to be reserved
    let tot = gift.price > 0 ? gift.price : 999999999;
    if(gift.reserved){
        const reserv = JSON.parse(gift.reserved);
        reserv.forEach(element => {
            tot -= element.amount;
            }
        );
    }
    setVal(tot);
    setSelectedVal(gift.price > 0 ? tot : 50);
    setGiftSend({...gift});
    if (gift.price < 0) {
        setMethod('pix');
    }
  }, [record])

  useEffect(() => {
    if (!gift) return;
    try {
        const reserv = JSON.parse(gift.reserved || []);
        setReserved(reserv);        
    } catch (error) {}        
  }, [gift])

  useEffect(() => {
    if(selectedVal <= 0) return;
    let params = {
        chave: PIX_INFO.chave,
        recebedor: PIX_INFO.recebedor,
        cidade: PIX_INFO.cidade,
        valor: selectedVal,
        identificador: PIX_INFO.identificador,
        mensagem: PIX_INFO.mensagem,
        cep: PIX_INFO.cep,
    }
    const pixKey = pixPayload(params);
    if(!pixKey) return;
    setPix(pixKey);
    }, [selectedVal])

  function handleInputChange(e) {
    setSelectedVal(e.target.value === '' ? '' : Number(e.target.value));
  }

  function handleSliderChange(e, val) {
    setSelectedVal(val);    
  }

  function complete(){
    setLoading(true);
    setError(false);
    const reservation = {
        name,
        email,
        phone,
        amount: selectedVal,
        method,
    }

    const reserv = [...reserved, reservation];
    console.log('reserv', reserv);
    const reached = gift.price > 0 && reserv.reduce((a, b) => a + b.amount, 0) >= gift.price;
    console.log('reached', reached);
    const sendGift = {
        records: [
            {
                id: record.id,
                fields: {
                    reserved: JSON.stringify(reserv),
                    reached: reached,
                }
            }
        ]
    }

    ApiFetch(`/Gifts`, {
        method: 'PATCH',
        body: JSON.stringify(sendGift)
    }).then(res => {
        if (res.status === 200) {
            setCompleted(true);            
        } else {
            setError(true);
        }
        setLoading(false);
    }).catch(err => {
        setError(true);
    }).finally(() => {
        setReserved([]);
        setLoading(false);
    });
    setCompleted(true);
  }

  function handleMethodChange(e, method) {
    if (gift.price < 0) return;
    if (e.target.checked) setMethod(method);
    else setMethod(null);
  }

  function handleClose(refetch) {
    setConfirmation(false);
    setCompleted(false);
    setMethod(null);
    setError(false);
    setLoading(false);

    setEditing(null);
    setGiftSend({});

    setGift({});
    setReserved([]);

    onClose(refetch);
  }

  function saveAndClose() {
    if (!values.GIFTS_EDITABLE) return handleClose();
    giftSend.price = parseFloat(giftSend.price);
    //Fetch updating
    ApiFetch(`/gifts/${gift.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(giftSend)
    }).then(res => {
        if (res.status === 200) {
            handleClose(true);
        } else {
            setError(true);
        }
    }).catch(err => {
        setError(true);
    }).finally(() => {
        setLoading(false);
        handleClose();
    });
  }    

  function removeAndClose(){
    if (!values.GIFTS_EDITABLE) return handleClose();
    //Fetch updating
    fetch(`${values.api}/gifts/${gift.id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
    }).then(res => {
        if (res.status === 200) {
            handleClose(true);
        } else {
            setError(true);
        }
    }).catch(err => {
        setError(true);
    }).finally(() => {
        setLoading(false);
        handleClose();
    });
  }

  function handleGiftUpdate({key, value}) {
    if (!values.GIFTS_EDITABLE) return;
    setEditing({
        key,
        value,
    })
    }

  function formValid() {
    return (
        selectedVal > 0 && 
        selectedVal <= val && 
        method &&
        name &&
        phone
    );
  }

  function copyTransactionKey() {
    copy(pix)
  }

  function copyPixKey() {
    copy(PIX_INFO.chave)
  }

  return (
    <>
        {visible &&
            <Fade in={visible} timeout={1000} >
                <div style={styles.container}>
                    <div style={styles.disableArea} onClick={() => handleClose()}></div>
                    <Paper style={styles.modal}>
                        {editing ? (
                            <>
                                <TextField value={editing.value || ''} onChange={e => setEditing({...editing, value: e.target.value})} />
                                <Button onClick={() => {
                                    setGiftSend({
                                        ...giftSend,
                                        [editing.key]: editing.value,
                                    })
                                    setEditing(null)                                    
                                }}>OK</Button>
                            </>
                        ) : (
                            <>
                            {loading && (
                                <div style={styles.loadingContainer}>
                                    <Typography style={styles.loadingText}>Reservando...</Typography>
                                </div>
                            )}
                            {error && !loading && (
                                <div style={styles.errorContainer}>
                                    <Typography>Ocorreu um erro ao reservar o presente!</Typography>
                                    <Typography>Tente novamente mais tarde.</Typography>
                                    <Button onClick={() => handleClose()} style={styles.button}>Fechar</Button>
                                </div>
                            )}
                            {!confirmation && !loading && !error &&
                                <>
                                    <div style={styles.modalContent}>
                                        <div style={styles.modalBase}>
                                            <img src={giftSend.imageURL} alt={`gift-${gift.name}`} style={styles.giftImage} onClick={() => handleGiftUpdate({key: 'imageURL', value: giftSend.imageURL})} />
                                            <div style={styles.baseInfo}>
                                                    <Typography style={styles.giftTitle} onClick={() => handleGiftUpdate({key: 'name', value: giftSend.name})}>{giftSend.name}</Typography>
                                                    {gift.price > 0 && 
                                                        <Typography style={styles.giftPrice} onClick={() => handleGiftUpdate({key: 'price', value: giftSend.price})}>R$ {giftSend.price}</Typography>
                                                    }
                                                    {gift.price > MIN_VALUE && (
                                                        <div style={styles.percContainer}>
                                                            <div style={{
                                                                ...styles.percBar,
                                                                width: `${(gift.price - val) * 100 / gift.price}%`,
                                                            }}></div>
                                                            <Typography style={styles.percText}>{`${Math.floor((gift.price - val) * 100 / gift.price)}%`}</Typography>
                                                        </div>
                                                    )}
                                                    {val < gift.price && gift.price > 0 &&(
                                                        <Typography>Faltam apenas R$ {val}</Typography>
                                                    )}
                                                    {val === gift.price && gift.price > 0 &&(
                                                        <Typography>{gift.price <= MIN_VALUE ? 'Item Disponível!' : 'Seja o primeiro a presentear!'}</Typography>
                                                    )}
                                            </div>
                                        </div>
                                    </div>
                                    {(gift.price > MIN_VALUE || gift.price < 0) && (
                                        <div style={styles.selectorContainer}>
                                            <Typography style={styles.selectorTitle}>Quanto quer presentear?</Typography>  
                                            {gift.price > 0 && 
                                                <Slider 
                                                    value={typeof selectedVal === 'number' ? selectedVal : 0}
                                                    valueLabelDisplay="auto"
                                                    max={val <= 0 ? 1000 : val}                  
                                                    onChange={handleSliderChange}                                    
                                                    aria-labelledby="input-slider"     
                                                    min={1}                                          
                                                />
                                            }
                                            <TextField 
                                                value={selectedVal ?? '0'}
                                                onChange={handleInputChange}
                                                type="number"
                                            />
                                        </div>
                                    )}
                                    {values.GIFTS_EDITABLE && (
                                        <div style={styles.menu}>
                                             <Button style={styles.btnCancel} onClick={removeAndClose} variant={'contained'} color='error'>Remover</Button>
                                            <Button style={styles.btnCancel} onClick={saveAndClose} variant={'contained'} color='success'>Salvar</Button>
                                        </div> 
                                    )}
                                    <div style={styles.menu}>
                                        <Button style={styles.btnCancel} onClick={() => onClose()} variant={'outlined'}>Cancelar</Button>                                        
                                        <Button style={styles.btnConfirm} variant={'contained'} color={'primary'} onClick={() => setConfirmation(true)}>Continuar</Button>
                                    </div>
                                </>
                            }
                            {confirmation && !loading && !error &&
                                <>
                                    <Typography color={'primary'} fontSize={theme.sizes.subtitle}>
                                        { !completed ? 'Confirmar presente' : 'Finalizado!' }
                                    </Typography>

                                    {!completed && (
                                        <div style={styles.confirmateContent}>
                                            <Typography>R$ {selectedVal} de {gift.name}</Typography>
                                            <FormGroup>
                                                <TextField style={styles.input} label={'Nome'} value={name || ''} onChange={(e) => setName(e.target.value)} />
                                                <TextField style={styles.input} label={'Telefone'} value={phone || ''} onChange={(e) => setPhone(e.target.value)} />
                                                <TextField style={styles.input} label={'E-mail'} value={email || ''} onChange={(e) => setEmail(e.target.value)} />    
                                                <Typography style={{marginBottom: 15}}>Como você gotaria de entregar o presente?</Typography>
                                                <div style={{textAlign: 'left', flexDirection: 'column', display: 'flex'}}>
                                                    {(!method || method === 'pix') && <FormControlLabel control={<Checkbox onChange={(e) => handleMethodChange(e, 'pix')} checked={method === 'pix'}/>} label="Presentear o valor por PIX" /> }
                                                    {/*{(!method || method === 'inperson') && <FormControlLabel control={<Checkbox onChange={(e) => handleMethodChange(e, 'inperson')} checked={method === 'inperson'} />} label="Entregar o valor pessoalmente" /> }*/}
                                                    {(!method || method === 'parc') && <FormControlLabel control={<Checkbox onChange={(e) => handleMethodChange(e, 'parc')} checked={method === 'parc'}/>} label="Parcelar o valor (entre em contato)" /> }
                                                    {(!method || method === 'other') && <FormControlLabel control={<Checkbox onChange={(e) => handleMethodChange(e, 'other')} checked={method === 'other'}/>} label="Outro" /> }

                                                </div>
                                            </FormGroup>
                                        </div>
                                    )}

                                    {method === 'pix' && (
                                        <Fade in={true} timeout={500}>
                                            <div style={styles.pixContainer}>
                                                <TextField style={styles.disabledFields} value={pix || ''}/>
                                                <Button onClick={copyTransactionKey} style={styles.btnCopy} variant='contained'>
                                                    <Typography>Pix copia e cola</Typography>  
                                                    <FileCopySharp style={{marginLeft: 10}}/>
                                                </Button>  
                                                <TextField multiline style={styles.disabledFields} value={PIX_INFO.chave || ''} textAlign='center'/>
                                                <Button onClick={copyPixKey} style={styles.btnCopy} variant='contained'>
                                                    <Typography>Chave Pix</Typography>  
                                                    <FileCopySharp style={{marginLeft: 10}}/>
                                                </Button>  
                                            </div>
                                        </Fade>
                                    )}
                                    
                                    {!completed && (
                                        <div style={styles.menu}>
                                            <IconButton onClick={() => setConfirmation(false)} style={styles.btnBack}>
                                                <ArrowBackSharp color={'primary'}/>
                                            </IconButton>
                                            <Button onClick={complete} disabled={!formValid()}>Reservar</Button>                                    
                                        </div>
                                    )}
                                    {completed && (
                                        <>
                                            <Typography>Muito obrigado pelo seu presente.</Typography>
                                            <Button style={styles.button} onClick={() => handleClose(true)}>Fechar</Button>
                                        </>
                                    )}
                                </>
                            }
                            </>
                        )}
                    </Paper>
                </div>
            </Fade>
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
        backgroundColor: 'rgba(0,0,0,0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 100,
        flexDirection: 'column',
        padding: 20,
    },
    modal: {
        width: '100%',
        maxWidth: 600,
        padding: 20,
        zIndex: 2,
        overflowY: 'auto',
        overflowX: 'hidden',
    },
    disableArea: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        opacity: 0.5,
        zIndex: 1
    },
    btnClose: {
    },
    modalContent: {
        display: 'flex',
        flexDirection: 'column',
    },
    modalBase: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    giftImage: {
        flex: 1,
        minWidth: 200,
        height: 200,
        objectFit: 'contain',
    },
    baseInfo: {
        display: 'flex',
        flexDirection: 'column',
        marginLeft: 20,
        justifyContent: 'center',
    },
    giftTitle: {
        fontWeight: 'bold',
        fontSize: theme.sizes.subtitle,
    },
    giftPrice: {
        fontWeight: 'bold',
        fontSize: theme.sizes.subtitle,
    },
    percContainer: {
        width: '100%',
        height: 15,
        backgroundColor: '#ccc',
        borderRadius: 10,
        marginTop: 20,
        marginBottom: 10,
        position: 'relative',
    },
    percBar: {
        height: '100%',
        backgroundColor: theme.customColors.rose,
        borderRadius: 10,
    },
    percText: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#000',
        fontSize: 15,
    },
    selectorContainer: {
        marginTop: 20,
    },
    selectorTitle: {
        fontWeight: 'bold',
        fontSize: theme.sizes.subtitle,
    },
    menu: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        marginTop: 20,
        justifyContent: 'space-between',
    },
    methodsMenu: {
        display: 'flex',
        flexDirection: 'column',
    },
    pixContainer: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: 20,
    },
    input: {
        margin: 10,
    },
    loadingContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: 300,
    },
    button: {
        marginTop: 20,
    },
    keyContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5,
        backgroundColor: theme.customColors.azulDark,
        borderRadius: 10,
        padding: 5,
        color: theme.customColors.textContrast,
    },
    btnCopy: {
        marginTop: 10,
    },
    disabledFields: {
        backgroundColor: '#ccc',
        marginTop: 10,
        textAlign: 'center',
    },
}