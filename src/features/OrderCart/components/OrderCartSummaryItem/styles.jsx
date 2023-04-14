import { Box, styled } from '@mui/material'

const Container = styled(Box)(() => ({
  width: '100%',
  height: 'auto',
  padding: '8px',
  borderRadius: '8px',
  backgroundColor: '#fff',

  display: 'grid',
  gridTemplateColumns: '30% auto',
  gap: '8px',

  position: 'relative',
}))

// eslint-disable-next-line import/prefer-default-export
export { Container }
