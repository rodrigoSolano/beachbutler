import { Box, Typography, styled } from '@mui/material'

const Container = styled(Box)(() => ({
  width: 'auto',
  height: 'auto',
  padding: '4px 8px',

  borderRadius: '24px',
  backgroundColor: '#F7A4B6',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))

export default function ProductTag({ tag }) {
  return (
    <Container>
      <Typography variant="body2" color="grey.300">
        {tag}
      </Typography>
    </Container>
  )
}
