import { Box, styled } from '@mui/material'

const LoginFooter = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100%',
  backgroundColor: '#FFFFFF',

  borderTop: `1px solid ${theme.palette.grey['60']}`,
  boxShadow:
    '0px 0px 4px rgba(0, 0, 0, 0.04), 0px -4px 8px rgba(0, 0, 0, 0.06)',

  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  gap: theme.spacing(3),

  padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
  position: 'relative',
  zIndex: 10,
}))

export default LoginFooter
