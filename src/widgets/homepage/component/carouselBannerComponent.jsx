import Slider from 'react-slick'
import { Card } from 'reactstrap'

const CarouselBannerComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    lazyLoad: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }
  return (
    <Card className="p-2 mt-3 mb-3">
      <Slider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
      </Slider>
    </Card>
  )
}

export default CarouselBannerComponent
