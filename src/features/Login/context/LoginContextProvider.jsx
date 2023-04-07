import { useState, useMemo } from 'react'

import LoginContext from './LoginContext'
import loginService from '../services/loginService'

export default function LoginContextProvider({ children }) {
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const login = useMemo(
    () =>
      async ({ lastName, roomNumber }) => {
        setIsLoading(true)

        try {
          await loginService({
            lastName,
            roomNumber,
          })
          setSuccess(true)
        } catch {
          setError(true)
        } finally {
          setIsLoading(false)
        }
      },
    []
  )

  const value = useMemo(
    () => ({
      login,
      error,
      isLoading,
      success,
    }),
    [error, isLoading, success, login]
  )

  return <LoginContext.Provider value={value}>{children}</LoginContext.Provider>
}
