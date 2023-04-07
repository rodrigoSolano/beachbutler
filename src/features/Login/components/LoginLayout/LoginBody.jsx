import { Box, styled } from '@mui/material'

const LoginBody = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.grey['35'],
  padding: `${theme.spacing(3)} ${theme.spacing(2)}`,
  height: 'calc(100vh - 4.5rem - 3.5rem)',
}))

export default LoginBody
