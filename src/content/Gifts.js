import { Button, Card, CardActionArea, Fade, Paper, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import GiftAddModal from '../components/GiftAddModal';
import GiftModal from '../components/GiftModal';
import ApiFetch from '../utils/ApiFetch';
import values from '../values';
import theme from '../values/theme';

/*
const pixGift = {
  id: -1,
  name: 'Pix de qualquer valor',
  imageURL: 'https://www.bcb.gov.br/content/estabilidadefinanceira/piximg/logo_pix.png',
  price: -1,
  reserved: [],
  reached: false,
};
*/

export function Gift({record, onClick}) {
  const gift = record?.fields || {};
  let tot = gift.reached ? 100 : 0;
  if (!gift.reached && gift.price > 0 && gift.reserved) {
    try {
      console.log('reserved', gift.reserved)
      const reserv = JSON.parse(gift.reserved)
      console.log('reserv', reserv)
      reserv.forEach(element => {
        tot += element.amount;
      });
      tot = tot * 100 / gift.price;
    } catch(e) {
      console.log(e);
    }
  }

  function handleClick() {
    if (gift.reached) return;
    onClick();
  }

  return (
    <Fade in={true} timeout={1000}>
      <Card style={{...styles.gift, ...(gift.reached ? {position: 'relative'} : {})}} onClick={handleClick}>
        {(gift.reached || 2 > 1 )&&
          <div style={styles.giftReservedForeground}></div>
        }
        <CardActionArea>
          <img src={gift.imageURL} alt={`gift-${gift.name}`} style={styles.giftImage} />
          {gift.price > 0 &&
            <div style={styles.giftPercContainer}>
              <div style={{
                ...styles.giftPercBar,
                width: `${tot}%`,
                backgroundColor: theme.customColors.azulDark
              }}></div>            
            </div>
          }
          <div style={styles.giftContent}>
            <Typography style={styles.giftTitle} fontSize={theme.sizes.small}>{gift.name}</Typography>
            {gift.price > 0 &&
              <div style={styles.giftBottom}>
                {tot < 100 ? (
                <Typography style={styles.giftPrice}>R$ {gift.price}</Typography>
                ) : (
                  <Typography style={styles.giftReserved} >R$ {gift.price} - RESERVADO</Typography>
                )}
              </div>
            }
          </div>
        </CardActionArea>
      </Card>
    </Fade>
  )
}

const MAX_GIFTS = 8;

export default function Gifts() {
  const [loading, setLoading] = useState(false);
  const [gifts, setGifts] = useState([]);
  const [error, setError] = useState(false);
  const [showMore, setShowMore] = useState(MAX_GIFTS);
  const [giftSelected, setGiftSelected] = useState(null);
  const [addGift, setAddGift] = useState(false);
  

  function loadGifts() {
    setLoading(true);
    setError(false);
    ApiFetch('/Gifts', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => {
      setLoading(false);
      if (res.status === 200) {
        return res.json();
      }
    }).then(data => {
      if (!data.records) setError(true);
      
      setGifts(data.records || []);
    }).catch(err => {
      setLoading(false);
      setError(true);
    })
  }

  useEffect(() => {
    loadGifts();
  }, []);
  
  return (
    <div style={styles.content}>
      {loading && <Typography style={styles.loading}>Carregando...</Typography>}
      {error && 
        <div style={styles.errorContainer}>
          <Typography style={styles.error}>Não foi possível carregar a lista.</Typography>
          <Typography style={styles.error}>Tente novamente mais tarde.</Typography>
          <Button style={styles.try_again} variant='contained' onClick={loadGifts}>Tentar novamente</Button>
        </div>
      }
      {!loading && !error && 
        <>
          <Typography>Caso deseje nos presentear, veja abaixo algumas sugestões:</Typography>
          {values.GIFTS_EDITABLE &&
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
              <Button style={styles.btnAddGift} variant='contained' onClick={() => setAddGift(true)}>Adicionar presente</Button>
              <Button style={styles.btnAddGift} variant='contained' onClick={loadGifts}>Recarregar Lista</Button>
            </div>
          }
          <div style={styles.list}>
            {gifts.sort((a,b) => {
              //Sorting initially by pos but if the pos is the same, sort by name
              if (a.fields.pos === b.fields.pos) {
                return a.fields.name.localeCompare(b.fields.name);
              } else {
                return a.fields.pos > b.fields.pos ? 1 : -1;
              }
            }).map((record, i) => {
              if (i < showMore) {
                return <Gift key={record.id} record={record} onClick={() => setGiftSelected(record)} />
              } else {
                return null;
              }
            })}
          </div>
          {gifts.length > MAX_GIFTS &&
            <div style={styles.listBottomMenu}>
              {showMore > MAX_GIFTS &&
                <Button style={styles.btnShowMore} onClick={() => setShowMore(MAX_GIFTS)}>{'VER MENOS'}</Button>
              }
              {showMore < gifts.length &&
                <Button style={styles.btnShowMore} onClick={() => setShowMore(gifts.length)}>{'VER MAIS'}</Button>
              }
            </div>
          }
        </>      
      }
      <GiftModal visible={!!giftSelected} record={giftSelected} onClose={(refetch) => {
        setGiftSelected(null);
        if (refetch) loadGifts();
      }} />

      {values.GIFTS_EDITABLE && 
        <GiftAddModal visible={addGift} handleClose={(refetch) => {
          setAddGift(false);
          if (refetch) loadGifts();
        }} />
      }

    </div>
  )
}

const styles = {
  content: {
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
  },
  error: {
    color: '#7d7d7d',
  },
  try_again: {
    marginTop: 20,
    fontSize: 16,
  },
  list: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: 20,
  },
  gift: {
    flex: 1,
    minWidth: 250,
    maxWidth: 400,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 10,
    border: '1px solid #ccc',
    borderRadius: 10,
  },
  giftReservedForeground: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(255,255,255,0.5)',
    zIndex: 9,
    borderRadius: 10,
  },
  giftImage: {
    width: '100%',
    height: 200,
    objectFit: 'contain',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingTop: 10,
  },
  giftPercContainer: {
    width: '100%',
    height: 10,
    backgroundColor: 'rgba(0,0,0,0.35)',
    position: 'relative',
  },
  giftPercBar: {
    height: '100%',
    position: 'absolute',
    zIndex: 1,
  },
  giftContent: {
    flex: 1,
    width: '100%',
    padding: 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  giftTitle: {

  },
  giftBottom: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginTop: 10,
  },
  giftPrice: {
    flex: 1,
    fontSize: theme.sizes.subtitle,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  giftReserved: {
    flex: 1,
    fontSize: 22,
    textAlign: 'center',
    color: theme.customColors.azulDark,
  },
  giftButton: {
    fontSize: 16,
  },
  listBottomMenu: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
}