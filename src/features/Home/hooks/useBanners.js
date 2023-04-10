import { useCallback, useEffect, useState } from 'react'
import getBannersService from '../services/getBannersService'
import bannersAdapter from '../adapters/bannersAdapter'

export default function useBanners() {
  const [banners, setBanners] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const fetchBanners = useCallback(async () => {
    setIsLoading(true)
    try {
      const data = await getBannersService({})
      const parsedData = await bannersAdapter(data)
      setBanners(parsedData)
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchBanners()
  }, [fetchBanners])

  return {
    banners,
    isLoading,
  }
}
