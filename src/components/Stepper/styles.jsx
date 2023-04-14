import { Box, styled } from '@mui/material'

const Container = styled(Box)(() => ({
  width: '100%',
  height: 'auto',
  marginTop: '16px',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row',
  justifyContent: 'space-between',
}))

const StepCircle = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'status',
})(({ theme, status }) => ({
  width: '16px',
  height: '16px',
  borderRadius: '50%',
  zIndex: 1,
  marginLeft: '-1px',

  '&:first-of-type': {
    marginLeft: '0px',
  },
  ...(status === 'finalized' && {
    backgroundColor: theme.palette.primary[400],
  }),
  ...(status === 'inProgress' && {
    backgroundColor: '#CCE9E8',
    border: `2px solid ${theme.palette.primary[400]}`,
  }),
  ...(status === 'pending' && {
    backgroundColor: '#CCE9E8',
  }),
}))

const StepLine = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'status',
})(({ theme, status }) => ({
  width: '17px',
  height: '4px',
  marginLeft: '-1px',

  '&:last-of-type': {
    display: 'none',
  },

  ...(status === 'finalized' && {
    backgroundColor: theme.palette.primary[400],
  }),
  ...(status === 'inProgress' && {
    backgroundColor: '#CCE9E8',
  }),
  ...(status === 'pending' && {
    backgroundColor: '#CCE9E8',
  }),
}))

export { Container, StepCircle, StepLine }
