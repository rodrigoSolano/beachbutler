import { useContext } from 'react'

import LoginContext from './LoginContext'

export default function useLoginProvider() {
  const context = useContext(LoginContext)

  if (!context) {
    throw new Error(
      'useLoginContextProvider must be used within a LoginContextProvider'
    )
  }

  return context
}
