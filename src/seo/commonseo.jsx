import Head from 'next/head'

const CommonSeo = () => {
  return (
    <Head>
      <title>Home | My Website</title>
      <meta property="og:type" content="Wallnutstores" />
      <meta property="og:url" content="https://www.mozanta.com/" />
      <meta
        property="og:image:url"
        content="https://wallnutstores.netlify.app/images/fav.png"
      />
      <meta property="og:description" content="eCommerce store" />
      <meta
        property="og:image"
        content="https://wallnutstores.netlify.app/images/fav.png"
      />
      <meta property="og:image:type" content="image/svg" />
      <meta property="og:image:width" content="200" />
      <meta property="og:image:height" content="200" />
      <meta property="og:site_name" content="Wallnutstores" />
      <title>Home | Wallnutstores</title>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#fff" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta
        name="keywords"
        content="sell,buy, products, low prices, offers, quality, Instagram, clothing, accessories, home goods, electronics, toys, beauty products, affordable prices."
      />
      <meta
        property="og:title"
        content="WallnutStores - Your One-Stop Shop for Quality Products at Unbeatable Prices"
      />
      <meta
        name="description"
        content="Shop at WallnutStores for a wide range of high-quality products at unbeatable prices! Enjoy exclusive deals and offers on all types of products from fashion to electronics. Get the best value for your money with our affordable prices and fast shipping. Discover your next great find today!"
      />
      <meta property="og:url" content="https://wallnutstores.netlify.app/" />
      <meta property="og:site_name" content="Wallnutstores" />
      <link
        rel="icon"
        href="https://wallnutstores.netlify.app/images/fav.png"
        type="image/x-icon"
      />
      <link
        rel="shortcut icon"
        href="https://wallnutstores.netlify.app/images/fav.png"
        type="image/x-icon"
      />
    </Head>
  )
}

export default CommonSeo
