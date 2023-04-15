const MOCK_DATA = {
  lastName: 'Solano Martinez',
  roomNumber: '512',
}

export default function loginService({ lastName, roomNumber }) {
  return new Promise((resolve, reject) => {
    if (
      lastName === MOCK_DATA.lastName &&
      roomNumber === MOCK_DATA.roomNumber
    ) {
      if (typeof window !== 'undefined') {
        document.cookie = 'auth=true'
        document.cookie = `user=${JSON.stringify(MOCK_DATA)}`
      }
      resolve(true)
    } else {
      reject(new Error('Invalid credentials'))
    }
  })
}
