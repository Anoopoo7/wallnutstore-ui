import instance from "./api"

const getContentByPageType = async (pageType = 'home') => {
  const response = await instance.get(`/v1/content/${pageType}`)
  if (response && response.data) {
    return response.data
  }
  return null
}
export { getContentByPageType }
