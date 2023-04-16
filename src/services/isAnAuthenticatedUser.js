export default function isAnAuthenticatedUser(request) {
  const cookie = request.cookies.get('auth')?.value

  return cookie === 'true'
}
