import { useState, useEffect } from 'react'
import getPreviewProductsService from '../services/getPreviewProductsService'

export default function usePreviewProducts({ section }) {
  const [products, setProducts] = useState([1, 2, 3, 4])
  const [isLoading, setIsLoading] = useState(true)

  const fetchProducts = async () => {
    setIsLoading(true)
    try {
      const response = await getPreviewProductsService({
        filter: { section },
      })
      setProducts(response)
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchProducts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [section])

  return { products, isLoading }
}
