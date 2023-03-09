import CarouselBanner from '@use/widgets/homepage/container/carousel'
import GridBanner from '@use/widgets/homepage/container/gridBanner'
import Navbar from '@use/widgets/homepage/container/navbar'
import ProductCarousel from '@use/widgets/homepage/container/productCarousel'
import widgetCodes from './widgetcodes/homeWidgetcodes.json'

const HomepageLayouts = ({ pageContent }) => {
  return (
    Array.isArray(pageContent) &&
    pageContent.map((content) => {
      switch (content?.code) {
        case widgetCodes.NAVBAR:
          return <Navbar payload={content} />
        case widgetCodes.GRID_BANNER:
          return <GridBanner payload={content} />
        case widgetCodes.CAROUSEL_BANNER:
          return <CarouselBanner payload={content} />
        case widgetCodes.PRODUCT_CAROUSEL:
          return <ProductCarousel payload={content} />
        default:
          break
      }
    })
  )
}

export default HomepageLayouts
