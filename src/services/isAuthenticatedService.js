export default function isAuthenticatedService(request) {
  const cookie = request.cookies.get('auth')?.value

  return cookie === 'true'
}
