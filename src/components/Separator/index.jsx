import { Box, styled } from '@mui/material'

const Separator = styled(Box)(({ theme }) => ({
  width: '100%',
  height: 1,
  backgroundColor: theme.palette.white.main,
}))

export default Separator
