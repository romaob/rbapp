import React from 'react';
import InfoPanel from '../components/InfoPanel';
import Page, { Title, TopicTitle } from '../components/Page';

function About(props) {
    return (
        <Page title={'NOSSA HISTÓRIA'}>  
            <div style={{textAlign: 'left'}}>
                <div style={{backgroundColor: '#CCC', width: '100%', height: 300}}></div>
                <p style={{padding: 10}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.
                    Nullam id dolor id nibh ultricies vehicula ut id elit.
                    Nullam id dolor id nibh ultricies vehicula ut id elit.
                    Nullam id dolor id nibh ultricies vehicula ut id elit.
                </p>
            </div>
        </Page>
    );
}

export default About;