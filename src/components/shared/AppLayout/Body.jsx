import { Box, styled } from '@mui/material'

const Body = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.grey['35'],
  padding: `${theme.spacing(3)} ${theme.spacing(2)} 0 ${theme.spacing(2)}`,
  height: 'calc(100vh - 4.5rem - 3.5rem)',
  overflowY: 'scroll',
  overflowX: 'hidden',
  position: 'relative',
  zIndex: 0,
}))

export default Body
