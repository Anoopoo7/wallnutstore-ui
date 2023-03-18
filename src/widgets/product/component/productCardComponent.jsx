import { TransilationProvider } from '@use/utils/TransilationProvider'
import { useRouter } from 'next/router'

/* eslint-disable @next/next/no-img-element */
const ProductCardComponent = ({ data }) => {
  console.log(data)
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
            onClick={() => router.push(url)}
          >
            <img
              src={TransilationProvider(spec?.image)}
              alt={image}
              className="img-fluid p-4"
            />
          </div>
          <div className="mt-3">
            <l className="font-itim ms-3 mt-5">
              {TransilationProvider(spec?.name)}
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
