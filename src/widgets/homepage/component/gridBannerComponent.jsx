/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router'
import { Card, Col, Row } from 'reactstrap'
import { TransilationProvider } from '@use/utils/TransilationProvider'

const GridBannerComponent = ({ payload }) => {
  const bannner = payload?.contents || []
  const router = useRouter()
  return (
    <>
      {bannner && Array.isArray(bannner) && (
        <Row className='basic-widget'>
          <Col md="8">
            <Card className="p-2">
              <img
                className={`grid-banner-1 img-fluid rounded ${
                  bannner?.[0]?.spec?.navigate ? 'pointer' : ''
                }`}
                src={TransilationProvider(bannner?.[0]?.spec?.image)}
                alt=""
                onClick={() =>
                  bannner?.[0]?.spec?.navigate &&
                  router.push(bannner?.[0]?.spec?.redirect_url)
                }
              />
            </Card>
          </Col>
          <Col>
            <Row>
              <Col sm="12">
                <Card
                  className={`p-2 overflow-hidden ${
                    bannner?.[1]?.spec?.navigate ? 'pointer' : ''
                  }`}
                >
                  <img
                    className="img-fluid overflow-hidden rounded grid-banner-2"
                    src={TransilationProvider(bannner?.[1]?.spec?.image)}
                    alt=""
                    onClick={() =>
                      bannner?.[1]?.spec?.navigate &&
                      router.push(bannner?.[2]?.spec?.redirect_url)
                    }
                  />
                </Card>
              </Col>
              <Col sm="12">
                <Card
                  className={`p-2 mt-2 mt-md-2 ${
                    bannner?.[2]?.spec?.navigate ? 'pointer' : ''
                  }`}
                >
                  <img
                    className="img-fluid rounded grid-banner-2"
                    src={TransilationProvider(bannner?.[2]?.spec?.image)}
                    alt=""
                    onClick={() =>
                      bannner?.[2]?.spec?.navigate &&
                      router.push(bannner?.[2]?.spec?.redirect_url)
                    }
                  />
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      )}
    </>
  )
}

export default GridBannerComponent
