/* eslint-disable @next/next/no-img-element */
const ProductCardComponent = ({ data }) => {
  const { badge, image, isWishlisted, name, price } = data || {}
  return (
    <div className="product-card-outer">
      <div className="d-flex justify-content-between p-2">
        {badge ? (
          <p className="bg-danger ps-2 pe-2 rounded text-light">{badge}% Off</p>
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
      <div className="img-center-product-card">
        <img src={image} alt={image} className="img-fluid p-4" />
      </div>
      <div className="mt-3">
        <l className="font-itim ms-3 mt-5">{name}</l>
        <div className="d-flex justify-content-between">
          <p className="font-itim ms-3 mt-2">₹ {price} </p>
          <p className="font-itim me-3">
            <div className="nav-icon border ms-1 me-1 p-1 ps-3 pe-3 rounded pointer">
              <img
                src="https://img.icons8.com/material-sharp/20/null/shopping-cart.png"
                alt=""
              />
            </div>
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProductCardComponent
