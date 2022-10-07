import { Button } from '@mui/material';
import React from 'react';
import InfoPanel from '../components/InfoPanel';
import Label from '../components/Label';
import Page from '../components/Page';

function Home(props) {
    return (
        <Page fullHeader>
            <InfoPanel />
            <InfoPanel img={
                (<img alt='' src={require('../images/header1.jpg')} style={{width: 150, height: '100%', objectFit: 'cover'}} />)
            }>
            </InfoPanel>
            <InfoPanel reverse img={
                (<img alt='' src={require('../images/header1.jpg')} style={{width: 250, height: 450, objectFit: 'cover'}} />)
            }></InfoPanel>
            <InfoPanel reverse />
            <InfoPanel />
        </Page>
    );
}

const styles = {
    
}

export default Home;