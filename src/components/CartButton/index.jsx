import { useRouter } from 'next/router'
import { Stack, Typography } from '@mui/material'
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded'

import { Wrapper, Container, ItemCount } from './styles'

export default function CartButton() {
  const router = useRouter()

  const handleCartButtonClick = () => router.push('/orderCart')

  return (
    <Wrapper>
      <Container onClick={handleCartButtonClick}>
        <Stack direction="row" gap="10px">
          <ShoppingCartRoundedIcon sx={{ fontSize: '18px', color: '#FFF' }} />
          <Typography color="common.white" variant="body2">
            Ver carrito
          </Typography>
        </Stack>
        <ItemCount>
          <Typography color="primary.400" variant="body2" fontWeight={700}>
            1
          </Typography>
        </ItemCount>
      </Container>
    </Wrapper>
  )
}
