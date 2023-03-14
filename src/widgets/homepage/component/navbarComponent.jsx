/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import { Card } from 'reactstrap'
import useTranslation from 'next-translate/useTranslation'

const NavbarComponent = ({ payload }) => {
  const { data } = payload || {}
  const navsettings = data?.data || {}
  const { t } = useTranslation('common')
  return (
    <>
      {navsettings.active && (
        <Card className="p-1 p-lg-2 font-itim mt-3 mb-1">
          <div className="d-flex justify-content-between">
            <h5 className="m-2 pointer">{t('site_logo')}</h5>
            <div className="navlinks d-flex mt-1">
              {navsettings.search && (
                <div className="nav-icon border ms-1 me-1 p-1 rounded pointer hover-red">
                  <img
                    src="https://img.icons8.com/ios-glyphs/24/null/search--v1.png"
                    alt="search"
                  />
                </div>
              )}
              {navsettings.profile && (
                <div className="nav-icon border ms-1 me-1 p-1 rounded pointer hover-red">
                  <img
                    src="https://img.icons8.com/material-sharp/24/null/person-male.png"
                    alt="search"
                  />
                </div>
              )}
              {navsettings.wishlist && (
                <div className="nav-icon border ms-1 me-1 p-1 rounded pointer hover-red">
                  <img
                    src="https://img.icons8.com/material-sharp/24/null/like--v1.png"
                    alt="search"
                  />
                </div>
              )}
              {navsettings.cart && (
                <div className="nav-icon border ms-1 me-1 p-1 rounded pointer hover-red">
                  <img
                    src="https://img.icons8.com/material-sharp/24/null/shopping-cart.png"
                    alt="search"
                  />
                </div>
              )}
            </div>
          </div>
        </Card>
      )}
    </>
  )
}

export default NavbarComponent
