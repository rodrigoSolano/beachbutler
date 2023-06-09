import { Box, Button, styled } from '@mui/material'

const BottomNavigationBarContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100%',
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',

  backgroundColor: theme.palette.common.white,

  boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.08)',
  borderRadius: '16px 16px 0 0',
}))

const BottomNavLinkButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== 'isActive',
})(({ theme, isActive }) => ({
  width: '100%',
  height: '100%',

  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center',

  color: theme.palette.grey[100],

  borderRadius: 0,

  '&:hover': {
    backgroundColor: 'transparent',
  },

  ...(isActive && {
    color: theme.palette.primary.main,
    fontWeight: 700,
  }),
}))

export { BottomNavigationBarContainer, BottomNavLinkButton }
