import { useRouter } from 'next/router'

const TransilationProvider = (image) => {
  const router = useRouter()
  return image[router?.locale]
}

export { TransilationProvider }
