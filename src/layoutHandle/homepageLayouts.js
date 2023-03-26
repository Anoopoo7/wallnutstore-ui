import CarouselBanner from '@use/widgets/homepage/container/carousel'
import Footer from '@use/widgets/homepage/container/footer'
import GridBanner from '@use/widgets/homepage/container/gridBanner'
import Navbar from '@use/widgets/homepage/container/navbar'
import ProductCarousel from '@use/widgets/homepage/container/productCarousel'
import widgetCodes from './widgetcodes/homeWidgetcodes.json'

const HomepageLayouts = ({ widgets, search }) => {
  return (
    <>
      {Array.isArray(widgets) &&
        widgets.map((content) => {
          switch (content?.code) {
            case widgetCodes.NAVBAR:
              return <Navbar payload={content} search={search} />
            case widgetCodes.GRID_BANNER:
              return <GridBanner payload={content} />
            case widgetCodes.CAROUSEL_BANNER:
              return <CarouselBanner payload={content} />
            case widgetCodes.PRODUCT_CAROUSEL:
              return <ProductCarousel payload={content} />
            case widgetCodes.FOOTER:
              return <Footer payload={content} />
            default:
              break
          }
        })}
      <Footer /> {/* TODO: needs to integrate footer with RA  */}
    </>
  )
}

export default HomepageLayouts
