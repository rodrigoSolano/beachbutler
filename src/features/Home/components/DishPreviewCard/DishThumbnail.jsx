import Image from 'next/image'

export default function DishThumbnail({ thumbnail }) {
  return (
    <Image
      src={thumbnail}
      alt={thumbnail}
      width={148}
      height={104}
      style={{ borderRadius: '6px' }}
    />
  )
}
