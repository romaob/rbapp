import { Button, Paper, Typography } from '@mui/material'
import React from 'react'
import Link from 'react-scroll/modules/components/Link';
import routes from '../values/routes';
import theme from '../values/theme'

const color1 = theme.customColors.azulSerenity;
const color2 = theme.customColors.azulDark;
const color3 = theme.customColors.rose;
const color4 = 'rgb(251, 223, 226)';

const storyItems = [
  {
    title: 'Como tudo começou',
    year: '2016',
    text: 'Começamos a conversar por mensagens, nunca nos vimos pessoalmente, então descobrimos que moravamos de frente um para o outro, essa coincidência foi o que nos aproximou, e nos fez nos conhecer pessoalmente. E pelo jeito foi amor a primeira vista, e então começamos a namorar...',
  },
  {
    title: 'Cada vez mais próximos',
    year: '2018',
    text: 'Agora morando em cidades diferentes não nos viamos com a mesma frequência, ele ainda trabalhava na mesma cidade que ela morava, e então uma crise nos aproximou. Durante a greve geral, houve falta de combustivel, e ele então resolveu passar aquela semana morando com ela, e nunca mais saiu de lá... '
  },
  {
    title: 'União civil',
    year: '2020',
    text: 'Neste ano queriamos nos casar, porém devido a pandemia, tivemos que adiar o casamento, mas não deixamos de nos unir civilmente, e assim nos tornamos marido e mulher.',
  },
  {
    title: 'O planejamento',
    year: '2022',
    text: 'Neste ano finalmente podemos começar a planejar nosso tão esperado casamento, não poderíamos estar mais felizes, e ansiosos para esse dia tão especial.',
  },
  {
    title: 'Carregando...',
    year: '2023',
    text: '',
  },

]

export function StoryText() {
  return (
    <>
      Certo dia, um colega de trabalho do Romão e sua esposa que trabalhava comigo (Brunna), decidiram passar o contato de ambos, para nos apresentar um ao outro.
     <br/>Na época, achamos graça e não demos muita importância.
     <br/>Mas depois de um tempo, em uma mensagem de felicitações de aniversário que ele enviou, começamos a conversar.
     <br/>Após alguns dias de conversa, veio a grande coincidência e <b>surpresa do destino</b>, morávamos de <b>FRENTE</b> um para o outro! Não era só no mesmo bairro, na mesma rua, mas sim de frente um para o outro!
     <br/>Dá para acreditar?! (Risos)
     <br/><br/>A partir dali se iniciou uma linda amizade, e começamos a nos falar todos os dias, a nos ver com mais frequência, andávamos de bicicleta, fazíamos caminhadas, íamos para cinemas, jantares, e aos poucos nossa sincronia um com o outro foi ficando cada vez maior.
     <br/>Até que depois de um tempo, percebemos que queríamos cada vez mais a companhia um do outro e que então, o sentimento de amizade havia evoluído para algo muito maior.
     <br/>Foi quando no dia 7 de Agosto de 2016,  o Romão me pediu em namoro, e assim tudo começou!
     <br/>Conhecemos a família um do outro, fomos abençoados e privilegiados em poder fazer parte da família maravilhosa que nos acolheu.
     <br/><br/>Com o tempo passamos por altos e baixos, mas sempre superando as dificuldades e seguindo cada vez mais fortes, sempre unidos, com muita cumplicidade e companheirismo.
     <br/><br/>Depois de alguns anos juntos decidimos nos mudar de país, em busca de melhores oportunidades. Fomos atrás dos documentos, vendemos tudo o que tínhamos e nos preparamos para mudar, e então marcamos a data do nosso <b>casamento cívil</b>.
     <br/>Planejamos uma comemoração da nossa união com os familiares, mas infelizmente veio a pandemia, e acabou não sendo possível a comemoração.
     <br/>Casamos em meio a pandemia, no dia 9 de Abril de 2020, todos de máscaras (conseguimos tirar as máscaras apenas para algumas fotos), mas infelizmente sem a <b>presença de nossos pais</b>.
     <br/>Minha mãe até conseguiu ficar mais perto à uma certa distância, porque ela não obedeceu totalmente as regras, foi firme pois seria a única filha dela mulher a se casar.
     <br/>Não foi como gostaríamos, ficamos muito tristes na época.. mas Deus com sua grandiosidade, já tinha os planos dele para com nós. Planos esses, que seriam muito maiores do que jamais imaginávamos.
     <br/>O tempo passou, a pandemia foi longa, devido ao caos e a tudo o que aconteceu repensamos e resolvemos então recomeçar aqui novamente.
     <br/><br/><b>Por fim, decidimos realizar esse momento de reunir à todos, e nos casar com a benção de Deus, e a presença de nossos pais, familiares e amigos.</b>
     <br/>Agora com os dias contados, depois de quase um ano planejando, e indo atrás de cada detalhe com muito carinho, iremos realizar esse grande desejo dos nossos corações. 
    Só temos a agradecer a Deus, por tudo o que vivemos até aqui, por todas as bênçãos que ele nos preparou, e aguardar ansiosos por esse dia tão especial para nós que está por vir! E claro, por muitos outros que ainda virão.
{/* 
      Certo dia, um colega de trabalho do Romão, e sua esposa que trabalhava comigo (Brunna), decidiram passar o contato de ambos, para nos apresentar um ao outro.
      <br/>Na época, achamos graça e não demos muita importância.
      <br/>Mas depois de um tempo, em uma mensagem de felicitações de aniversário que ele enviou, começamos então a conversar.  
      <br/>Após alguns dias de conversa, veio a grande coincidência e <b>surpresa do destino</b>, morávamos de <b>FRENTE</b> um para o outro! Não era só no mesmo bairro, na mesma rua, mas sim de frente um para o outro! Da para acreditar?! (Risos)
      <br/>
      <br/>A partir dali, se iniciou uma linda amizade, e começamos a nos falar todos os dias, a nos ver com mais frequência, andávamos de bicicleta, fazíamos caminhadas, íamos para cinemas, jantares, e aos poucos nossa sincronia um com o outro, foi ficando cada vez maior. 
      <br/>Até que depois de um tempo, percebemos que queríamos cada vez mais a companhia um do outro, e que então, o sentimento de amizade havia evoluído para algo muito maior.
      <br/>Foi quando, no dia 07 de Agosto de 2016,  o Romão me pediu em namoro, e assim tudo começou! 
      <br/>Conhecemos a família um do outro, e fomos abençoados, e privilegiados em poder fazer parte da família maravilhosa que nos acolheu. 
      <br/>
      <br/>Com o tempo, passamos por altos e baixos, mas sempre superando as dificuldades, e seguindo cada vez mais fortes, sempre unidos, com muita cumplicidade e companheirismo.
      <br/>Depois de alguns anos juntos, decidimos nos mudar de país, em busca de melhores oportunidades, fomos atrás dos documentos, vendemos tudo o que tínhamos, e nos preparamos para mudar, e então, em meio a esse processo, marcamos a data do nosso <b>casamento cívil</b>.
      <br/>Planejamos uma comemoração da nossa união com os familiares, mas infelizmente veio a pandemia, e acabou não sendo possível a comemoração. 
      <br/>Casamos então em meio a pandemia, no dia 09 de Abril de 2020. Casamos de máscaras (conseguimos tirar as máscaras apenas para algumas fotos), mas infelizmente sem a presença de nossos pais. Minha mãe até conseguiu ficar mais perto, a uma certa distância, porque ela não obedeceu totalmente as regras, foi firme, pois seria a única filha dela, mulher a se casar. 
      <br/>Não foi como gostaríamos, ficamos muito tristes na época, mas Deus com sua grandiosidade, já tinha os planos dele para com nós. Planos esses, que seriam muito maiores do que jamais imaginávamos.
      <br/>
      <br/>O tempo passou, a pandemia foi longa, devido ao caos e a tudo o que aconteceu, repensamos e resolvemos então, recomeçar aqui novamente.   
      <br/><b>Devido a isso, decidimos realizar esse momento, reunir à todos, e nos casar com a benção de Deus, e a presença de nossos pais, familiares e amigos.</b>
      <br/>Agora com os dias contados, depois de quase um ano planejando, e indo atrás de cada detalhe com o maior carinho, iremos realizar esse grande desejo dos nossos corações. Só temos a agradecer a Deus, por tudo o que vivemos até aqui, por todas as bençãos que ele nos preparou, e aguardar ansiosos por esse dia tão <b>especial</b> para nós que está por vir! E claro, por muitos outros que ainda virão. 
    */}

    </>
)}

export function StoryItem({title, text, center, left, top, bottom, phone}) {
  return (
    <div style={styles.storyItemContainer}>
        <div style={{
          flex: !phone ? 1 : '0.01',
          display: 'flex', alignItems: 'center'}}>
          {(left && !phone) && 
          <>
            <div style={{flex: 1}}></div>
            <div style={{
              maxWidth: 400,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              borderWidth: 2,
              borderStyle: 'solid',
              borderColor: color3,
              borderRadius: 10,
              padding: 10,
              backgroundColor: color4,
            }}>
              <Typography fontSize={36} fontFamily='Pinyon Script' color={color2}>
                {title}
              </Typography>
              <Typography fontSize={18}>
                {text}
              </Typography>
            </div>
            <div style={{flex: 1, maxWidth: 150, height: 2, minWidth: 30, backgroundColor: color3}}></div>
          </>}
        </div>
      <div style={{alignSelf: 'stretch', alignItems: 'center', minWidth: 130, display: 'flex', flexDirection: 'column'}}>
        <div style={{flex: 1, display: 'flex', minHeight: 30, }}>
           {top &&
            <div style={{display: 'flex', flex: 1, width: 2, backgroundColor: color3}}></div>
           }
        </div>
        <div style={{
          display: 'flex',
          width: 130,
          height: 130,
          borderWidth: 2,
          borderStyle: 'solid',
          borderColor: color1,
          borderRadius: 100,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: color1,
        }}>
          <Typography fontSize={36} fontFamily='Pinyon Script' color={theme.customColors.textContrast}>
            {center}
          </Typography>
        </div>       
          <div style={{flex: 1, display: 'flex', minHeight: 30, }}>
           {bottom &&
            <div style={{display: 'flex', flex: 1, width: 2, backgroundColor: color3}}></div>
           }
          </div>
      </div>
      <div style={{flex: 1,  display: 'flex', alignItems: 'center'}}>
        {(!left || phone) &&
          <>
            <div style={{flex: 1, maxWidth: 150, height: 2, minWidth: 30, backgroundColor: color3}}></div>
            <div style={{
                maxWidth: !phone ? 400 : 'auto',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                borderWidth: 2,
                borderStyle: 'solid',
                borderColor: color3,
                borderRadius: 10,
                padding: 10,
                backgroundColor: color4,
                marginTop: 10,
                marginBottom: 10,
              }}>
                <Typography fontSize={36} fontFamily='Pinyon Script' color={color2}>
                  {title}
                </Typography>
                <Typography fontSize={18} color={'#000'}>
                  {text}
                </Typography>
              </div>
            <div style={{flex: 1}}></div>
          </>
        }
      </div>
    </div>
  )
}

export default function Story() {
  const [showAll, setShowAll] = React.useState(false);

  function handleShowLess() {
    setShowAll(false);
  }

  return (
    <div style={{flex: 1, display: 'flex', flexDirection: 'column', width: '100%', paddingTop: 20}}>
      <Paper style={styles.fullStoryText}>
        {!showAll &&
          <>
          <div style={{
                maxHeight: showAll ? 'auto' : 300,
                overflow: 'hidden',
              }}>
            <Typography fontStyle={'italic'} fontSize={16}>
  
                <StoryText />
            </Typography>  
              </div>
            <div style={{
              width: '100%',
              height: 150,
              position: 'absolute',
              bottom: 0,
              left: 0,
              zIndex: 1,
              //White to transparent gradient from bottom to top
              background: 'linear-gradient(rgba(255,255,255,0), rgba(255,255,255,1), rgba(255,255,255,1))',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'flex-end',
              paddingBottom: 20
            }}>
              <Button onClick={() => setShowAll(!showAll)}>Ver mais</Button>
            </div>  
          </>
        }
        {showAll &&
          <>
            <Typography fontStyle={'italic'} fontSize={16}>
              <StoryText />
            </Typography>
            <div style={{              
              display: 'flex',
              justifyContent: 'center',
            }}>
              <Link activeClass='active' to={routes.ABOUT} smooth offset={-50} duration={500}>
                <Button onClick={() => setShowAll(!showAll)}>Ver menos</Button>
              </Link>
            </div> 
          </>
        }
      </Paper>
      {/* 
      <Box sx={{ display: { xs: 'none', md: 'block' } }} >
        {
          storyItems.map((item, index) => {
            return (
              <StoryItem key={index} title={item.title} text={item.text} center={item.year} top={index > 0} bottom={index < storyItems.length - 1} left={index % 2 === 0}/>
            )
          })
        }        
      </Box>
      <Box sx={{ display: { xs: 'block', md: 'none' } }} >
        {
          storyItems.map((item, index) => {
            return (
              <StoryItem phone key={index} title={item.title} text={item.text} center={item.year} top={index > 0} bottom={index < storyItems.length - 1}/>
            )
          })
        }
      </Box>
      */}
    </div>
  )
}

const styles = {
  storyItemContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fullStoryText: {
    alignSelf: 'center',
    textAlign: 'left',
    maxWidth: '1000px',
    padding: 15,    
    position: 'relative', 
  },
}