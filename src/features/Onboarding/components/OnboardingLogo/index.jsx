import Image from 'next/image'

export default function OnboardingLogo() {
  return (
    <Image
      src="/logos/beachbutler_logo.png"
      width={150}
      height={80}
      alt="beachbutler logo"
      style={{ margin: '0 auto', marginTop: '36px' }}
      priority
    />
  )
}
