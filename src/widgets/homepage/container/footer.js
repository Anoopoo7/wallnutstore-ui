import { useRouter } from 'next/router'
import { useMemo } from 'react'
import FooterComponent from '../component/footerComponent'

const Footer = ({ payload }) => {
  const router = useRouter()
  const changeLocale = (locale) => {
    router.replace(router.pathname, router.asPath, { locale})
  }

  return <FooterComponent payload={{ ...payload, changeLocale }} />
}

export default Footer
