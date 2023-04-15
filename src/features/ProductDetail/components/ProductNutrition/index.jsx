import { Box, Stack, Typography } from '@mui/material'
import NutritionChip from './NutritionChip'

export default function ProductNutrition({ nutrition = [] }) {
  return (
    <Box p={2}>
      <Typography variant="body1" color="grey.500" fontWeight={700}>
        Información nutricional
      </Typography>
      <Stack direction="row" flexWrap="wrap" gap={0.5} mt={2}>
        {nutrition.map((n) => (
          <NutritionChip key={n.name} nutrition={n} />
        ))}
      </Stack>
    </Box>
  )
}
