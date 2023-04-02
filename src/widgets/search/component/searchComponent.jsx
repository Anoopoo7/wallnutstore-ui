import {
  Button,
  Card,
  Col,
  Container,
  FormGroup,
  Input,
  Label,
  Row,
} from 'reactstrap'

const SearchComponent = ({
  setEnableSearch,
  handleChange,
  results,
  router,
}) => {
  const { a, b } = results || {}
  return (
    <div
      className="search-outer"
      onMouseLeave={() => setEnableSearch(false)}
      handleTouchEnd={() => setEnableSearch(false)}
    >
      <Container>
        <Card className="ps-2 pb-2 pe-2 ps-lg-5 pe-lg-5 pb-lg-5">
          <div className="p-lg-5">
            <FormGroup className="mt-2 d-flex justify-content-center">
              <Input
                id="chnage name"
                name="text"
                type="text"
                onChange={handleChange}
                placeholder="search the products you wants"
              />
              <Button className="ms-1 bg-light">
                <img
                  src="https://img.icons8.com/ios-glyphs/24/null/search--v1.png"
                  alt="search"
                />
              </Button>
            </FormGroup>
          </div>
          <Row>
            <Col md="12" lg="6">
              {a &&
                Array.isArray(a) &&
                a.map((each, i) => (
                  <div
                    className="mt-1 ms-3 d-flex align-items-center border p-3 pointer"
                    key={i}
                    onClick={()=>router.push(each?.pageUrl)}
                  >
                    <div className="box-100">
                      <img
                        className="img-fluid img-fit"
                        src={each?.images?.[0]}
                        alt=""
                      />
                    </div>
                    <div>
                      <p className="ms-3 text-muted">
                        {each?.name?.[router.locale || 'en-in']}
                      </p>
                      <b className="ms-3 text-success">₹ {each?.price}</b>
                    </div>
                  </div>
                ))}
            </Col>
            <Col md="12" lg="6">
              {b &&
                Array.isArray(a) &&
                b.map((each, i) => (
                  <div
                    className="mt-1 ms-3 d-flex align-items-center border p-3 pointer"
                    key={i}
                    onClick={()=>router.push(each?.pageUrl)}
                  >
                    <div className="box-100">
                      <img
                        className="img-fluid"
                        src={each?.images?.[0]}
                        alt=""
                      />
                    </div>
                    <div>
                      <p className="ms-3 text-muted">
                        {each?.name?.[router.locale || 'en-in']}
                      </p>
                      <b className="ms-3 text-success">₹ {each?.price}</b>
                    </div>
                  </div>
                ))}
            </Col>
          </Row>
        </Card>
      </Container>
    </div>
  )
}

export default SearchComponent
