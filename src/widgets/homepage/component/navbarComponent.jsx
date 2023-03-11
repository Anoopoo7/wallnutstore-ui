/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import { Card } from 'reactstrap'
import useTranslation from 'next-translate/useTranslation'

const NavbarComponent = ({ payload }) => {
  const { t } = useTranslation('common')
  const { name, navlinks } = payload
  return (
    <Card className="p-1 p-lg-2 font-itim mt-3 mb-1">
      <div className="d-flex justify-content-between">
        <h5 className="m-2 pointer">{t('site_logo')}</h5>
        <div className="navlinks d-flex mt-1">
          {Array.isArray(navlinks) &&
            navlinks.map((link) => (
              <div className="nav-icon border ms-1 me-1 p-1 rounded pointer hover-red">
                <img src={link} alt={link} />
              </div>
            ))}
        </div>
      </div>
    </Card>
  )
}

export default NavbarComponent
