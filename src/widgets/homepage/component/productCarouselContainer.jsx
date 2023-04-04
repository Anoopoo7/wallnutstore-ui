import ProductCardComponent from '@use/widgets/product/component/productCardComponent'
var $ = require('jquery')
if (typeof window !== 'undefined') {
  window.$ = window.jQuery = require('jquery')
}

import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'

import dynamic from 'next/dynamic'
const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
  ssr: false,
})

const responsive = {
  0: {
    items: 1.1,
    margin: 15,
  },
  390: {
    items: 1.2,
    margin: 15,
  },
  420: {
    items: 1.4,
    margin: 15,
  },
  500: {
    items: 1.6,
    margin: 15,
  },
  768: {
    items: 2.2,
    margin: 15,
  },
  992: {
    items: 3.1,
    margin: 15,
  },
  1200: {
    items: 3.6,
    margin: 15,
  },
  1402: {
    items: 4.1,
    margin: 15,
  },
}

const ProductCarouselComponent = ({ payload }) => {
  const { contents, active } = payload
  return (
    <div className='basic-widget'>
      {active && (
        <OwlCarousel
          responsiveClass={true}
          lazyLoad={true}
          autoplay={true}
          responsive={responsive}
          stopOnHover={true}
          loop={true}
        >
          {contents &&
            Array.isArray(contents) &&
            contents.map((each, i) => (
              <ProductCardComponent data={each} key={i} />
            ))}
        </OwlCarousel>
      )}
    </div>
  )
}

export default ProductCarouselComponent
