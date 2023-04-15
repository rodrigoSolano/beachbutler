import { Box, Typography, styled } from '@mui/material'

const Container = styled(Box)(({ theme }) => ({
  width: 'fit-content',
  minWidth: '60px',
  height: 'auto',
  padding: '8px',
  backgroundColor: theme.palette.grey[35],
  borderRadius: '8px',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
}))

export default function NutritionChip({ nutrition }) {
  return (
    <Container p={2}>
      <Typography variant="body2" color="grey.500">
        {nutrition.name}
      </Typography>
      <Typography variant="body2" color="grey.500" fontWeight={500}>
        {`${nutrition.value} ${nutrition.unit}`}
      </Typography>
    </Container>
  )
}
