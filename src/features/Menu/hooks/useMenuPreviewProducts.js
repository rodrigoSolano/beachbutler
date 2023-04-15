import { useState, useEffect } from 'react'
import getMenuPreviewProductsService from '../services/getMenuPreviewProductsService'

export default function useMenuPreviewProducts({ section }) {
  const [products, setProducts] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  const [isLoading, setIsLoading] = useState(true)

  const fetchProducts = async () => {
    setIsLoading(true)
    try {
      const response = await getMenuPreviewProductsService({
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
