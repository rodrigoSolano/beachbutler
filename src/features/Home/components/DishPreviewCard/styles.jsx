import { Box, styled } from '@mui/material'

const Container = styled(Box)(({ theme }) => ({
  width: '100%',
  height: 'auto',
  // aspectRatio: '4/3',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.spacing(1),

  padding: theme.spacing(0.5),

  borderRadius: theme.spacing(1),

  backgroundColor: theme.palette.background.paper,
}))

const DishThumbnail = styled('img')(({ theme }) => ({
  width: '100%',
  height: 'auto',

  objectFit: 'cover',
  objectPosition: 'center',

  // aspectRatio: '4/3',

  borderRadius: theme.spacing(1),
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

const DishSize = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '1.5rem',

  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.125rem',

  backgroundColor: '#FFFFFF',
  borderRadius: theme.spacing(3),
  border: `1px solid ${theme.palette.grey[60]}`,
}))

const DishCategory = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '1.5rem',

  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',

  backgroundColor: '#F7A4B6',
  borderRadius: theme.spacing(3),
}))

export { Container, DishThumbnail, DishFooter, DishSize, DishCategory }
