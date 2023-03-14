import HomepageLayouts from '@use/layoutHandle/homepageLayouts'
import { Container } from 'reactstrap'
import useTranslation from 'next-translate/useTranslation'
import { useMemo } from 'react'
import { getContentByPageType } from '@use/services/pageContentService'

export async function getStaticProps(context) {
  const response = await getContentByPageType('home')
  if (response && response.success) {
    return {
      props: {
        pageContent: response?.data?.contents || [],
      },
      revalidate: 5, // add revalidate key with value of 2 seconds
    }
  }
  // return {
  //   props: {
  //     pageContent: [
  //       {
  //         code: 'navbar',
  //         name: 'WallnutStores',
  //         navlinks: [
  //           'https://img.icons8.com/ios-glyphs/24/null/search--v1.png',
  //           'https://img.icons8.com/material-sharp/24/null/person-male.png',
  //           'https://img.icons8.com/material-sharp/24/null/like--v1.png',
  //           'https://img.icons8.com/material-sharp/24/null/shopping-cart.png',
  //         ],
  //       },
  //       {
  //         code: 'grid_banner',
  //         images: [
  //           {
  //             image:
  //               'https://images.pexels.com/photos/336372/pexels-photo-336372.jpeg',
  //             navigation: true,
  //             url: '/pp',
  //           },
  //           {
  //             image:
  //               'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg',
  //             navigation: true,
  //             url: '/',
  //           },
  //           {
  //             image:
  //               'https://images.pexels.com/photos/1445696/pexels-photo-1445696.jpeg',
  //             navigation: false,
  //             url: '/pp',
  //           },
  //         ],
  //       },
  //       {
  //         code: 'product_carousel',
  //         items: [
  //           {
  //             badge: 50,
  //             isWishlisted: true,
  //             image:
  //               'https://rukminim1.flixcart.com/image/612/612/xif0q/helmet/e/l/s/full-face-helmet-blue-limited-edition-isi-motorbike-helmet-blue-original-imagm8y2bjsbhytb.jpeg',
  //             name: 'Vega Atom helmet',
  //             price: 2300,
  //           },
  //           {
  //             badge: null,
  //             isWishlisted: true,
  //             image:
  //               'https://rukminim1.flixcart.com/image/612/612/l1mh7rk0/helmet/h/o/g/-original-imagd5f95czppjyg.jpeg',
  //             name: 'Spinwave tritom helmet',
  //             price: 1900,
  //           },
  //           {
  //             badge: null,
  //             isWishlisted: true,
  //             image:
  //               'https://rukminim1.flixcart.com/image/612/612/krayqa80/rucksack/o/n/z/70l-travel-backpack-for-outdoor-sport-camp-hiking-trekking-bag-original-imag54hsvebyfjkb.jpeg',
  //             name: 'Balgium bage catterceek',
  //             price: 1100,
  //           },
  //           {
  //             badge: 69,
  //             isWishlisted: true,
  //             image:
  //               'https://rukminim1.flixcart.com/image/612/612/xif0q/shoe/d/n/l/9-fast-white-perrot-sfr-white-perrot-original-imagj52ctxvu6ewf.jpeg',
  //             name: 'Pime brag securities bag',
  //             price: 980,
  //           },
  //           {
  //             badge: null,
  //             isWishlisted: true,
  //             image:
  //               'https://rukminim1.flixcart.com/image/612/612/xif0q/shoe/t/q/w/-original-imagmfquwff5tkwz.jpeg',
  //             name: 'Vega Atom helmet',
  //             price: 2300,
  //           },
  //         ],
  //       },
  //       {
  //         code: 'carousel_banner',
  //         items: [
  //           {
  //             image:
  //               'https://img.freepik.com/premium-vector/big-sale-social-media-cover-facebook-banner-template_622110-112.jpg',
  //             navigation: false,
  //             url: '',
  //           },
  //           {
  //             image:
  //               'https://img.freepik.com/premium-vector/big-sale-social-media-cover-facebook-banner-template_622110-112.jpg',
  //             navigation: true,
  //             url: '/ppp',
  //           },
  //         ],
  //       },
  //       {
  //         code: 'footer',
  //         joinLinks: [
  //           { facebook: 'https://www.facebook.com' },
  //           { instagram: 'https://www.instagram.com' },
  //           { twitter: 'https://www.twitter.com' },
  //         ],
  //         footerLinks: [
  //           {
  //             heading: 'Top Categories',
  //             items: [
  //               { name: 'shirts', link: '/' },
  //               { name: 'watches', link: '/' },
  //               { name: 'bags', link: '/' },
  //               { name: 'toys', link: '/' },
  //               { name: 'shoes', link: '/' },
  //               { name: 'hats', link: '/' },
  //             ],
  //           },
  //           {
  //             heading: 'Top Brands',
  //             items: [
  //               { name: 'Nikkolie', link: '/' },
  //               { name: 'Manybi', link: '/' },
  //               { name: 'Arablie', link: '/' },
  //               { name: 'Iphone', link: '/' },
  //               { name: 'Loies', link: '/' },
  //               { name: 'RedCar', link: '/' },
  //               { name: 'Apple', link: '/' },
  //               { name: 'vega', link: '/' },
  //             ],
  //           },
  //           {
  //             heading: 'About Us',
  //             items: [
  //               { name: 'Stores', link: '/' },
  //               { name: 'About us', link: '/' },
  //               { name: 'Careers', link: '/' },
  //               { name: 'Privacy and security', link: '/' },
  //               { name: 'Customer rights', link: '/' },
  //             ],
  //           },
  //           {
  //             heading: 'Customer service',
  //             items: [
  //               { name: 'Help', link: '/' },
  //               { name: 'Contact us', link: '/' },
  //               { name: 'Returns & Refunds', link: '/' },
  //             ],
  //           },
  //         ],
  //       },
  //     ],
  //   },
  // }
}

export default function Home({ pageContent }) {
  return (
    <Container>
      <HomepageLayouts pageContent={pageContent} />
    </Container>
  )
}
