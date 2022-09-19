import React from 'react'
import MenuItem from './MenuItem'

export default function Menu() {
  return (
    <div style={{display: 'flex', alignContent: 'center', justifyContent: 'center'}}>
        <MenuItem label={'Home'}/>
        <MenuItem label={'Os Noivos'}/>
        <MenuItem label={'O Evento'}/>
        <MenuItem label={'Confirmar Presença'}/>
        <MenuItem label={'Lista de Presentes'}/>
        <MenuItem label={'Recados'}/>
    </div>
  )
}
