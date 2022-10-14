import React from 'react'
import values from '../values'
import theme from '../values/theme'

function CountDownItem(props) {
  const {label, value, fontColor, backgroundColor, bordered} = props;

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            margin: 5,
        }}>
            <div style={{
              fontSize: 24, 
              display: 'flex',
              fontWeight: 'bold', 
              width: 50,
              height: 50,
              alignItems: 'center',
              justifyContent: 'center',
              border: bordered ? `1px solid ${fontColor}` : 'none',
              borderRadius: 50,
              margin: 5,
              color: fontColor ?? theme.customColors.textContrast,
              backgroundColor: bordered ? 'transparent' : backgroundColor ?? theme.customColors.rose,}}
            >
              {value}
            </div>
            <div style={{fontSize: 16, color: bordered ? fontColor : backgroundColor}}>{label}</div>
        </div>
    )
}

export default function Countdown(props) {
const {label, value, fontColor, backgroundColor, bordered} = props;
const [currentDate, setCurrentDate] = React.useState(null)
const [countDow, setCountDow] = React.useState(null)

//Get countdown values between now and the wedding date
function getCountdownValues() {
    const weddingDate = values.event_date;
    const now = new Date()
    const diff = (weddingDate.getTime() - now.getTime()) / 1000
    const days = Math.floor(diff / 86400)
    const hours = Math.floor(diff / 3600) % 24
    const minutes = Math.floor(diff / 60) % 60
    const seconds = Math.floor(diff) % 60
    setCountDow({days, hours, minutes, seconds})
}

React.useEffect(() => {
  const interval = setInterval(() => {
    setCurrentDate(new Date())
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
