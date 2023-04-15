import { useRef } from 'react'
import { useRouter } from 'next/router'
import { Box, IconButton, styled } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

import useScrollListener from 'hooks/useScrollListener'

const Container = styled(Box)(() => ({
  width: '100%',
  maxWidth: '600px',
  height: '56px',
  background:
    'linear-gradient(180deg, #000000 -83.93%, rgba(0, 0, 0, 0) 98.51%)',
  padding: '16px',

  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',

  position: 'fixed',
  top: 0,
  zIndex: 10,

  transition: 'all 0.3s ease-in-out',
}))

export default function TopReturnBar() {
  const ref = useRef()
  const router = useRouter()
  const styles = { opacity: '0' }

  useScrollListener(ref, 56, styles)

  const back = () => router.back()

  return (
    <Container ref={ref}>
      <IconButton onClick={back}>
        <ArrowBackIcon color="white" />
      </IconButton>
    </Container>
  )
}
