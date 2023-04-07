import Image from 'next/image'
import { Typography } from '@mui/material'

import Container from './styles'

export default function LanguageButton({
  name = 'English',
  keyLang = 'en',
  onClick = () => {},
  isSelected = false,
}) {
  return (
    <Container isSelected={isSelected} onClick={onClick}>
      <Image
        width={48}
        height={48}
        src={`/icons/flags/${keyLang}.svg`}
        alt={`${name} flag`}
      />
      <Typography variant="body1" fontWeight={700}>
        {name}
      </Typography>
    </Container>
  )
}
