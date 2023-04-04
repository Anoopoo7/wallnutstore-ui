/* eslint-disable @next/next/no-img-element */
import { TransilationProvider } from '@use/utils/TransilationProvider'
import Image from 'next/image'
import { useRouter } from 'next/router'

const ProductCardComponent = ({ data }) => {
  const { image, spec, active } = data || {}
  const router = useRouter()
  return (
    <>
      {active && (
        <div className="product-card-outer">
          <div className="d-flex justify-content-between p-2">
            {spec?.badge ? (
              <p className="bg-danger ps-2 pe-2 rounded text-light">
                {spec?.badge}% Off
              </p>
            ) : (
              <i></i>
            )}
            <p>
              <img
                src="https://img.icons8.com/material-sharp/24/null/like--v1.png"
                alt="wishlist"
                className="pointer"
              />
            </p>
          </div>
          <div
            className="img-center-product-card"
            onClick={() => router.push(spec?.redirect_url)}
          >
            <Image
              width={1000}
              height={1000}
              src={spec?.image?.[0]}
              alt={image}
              className="img-fluid p-4"
            />
          </div>
          <div className="mt-3">
            <l className="font-itim ms-3 mt-5">
              {TransilationProvider(spec?.name).slice(0, 25)}
            </l>
            <div className="d-flex justify-content-between">
              <p className="font-itim ms-3 mt-2">₹ {spec?.price} </p>
              <div className="me-3">
                <img
                  src="https://img.icons8.com/material-sharp/20/null/shopping-cart.png"
                  alt=""
                  className="p-2 border rounded"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ProductCardComponent
