import 'bootstrap/dist/css/bootstrap.css'
import '@use/styles/globals.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function App({ Component, pageProps }) {
  return (
    <div className="bg-secondary pt-2">
      <Component {...pageProps} />
    </div>
  )
}
