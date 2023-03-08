import HomepageLayouts from '@use/layoutHandle/homepageLayouts'
import { Container } from 'reactstrap'

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
