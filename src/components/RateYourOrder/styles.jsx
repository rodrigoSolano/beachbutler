import { Box, styled } from '@mui/material'

const Wrapper = styled(Box)(() => ({
  width: '100%',
  height: '48px',
  position: 'fixed',
  bottom: '64px',
  padding: '0 16px',
  maxWidth: '600px',
  transform: 'translateX(-50%)',
  left: '50%',

  zIndex: 20,
}))

const Container = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100%',
  borderRadius: '8px',
  backgroundColor: theme.palette.common.white,

  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0px 4px 0 16px',

  boxShadow:
    '0px 100px 80px rgba(0, 0, 0, 0.07), 0px 41.7776px 33.4221px rgba(0, 0, 0, 0.0503198), 0px 22.3363px 17.869px rgba(0, 0, 0, 0.0417275), 0px 12.5216px 10.0172px rgba(0, 0, 0, 0.035), 0px 6.6501px 5.32008px rgba(0, 0, 0, 0.0282725), 0px 2.76726px 2.21381px rgba(0, 0, 0, 0.0196802)',
}))

// eslint-disable-next-line import/prefer-default-export
export { Wrapper, Container }
