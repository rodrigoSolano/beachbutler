import { Stack, Typography } from '@mui/material'

import StarBorderIcon from '@mui/icons-material/StarBorder'

export default function OrderRating({ rating }) {
  return (
    <Stack direction="row" alignItems="center" gap={0.1}>
      <StarBorderIcon fontSize="small" sx={{ color: '#FFCB00' }} />
      <Typography fontSize={12} color="grey.100">
        {rating}
      </Typography>
    </Stack>
  )
}
