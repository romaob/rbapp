import { Button } from '@mui/material';
import React from 'react';
import Countdown from '../components/Countdown';
import InfoPanel from '../components/InfoPanel';
import Label from '../components/Label';
import Page from '../components/Page';

function Home(props) {
    return (
        <Page fullHeader>
            <Countdown />
            <InfoPanel />
            <InfoPanel reverse />
            <InfoPanel />
        </Page>
    );
}

const styles = {
    
}

export default Home;