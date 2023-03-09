import HomepageLayouts from '@use/layoutHandle/homepageLayouts'
import { Container } from 'reactstrap'
import useTranslation from 'next-translate/useTranslation'

export async function getStaticProps(context) {
  return {
    props: {
      pageContent: [
        {
          code: 'navbar',
          name: 'WallnutStores',
          navlinks: [
            'https://img.icons8.com/ios-glyphs/24/null/search--v1.png',
            'https://img.icons8.com/material-sharp/24/null/person-male.png',
            'https://img.icons8.com/material-sharp/24/null/like--v1.png',
            'https://img.icons8.com/material-sharp/24/null/shopping-cart.png',
          ],
        },
        {
          code: 'grid_banner',
          images: [
            {
              image:
                'https://images.pexels.com/photos/336372/pexels-photo-336372.jpeg',
              navigation: true,
              url: '/pp',
            },
            {
              image:
                'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg',
              navigation: true,
              url: '/',
            },
            {
              image:
                'https://images.pexels.com/photos/1445696/pexels-photo-1445696.jpeg',
              navigation: false,
              url: '/pp',
            },
          ],
        },
        {
          code:"carousel_banner",
          items:[
            {
              image:"https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg",
              navigation:false,
              url:""
            },
            {
              image:"https://images.pexels.com/photos/936081/pexels-photo-936081.jpeg",
              navigation:true,
              url:"/ppp"
            }
          ]
        }
      ],
    },
  }
}

export default function Home({ pageContent }) {
  return (
    <Container>
      <HomepageLayouts pageContent={pageContent} />
    </Container>
  )
}
