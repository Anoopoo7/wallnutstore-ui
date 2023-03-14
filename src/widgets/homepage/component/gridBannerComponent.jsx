/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router'
import { Card, Col, Row } from 'reactstrap'

const GridBannerComponent = ({ payload }) => {
  const gridBannerSettings = payload?.data?.data || {}
  const router = useRouter()
  return (
    <>
      {gridBannerSettings && Array.isArray(gridBannerSettings) && (
        <Row>
          <Col md="8">
            <Card className="p-2 mt-3">
              <img
                className={`img-fluid rounded ${
                  gridBannerSettings[0]?.navigation ? 'pointer' : ''
                }`}
                src={gridBannerSettings[0]?.image}
                alt=""
                onClick={() =>
                  gridBannerSettings[0]?.navigation &&
                  router.push(gridBannerSettings[0]?.url)
                }
              />
            </Card>
          </Col>
          <Col>
            <Row>
              <Col sm="12">
                <Card
                  className={`p-1 mt-2 mt-md-3 ${
                    gridBannerSettings[1]?.navigation ? 'pointer' : ''
                  }`}
                >
                  <img
                    className="img-fluid m-1 rounded"
                    src={gridBannerSettings[1]?.image}
                    alt=""
                    onClick={() =>
                      gridBannerSettings[1]?.navigation &&
                      router.push(gridBannerSettings[1]?.url)
                    }
                  />
                </Card>
              </Col>
              <Col sm="12">
                <Card
                  className={`p-1 mt-2 mt-md-4 ${
                    gridBannerSettings[2]?.navigation ? 'pointer' : ''
                  }`}
                >
                  <img
                    className="img-fluid m-1 rounded"
                    src={gridBannerSettings[2]?.image}
                    alt=""
                    onClick={() =>
                      gridBannerSettings[2]?.navigation &&
                      router.push(gridBannerSettings[2]?.url)
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
