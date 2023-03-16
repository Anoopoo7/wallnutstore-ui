import { useRouter } from 'next/router'
import { useMemo } from 'react'
import FooterComponent from '../component/footerComponent'

const Footer = () => {
  const payload = {
    code: 'footer',
    joinLinks: [
      { facebook: 'https://www.facebook.com' },
      { instagram: 'https://www.instagram.com' },
      { twitter: 'https://www.twitter.com' },
    ],
    footerLinks: [
      {
        heading: 'Top Categories',
        items: [
          { name: 'shirts', link: '/' },
          { name: 'watches', link: '/' },
          { name: 'bags', link: '/' },
          { name: 'toys', link: '/' },
          { name: 'shoes', link: '/' },
          { name: 'hats', link: '/' },
        ],
      },
      {
        heading: 'Top Brands',
        items: [
          { name: 'Nikkolie', link: '/' },
          { name: 'Manybi', link: '/' },
          { name: 'Arablie', link: '/' },
          { name: 'Iphone', link: '/' },
          { name: 'Loies', link: '/' },
          { name: 'RedCar', link: '/' },
          { name: 'Apple', link: '/' },
          { name: 'vega', link: '/' },
        ],
      },
      {
        heading: 'About Us',
        items: [
          { name: 'Stores', link: '/' },
          { name: 'About us', link: '/' },
          { name: 'Careers', link: '/' },
          { name: 'Privacy and security', link: '/' },
          { name: 'Customer rights', link: '/' },
        ],
      },
      {
        heading: 'Customer service',
        items: [
          { name: 'Help', link: '/' },
          { name: 'Contact us', link: '/' },
          { name: 'Returns & Refunds', link: '/' },
        ],
      },
    ],
  }
  const router = useRouter()
  const changeLocale = (locale) => {
    router.replace(router.pathname, router.asPath, { locale })
  }

  return <FooterComponent payload={{ ...payload, changeLocale }} />
}

export default Footer
