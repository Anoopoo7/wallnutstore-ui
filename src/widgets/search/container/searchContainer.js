import { searchService } from '@use/services/searchService'
import { useRouter } from 'next/router'
import { useState } from 'react'
import SearchComponent from '../component/searchComponent'

const SearchContainer = ({ setEnableSearch }) => {
  const [results, setResults] = useState({ a: [], b: [] })
  const router = useRouter()

  const handleChange = async (e) => {
    if (e.target.value.length > 3) {
      const response = await searchService(e.target.value)
      const arr1 = []
      const arr2 = []
      response?.forEach((el, i) => {
        if (i % 2 === 0) {
          arr1.push(el)
        } else {
          arr2.push(el)
        }
      })

      setResults({ a: arr1, b: arr2 })
    }else{
        setResults({ a: [], b: [] })
    }
  }
  return (
    <>
      <SearchComponent
        setEnableSearch={setEnableSearch}
        handleChange={handleChange}
        results={results}
        router={router}
      />
    </>
  )
}

export default SearchContainer
