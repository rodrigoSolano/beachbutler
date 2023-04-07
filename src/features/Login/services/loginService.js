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
      resolve(true)
    } else {
      reject(new Error('Invalid credentials'))
    }
  })
}
