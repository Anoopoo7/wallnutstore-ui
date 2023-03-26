import 'bootstrap/dist/css/bootstrap.css'
import '@use/styles/globals.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useState } from 'react'
import SearchContainer from '@use/widgets/search/container/searchContainer'

export default function App({ Component, pageProps }) {
  const [enableSearch, setEnableSearch] = useState(false)
  return (
    <div className="bg-universe pt-2">
      <Component {...pageProps} search={{ enableSearch, setEnableSearch }} />
      {enableSearch && <SearchContainer setEnableSearch={setEnableSearch} />}
    </div>
  )
}
