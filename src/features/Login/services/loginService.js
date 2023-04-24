// @ts-check
const MOCK_DATA = {
  lastName: 'Solano Martinez',
  roomNumber: '512',
}

const errorMessage = {
  en: 'Sorry, we don’t have this name/number combination registered. If you think this might be an error, please contact the front desk.',
  es: 'Lo sentimos, no tenemos esta combinación de nombre / número registrada. Si cree que esto podría ser un error, comuníquese con la recepción.',
}

/**
 * @description Login service
 * @param {Object} params
 * @param {string} params.lastName
 * @param {string} params.roomNumber
 * @returns {Promise<boolean>}
 */
export default function loginService({ lastName, roomNumber }) {
  return new Promise((resolve, reject) => {
    if (
      lastName === MOCK_DATA.lastName &&
      roomNumber === MOCK_DATA.roomNumber
    ) {
      if (typeof window !== 'undefined') {
        document.cookie = `auth=true; max-age=${60 * 60 * 24 * 365 * 10}`
        document.cookie = `user=${JSON.stringify(MOCK_DATA)}; max-age=${
          60 * 60 * 24 * 365 * 10
        }`
      }
      resolve(true)
    } else {
      const lang = document.cookie.split('NEXT_LOCALE=')[1] || 'en'
      reject(new Error(errorMessage[lang]))
    }
  })
}
