import { Card } from 'reactstrap'
import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'

const NavbarComponent = ({ payload, search }) => {
  const { setEnableSearch } = search || {}
  const { spec = {}, active } = payload?.contents?.[0] || {}
  const { enable_cart, enable_profile, enable_search, enable_wishlist } = spec
  const { t } = useTranslation('common')
  return (
    <>
      {active && (
        <Card className="p-1 p-lg-2 font-itim basic-widget">
          <div className="d-flex justify-content-between">
            <h5 className="m-2 pointer">{t('site_logo')}</h5>
            <div className="navlinks d-flex mt-1">
              {enable_search && (
                <div
                  onClick={() => setEnableSearch((prev) => !prev)}
                  className="nav-icon border ms-1 me-1 p-1 rounded pointer hover-red"
                >
                  <Image
                    width={24}
                    height={24}
                    src="https://img.icons8.com/ios-glyphs/24/null/search--v1.png"
                    alt="search"
                  />
                </div>
              )}
              {enable_profile && (
                <div className="nav-icon border ms-1 me-1 p-1 rounded pointer hover-red">
                  <Image
                    width={24}
                    height={24}
                    src="https://img.icons8.com/material-sharp/24/null/person-male.png"
                    alt="search"
                  />
                </div>
              )}
              {enable_wishlist && (
                <div className="nav-icon border ms-1 me-1 p-1 rounded pointer hover-red">
                  <Image
                    width={24}
                    height={24}
                    src="https://img.icons8.com/material-sharp/24/null/like--v1.png"
                    alt="search"
                  />
                </div>
              )}
              {enable_cart && (
                <div className="nav-icon border ms-1 me-1 p-1 rounded pointer hover-red">
                  <Image
                    width={24}
                    height={24}
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
