import { Button, Fade, Typography } from '@mui/material';
import React from 'react'
import ImageView from '../components/ImageView';
import theme from '../values/theme';

//* Available after having the first picturs, then showing sections 'All', 'Moments', 'Cerimony', 'Wedding', 'Family', 'Friends', 'Party'
function importAll(r) {
  return r.keys().map(r);
}
//Images
const IMAGES_MOMENTS = importAll(require.context('../images/gallery/moments', false, /\.(png|jpe?g|svg)$/));
const IMAGES_CERIMONY = importAll(require.context('../images/gallery/cerimony', false, /\.(png|jpe?g|svg)$/));
const IMAGES_WEDDING = importAll(require.context('../images/gallery/wedding', false, /\.(png|jpe?g|svg)$/));
const IMAGES_FAMILY = importAll(require.context('../images/gallery/family', false, /\.(png|jpe?g|svg)$/));
const IMAGES_FRIENDS = importAll(require.context('../images/gallery/friends', false, /\.(png|jpe?g|svg)$/));
const IMAGES_PARTY = importAll(require.context('../images/gallery/party', false, /\.(png|jpe?g|svg)$/));

//const IMAGES_All = [...IMAGES_MOMENTS, ...IMAGES_CERIMONY, ...IMAGES_WEDDING, ...IMAGES_FAMILY, ...IMAGES_FRIENDS, ...IMAGES_PARTY];
const IMAGES_All = [...IMAGES_MOMENTS]; //! Uncomment the above line and remove this one when having more pictures

const MAX = 6;
const categories = {
  ALL: 'Todas',
  MOMENTS: 'Momentos',
  //CERIMONY: 'Cerimônia', //! Uncomment the following lines when having the related pictures
  //WEDDING: 'Casamento',
  //FAMILY: 'Família',
  //FRIENDS: 'Amigos',
  //PARTY: 'Festa',
}

export function GalleryItem({picture, onSelect}) {
  return (
    <Fade in={true} timeout={1000}>
      <div onClick={onSelect}
        style={{
          ...styles.galleryItem,
          backgroundImage: `url(${picture})`,        
        }}></div>
    </Fade>
  )
}

export function GalleryList({pictures, onIndexChange}) {
  const [limit, setLimit] = React.useState(MAX);
  const [display, setDisplay] = React.useState(pictures.slice(0, MAX));

  React.useEffect(() => {
    setDisplay(pictures.slice(0, limit));
  }, [pictures, limit]);

  const handleLoadMore = () => {
    setLimit(pictures.length);
  }

  return (
    <Fade in={true} timeout={500}>
      <div style={styles.galleryList}>
        {display.map((picture, index) => {
          return <GalleryItem picture={picture} key={index} onSelect={() => onIndexChange(index)}/>
        })}
        <div style={styles.seeMore}>
          {pictures.length > limit &&          
            <Button onClick={handleLoadMore}>
              {/* +{pictures.length - MAX} */}
              Ver mais...
            </Button>
          }
          {/* //! Uncomment when having more pictures
          {pictures.length <= limit &&
            <Button onClick={() => setLimit(MAX)}>
              Ver menos.
            </Button>
          }
          */}
        </div>
      </div>
    </Fade>
  )
}

export default function Gallery() {
  const [categorySelected, setCategorySelected] = React.useState(categories.ALL);
  const [selectedIndex, setSelectedIndex] = React.useState(null);

  function filterSelect(category) {
    setCategorySelected(categories[category]);
    setSelectedIndex(null);
  }

  function closeImageModal() {
    setSelectedIndex(null);
  }

  function getImages(category) {
    switch (category) {
      case categories.ALL:
        return IMAGES_All;
      case categories.MOMENTS:
        return IMAGES_MOMENTS;
      case categories.CERIMONY:
        return IMAGES_CERIMONY;
      case categories.WEDDING:
        return IMAGES_WEDDING;
      case categories.FAMILY:
        return IMAGES_FAMILY;
      case categories.FRIENDS:
        return IMAGES_FRIENDS;
      case categories.PARTY:
        return IMAGES_PARTY;
      default:
        return IMAGES_All;
    }
  }

  return (
    <div style={styles.container}>
      <Typography>Colecionando memórias...</Typography>
      <div style={styles.menu}>
        { /* //! Uncomment when having more pictures
          Object.keys(categories).map((category, index) => {
            return (
              <Button 
                key={index} 
                onClick={() => filterSelect(category)} 
                style={{...styles.menuItem, ...(categorySelected === categories[category] ? styles.menuItemSelected : {})}}
              >
                {categories[category]}
              </Button>
            )
          })          
        */}
      </div>
      {selectedIndex === null &&
        <div>
          {categorySelected === categories.ALL && <GalleryList pictures={IMAGES_All} onIndexChange={(index) => setSelectedIndex(index)}/>}
          {categorySelected === categories.MOMENTS && <GalleryList pictures={IMAGES_MOMENTS} onIndexChange={(index) => setSelectedIndex(index)}/>}
          {/* 
          {categorySelected === categories.CERIMONY && <GalleryList pictures={IMAGES_CERIMONY} onIndexChange={(index) => setSelectedIndex(index)}/>}
          {categorySelected === categories.WEDDING && <GalleryList pictures={IMAGES_WEDDING} onIndexChange={(index) => setSelectedIndex(index)}/>}
          {categorySelected === categories.FAMILY && <GalleryList pictures={IMAGES_FAMILY} onIndexChange={(index) => setSelectedIndex(index)}/>}
          {categorySelected === categories.FRIENDS && <GalleryList pictures={IMAGES_FRIENDS} onIndexChange={(index) => setSelectedIndex(index)}/>}
          {categorySelected === categories.PARTY && <GalleryList pictures={IMAGES_PARTY} onIndexChange={(index) => setSelectedIndex(index)}/>}
          */}
        </div>
      }
      <ImageView 
        visible={selectedIndex !== null} 
        image={getImages(categorySelected)[selectedIndex]} 
        onClose={closeImageModal} 
        onNext={() => setSelectedIndex(selectedIndex < getImages(categorySelected).length - 1 ? selectedIndex + 1 : 0)}
        onPrevious={() => setSelectedIndex(selectedIndex > 0 ? selectedIndex - 1 : getImages(categorySelected).length - 1)}
      />
      {/* 
      <Carousel title={categorySelected} visible={selectedIndex !== null} images={getImages(categorySelected)} onClose={onCarouselClose} index={selectedIndex}/>
      */}
    </div>
  )
}

const styles = {
  container: {
    paddingBottom: 50,
    width: '100%',
  },
  galleryItem: {
    flex: 1,
    //width: 200,
    minWidth: 150,
    height: 200,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    margin: 10,
    borderRadius: 10,
    boxShadow: '0px 5px 10px 0px rgba(0,0,0,0.4)',
    cursor: 'pointer',
  },
  menu:{
    marginTop: 20,
    borderBottomWidth: 2,
    borderBottomColor: theme.customColors.azulDark,
    borderBottomStyle: 'solid',
  },
  menuItem: {
    flex: 1,
    fontSize: 14,
    marginLef: 15,
    marginRight: 15,
    borderRadius: 0,
  },
  menuItemSelected: {
    borderBottomWidth: 3,
    borderBottomStyle: 'solid',
  },
  galleryList: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
  },
  seeMore: {
    width: '100%',
    marginTop: 20,
  }

}
