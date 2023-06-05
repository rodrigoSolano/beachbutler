const DEFAULT_PROFILE_INFORMATION = {
  lastName: 'Solano Martinez',
  roomNumber: 512,
  phoneNumber: '555-555-5555',
  email: 'rodrigo.solano@bluepixel.mx',
}

export default async function getProfileInformationService() {
  return DEFAULT_PROFILE_INFORMATION
}
