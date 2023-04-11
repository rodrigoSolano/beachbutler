import { Box, Skeleton, Typography, styled } from '@mui/material'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'

const Container = styled(Box)(({ theme }) => ({
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

export default function DishSize({ size, isLoading }) {
  if (isLoading)
    return (
      <Skeleton
        variant="rectangular"
        width={72}
        height={24}
        sx={{ borderRadius: '24px' }}
      />
    )

  return (
    <Container>
      <Typography
        fontSize="0.75rem"
        color="gray.300"
        textTransform="none"
        fontWeight={400}
      >
        {`Size: ${size}`}
      </Typography>
      <PeopleAltIcon color="gray.300" sx={{ fontSize: '14px' }} />
    </Container>
  )
}
