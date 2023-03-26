import { algolia_apiKey, algolia_app_id } from '@use/config'
import axios from 'axios'

const searchService = async (query) => {
  var config = {
    method: 'get',
    url: `https://C7CB22IUYP-dsn.algolia.net/1/indexes/wallnuts_dev_products?query=${query}`,
    headers: {
      'X-Algolia-API-Key': algolia_apiKey,
      'X-Algolia-Application-Id': algolia_app_id,
    },
  }
  const response = await axios(config)
  if (response?.data?.hits && Array.isArray(response?.data?.hits)){
    return response?.data?.hits
  }
}
export { searchService }
