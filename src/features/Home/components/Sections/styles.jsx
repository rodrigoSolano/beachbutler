import { Box, styled } from '@mui/material'

const Wrapper = styled(Box)(({ theme }) => ({
  position: 'sticky',
  top: 72,

  marginTop: theme.spacing(3),
  marginRight: theme.spacing(-2),
  marginLeft: theme.spacing(-2),

  overflow: 'scroll',
  whiteSpace: 'nowrap',

  scrollBehavior: 'smooth',
  '&::-webkit-scrollbar': {
    display: 'none',
  },

  borderBottom: `1px solid ${theme.palette.grey[60]}`,
  transition: 'background-color 0.3s ease-in-out',
  backgroundColor: 'transparent',
  zIndex: 10,
}))

const Container = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '2.1875rem',

  overflow: 'scroll',
  whiteSpace: 'nowrap',
  scrollBehavior: 'smooth',

  paddingLeft: theme.spacing(2),

  '&::-webkit-scrollbar': {
    display: 'none',
  },

  display: 'table',
}))

const SectionContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'isActive',
})(({ theme, isActive }) => ({
  width: 'fit-content',
  padding: '0 0.5rem',

  display: 'table-cell',
  verticalAlign: 'middle',
  textAlign: 'center',

  ...(isActive && {
    color: theme.palette.primary.main,
    borderBottom: `2px solid ${theme.palette.primary.main}`,
  }),
}))

export { Wrapper, Container, SectionContainer }
