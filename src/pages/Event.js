import { Paper, Typography } from '@mui/material'
import React from 'react'
import Countdown from '../components/Countdown'
import Page from '../components/Page'
import PagePaper from '../components/PagePaper'

export default function Event() {
  return (
    <Page>
        <PagePaper title='O Evento'>
          <Typography>Contagem regressiva para o grande dia</Typography>
          <Countdown fontColor='rgba(0,0,0,0.7)' bordered />
        </PagePaper>
    </Page>
  )
}
