import { Typography } from '@mui/material';
import React from 'react'
import values, { isMarried } from '../values'
import theme from '../values/theme'

function CountDownItem(props) {
  const {label, value, fontColor, backgroundColor, bordered} = props;

    return (
        <div style={{
            display: 'flex',
            flex: 1,
            flexDirection: 'column',
            alignItems: 'center',
            margin: 5,
            marginLeft: 10,
            marginRight: 10,
            textShadow: '0px 4px 4px rgba(0,0,0,0.4)',
        }}>
            <div style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: 5,
              color: fontColor ?? theme.customColors.textContrast,
              backgroundColor: bordered ? 'transparent' : backgroundColor ?? theme.customColors.rose,}}
            >
              <Typography fontSize={theme.sizes.title}>{value < 10 ? `0${value}` : value}</Typography>
            </div>
            <div style={{fontSize: 16, color: bordered ? backgroundColor : fontColor}}>
              <Typography>
                {label}
              </Typography>
            </div>
        </div>
    )
}

export default function Countdown(props) {
const {fontColor, backgroundColor, bordered} = props;
const [countDow, setCountDow] = React.useState(null)
const married = isMarried();

//Get countdown values between now and the wedding date
function getCountdownValues() {
    const weddingDate = values.event_date;
    const now = new Date()
    const diff = !married ? (weddingDate.getTime() - now.getTime()) / 1000 : (now.getTime() - weddingDate.getTime()) / 1000
    const days = Math.floor(diff / 86400)
    const hours = Math.floor(diff / 3600) % 24
    const minutes = Math.floor(diff / 60) % 60
    const seconds = Math.floor(diff) % 60
    setCountDow({days, hours, minutes, seconds})
}

React.useEffect(() => {
  const interval = setInterval(() => {
    getCountdownValues();
  }, 1000);
  return () => {
    clearInterval(interval);
  }
}, [])

  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <CountDownItem label="Dias" value={countDow?.days} fontColor={fontColor} backgroundColor={backgroundColor} bordered={bordered}/>
      <CountDownItem label="Horas" value={countDow?.hours} fontColor={fontColor} backgroundColor={backgroundColor} bordered={bordered}/>
      <CountDownItem label="Min" value={countDow?.minutes} fontColor={fontColor} backgroundColor={backgroundColor} bordered={bordered}/>
      <CountDownItem label="Seg" value={countDow?.seconds} fontColor={fontColor} backgroundColor={backgroundColor} bordered={bordered}/>
    </div>
  )
}
