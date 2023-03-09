/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router'
import Slider from 'react-slick'
import { Card } from 'reactstrap'

const CarouselBannerComponent = ({ payload }) => {
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
    <Card className="p-2 mb">
      <Slider {...settings}>
        {payload?.items?.map((each, index) => (
          <div key={index}>
            <img
              onClick={() => each?.navigation && router.push(each?.url)}
              className={`img-fluid w-100 ${each?.navigation ? 'pointer' : ''}`}
              src={each.image}
              alt=""
            />
          </div>
        ))}
      </Slider>
    </Card>
  )
}

export default CarouselBannerComponent
