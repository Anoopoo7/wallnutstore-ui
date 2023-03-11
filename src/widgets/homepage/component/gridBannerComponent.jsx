/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router'
import { Card, Col, Row } from 'reactstrap'

const GridBannerComponent = ({ payload }) => {
  const { images } = payload || {}
  const [img1, img2, img3] = images || []
  const router = useRouter()
  return (
    <>
      <Row>
        <Col md="8">
          <Card className="p-2 mt-3">
            <img
              className={`img-fluid rounded ${
                img1?.navigation ? 'pointer' : ''
              }`}
              src={img1?.image}
              alt=""
              onClick={() =>
                img1?.navigation && router.push(img1?.url)
              }
            />
          </Card>
        </Col>
        <Col>
          <Row>
            <Col sm="12">
              <Card
                className={`p-1 mt-2 mt-md-3 ${
                  img2?.navigation ? 'pointer' : ''
                }`}
              >
                <img
                  className="img-fluid m-1 rounded"
                  src={img2?.image}
                  alt=""
                  onClick={() => img2?.navigation && router.push(img1?.url)}
                />
              </Card>
            </Col>
            <Col sm="12">
              <Card className={`p-1 mt-2 ${img3?.navigation ? 'pointer' : ''}`}>
                <img
                  className="img-fluid m-1 rounded"
                  src={img3?.image}
                  alt=""
                  onClick={() => img3?.navigation && router.push(img1?.url)}
                />
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  )
}

export default GridBannerComponent
