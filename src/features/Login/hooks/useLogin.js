import { useRouter } from 'next/router'
import { useState } from 'react'
import loginService from '../services/loginService'

export default function useLogin() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(null)

  const login = async ({ lastName, roomNumber }) => {
    setIsLoading(true)
    try {
      await loginService({
        lastName,
        roomNumber,
      })
      setSuccess(true)
      router.push('/allergies')
    } catch {
      setTimeout(() => setError(null), 3000)
      setError(true)
    } finally {
      setIsLoading(false)
    }
  }

  return {
    login,
    isLoading,
    success,
    error,
  }
}
