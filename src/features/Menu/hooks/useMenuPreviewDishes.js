import { useState, useEffect } from 'react'
import getMenuPreviewDishesService from '../services/getMenuPreviewDishesService'

export default function useMenuPreviewDishes({ section }) {
  const [dishes, setDishes] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  const [isLoading, setIsLoading] = useState(true)

  const fetchDishes = async () => {
    setIsLoading(true)
    try {
      const response = await getMenuPreviewDishesService({
        filter: { section },
      })
      setDishes(response)
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchDishes()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [section])

  return { dishes, isLoading }
}
