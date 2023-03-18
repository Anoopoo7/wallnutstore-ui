/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link'
import { Card, Col, Row } from 'reactstrap'

const FooterComponent = ({ payload }) => {
  const { t } = useTranslation('common')
  const { changeLocale, footerLinks } = payload
  return (
    <>
      <Card className="p-1 p-lg-2 font-itim basic-widget footer">
        <div className="d-flex justify-content-between mb-5">
          <div className="ms-3 mt-5">
            <h5>{t('join_with_us')}</h5>
            <Link href="/ppp">
              <img src="https://img.icons8.com/color/36/null/facebook.png" />
            </Link>
            <Link href="/ppp">
              <img src="https://img.icons8.com/fluency/36/null/instagram-new.png" />
            </Link>
            <Link href="/ppp">
              <img src="https://img.icons8.com/color/36/null/twitter--v1.png" />
            </Link>
          </div>
          <div className="me-3 mt-5">
            <h5>{t('we_accept')}</h5>
            <img src="https://img.icons8.com/color-glass/36/null/visa.png" />
            <img src="https://img.icons8.com/color/32/null/google-pay-india.png" />
          </div>
        </div>
        <Row className="ms-3 me-3">
          {footerLinks &&
            Array.isArray(footerLinks) &&
            footerLinks.map((each, i) => (
              <Col key={i} sm="12" md="3">
                <h4>{each.heading}</h4>
                <br />
                {each?.items?.map((ltem, i) => (
                  <p key={i}>
                    <Link
                      className="text-dark text-decoration-none"
                      href={ltem?.link}
                    >
                      <span className="hover-red">{ltem?.name}</span>
                    </Link>
                  </p>
                ))}
              </Col>
            ))}
        </Row>
        <div className="d-flex bg-dark rounded text-light p-4 justify-content-between">
          <div className="d-flex">
            <h6 className="me-2 text-secondary">Language</h6>
            <h6
              className="me-2 pointer hover-red"
              onClick={() => changeLocale('en-in')}
            >
              English
            </h6>
            |
            <h6
              className="ms-2 pointer hover-red"
              onClick={() => changeLocale('ml-in')}
            >
              Malayalam
            </h6>
          </div>
          <h6 className="d-none d-md-block">All rights received | 2023</h6>
        </div>
      </Card>
    </>
  )
}

export default FooterComponent
