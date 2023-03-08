import 'bootstrap/dist/css/bootstrap.css'
import '@use/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <div className="bg-secondary pt-2">
      <Component {...pageProps} />
    </div>
  )
}
