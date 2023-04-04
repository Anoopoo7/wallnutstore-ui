import HomepageLayouts from '@use/layoutHandle/homepageLayouts'
import { Container } from 'reactstrap'
import { getContentByPageType } from '@use/services/pageContentService'
import CommonSeo from '@use/seo/commonseo'

export async function getStaticProps(context) {
  const response = await getContentByPageType('homes')
  if (response && response.success) {
    return {
      props: {
        widgets: response?.data?.widgets || [],
      },
      revalidate: 5, // add revalidate key with value of 2 seconds
    }
  }
}

export default function Home({ widgets, search }) {
  return (
    <Container>
      <CommonSeo />
      <HomepageLayouts widgets={widgets} search={search} />
    </Container>
  )
}
