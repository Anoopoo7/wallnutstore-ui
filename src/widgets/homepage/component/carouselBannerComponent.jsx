/* eslint-disable @next/next/no-img-element */
import { TransilationProvider } from '@use/utils/TransilationProvider'
import { useRouter } from 'next/router'
import Slider from 'react-slick'
import { Card } from 'reactstrap'

const CarouselBannerComponent = ({ payload }) => {
  const { contents } = payload || {}
  const router = useRouter()
  const settings = {
    dots: true,
    infinite: true,
    lazyLoad: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  }

  return (
    <Card className="p-2 mt-1 mt-md-1">
      <Slider {...settings}>
        {contents &&
          Array.isArray(contents) &&
          contents.map((each, index) => (
            <>
              {each.active && (
                <div key={index}>
                  <img
                    onClick={() =>
                      each?.spec?.navigate &&
                      router.push(each?.spec?.redirect_url)
                    }
                    className={`img-fluid w-100 ${
                      each?.spec?.navigate ? 'pointer' : ''
                    }`}
                    src={TransilationProvider(each.spec?.image)}
                    alt={each.name}
                  />
                </div>
              )}
            </>
          ))}
      </Slider>
    </Card>
  )
}

export default CarouselBannerComponent
