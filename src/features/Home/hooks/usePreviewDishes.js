import { useState, useEffect } from 'react'
import getPreviewDishesService from '../services/getPreviewDishesService'

export default function usePreviewDishes({ sectionId }) {
  const [dishes, setDishes] = useState([])

  const fetchDishes = async () => {
    const response = await getPreviewDishesService({})
    setDishes(response)
  }

  useEffect(() => {
    fetchDishes()
  }, [sectionId])

  return { dishes }
}
