// @ts-check
import Image from 'next/image'

export default function OnboardingLogo({ width = 150, height = 80 }) {
  return (
    <Image
      src="/logos/beachbutler_logo.png"
      width={width}
      height={height}
      alt="beachbutler logo"
      priority
    />
  )
}
