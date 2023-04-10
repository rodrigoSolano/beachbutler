import { useState, useEffect } from 'react'
import getPreviewDishesService from '../services/getPreviewDishesService'

export default function usePreviewDishes({ section }) {
  const [dishes, setDishes] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const fetchDishes = async () => {
    setIsLoading(true)
    try {
      const response = await getPreviewDishesService({
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
