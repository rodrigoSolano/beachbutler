import { createContext } from 'react'

const LoginContext = createContext({
  checkGuest: () => {},
  login: () => {},
  lastName: '',
  roomNumber: '',
  allergies: [],
  dietRestrictions: [],
})

export default LoginContext
