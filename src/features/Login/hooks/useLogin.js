// @ts-check
import { useRouter } from 'next/router'
import { useState } from 'react'
import loginService from '../services/loginService'

// returns
/**
 * @typedef {Object} LoginHook
 * @property {function({lastName: string, roomNumber: string}): Promise<boolean>} login
 * @property {boolean} isLoading
 * @property {boolean} success
 * @property {boolean} error
 * @property {string} errorMessage
 * @property {function(): void} clearError
 */

/**
 * @description Hook to handle login
 * @returns {LoginHook}
 */
export default function useLogin() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(null)
  const [errorMessage, setErrorMessage] = useState()

  /**
   * @description Clear error
   * @returns {void}
   */
  function clearError() {
    setError(null)
  }

  /**
   * @description Login function
   * @param {Object} params
   * @param {string} params.lastName Last name
   * @param {string} params.roomNumber Room number
   * @returns {Promise<boolean>}
   */
  // eslint-disable-next-line consistent-return
  async function login({ lastName, roomNumber }) {
    setIsLoading(true)
    try {
      await loginService({
        lastName,
        roomNumber,
      })
      setSuccess(true)
      router.replace('/dietRestrictions')
      return true
    } catch (e) {
      setError(true)
      setErrorMessage(e.message)
    } finally {
      setIsLoading(false)
    }
  }

  return {
    login,
    isLoading,
    success,
    error,
    errorMessage,
    clearError,
  }
}
