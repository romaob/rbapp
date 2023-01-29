import React from 'react'
import Section from '../components/Section'
import Top from './Top'
import About from './About'
import Date from './DateInfo'
import Event from './Event'
import Story from './Story'
import Numbers from './Numbers'
import Gallery from './Gallery'
import Bottom from './Bottom'
import routes from '../values/routes'
import Gifts from './Gifts'
import Loading from '../components/Loading'
import { isMarried } from '../values'
import IpInfoFetch from '../utils/IpInfoFetch'

/*
- Add a way to edit the content of gifts
- protect some of the routes with password
- make some editions on the main photo
*/

export default function Main() {
  const [loading, setLoading] = React.useState(true);
  const [inBrazil, setInBrazil] = React.useState(true);
  const married = isMarried();

  
  //useEffect seting the loading to false after 2 seconds
  React.useEffect(() => {
    setTimeout(async () => {
      setLoading(false);

      // Check if the user is in Brazil
      /*
      let res = await IpInfoFetch();
      console.log('res', res);
      if (res?.country !== 'BR') {
        setInBrazil(false);
      }
      */
    }, 2000);
  }, []);

  return (
    <div style={{
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    }}>    
        { loading ? (
          <Loading />
        ) : (
          <>
            <Top image={require('../images/content-images/2022-12-13-001.jpg')} />
            <Section title={'Olá!'} name={routes.HOME}>
              <About />
            </Section>
            <Section title={'Nossa história'} name={routes.ABOUT}>
              <Story />
            </Section>
            <Section dark title={'O grande dia'} image={require('../images/content-images/2022-12-13-005.jpg')}>
              <Date />
            </Section>
            {!married && (
              <Section title={'O evento'} name={routes.EVENT}>
                <Event />
              </Section>
            )}
            <Section dark image={require('../images/content-images/2022-12-13-003.jpg')}>
              <Numbers />
            </Section>
            {!married && inBrazil && (
              <Section title={'Lista de presentes'} name={routes.GIFTS} style={{
                backgroundColor: 'rgba(0,0,0,0.0)',
              }}>
                <Gifts />
              </Section>
            )}
            <Section title={'Galeria'} name={routes.GALLERY}>
              <Gallery />
            </Section>
            <Section dark image={require('../images/content-images/empty-gradient.jpg')}>
              <Bottom />
            </Section>
          </>
        )}
    </div>
  )
}
