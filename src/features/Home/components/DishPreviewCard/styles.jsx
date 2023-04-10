import { Box, styled } from '@mui/material'

const Container = styled(Box)(({ theme }) => ({
  width: '156px',
  height: '237px',
  padding: '4px',
  borderRadius: theme.spacing(1),
  backgroundColor: theme.palette.common.white,
  boxSizing: 'border-box',
}))

const DishFooter = styled(Box)(({ theme }) => ({
  width: '100%',
  height: 'auto',
  minHeight: '1.5rem',

  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: theme.spacing(0.5),

  marginTop: theme.spacing(0.25),
  marginBottom: theme.spacing(0.25),
}))

export { Container, DishFooter }
