import { Box, Typography } from '@mui/material'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'

import {
  Container,
  DishThumbnail,
  DishFooter,
  DishSize,
  DishCategory,
} from './styles'

export default function DishPreviewCard({ dish }) {
  return (
    <Container>
      <DishThumbnail src={dish.thumbnail} alt={dish.name} />
      <Typography
        variant="body2"
        color="gray.300"
        textAlign="left"
        fontWeight={700}
      >
        {dish.name}
      </Typography>
      <Box sx={{ width: '100%', maxHeight: '2rem' }}>
        <Typography
          variant="button"
          color="gray.200"
          textAlign="left"
          textTransform="none"
          component="p"
          fontWeight={400}
          sx={{
            display: 'block',
            textOverflow: 'ellipsis',
            wordWrap: 'break-word',
            overflow: 'hidden',
            maxHeight: '2rem',
            lineHeight: '1rem',
          }}
        >
          {dish.description}
        </Typography>
      </Box>
      <DishFooter>
        <DishSize>
          <Typography
            fontSize="0.75rem"
            color="gray.300"
            textTransform="none"
            fontWeight={400}
          >
            {`Size: ${dish.size}`}
          </Typography>
          <PeopleAltIcon color="gray.300" sx={{ fontSize: '14px' }} />
        </DishSize>
        <DishCategory>
          <Typography
            fontSize="0.75rem"
            color="gray.300"
            textTransform="none"
            fontWeight={400}
          >
            {dish.category}
          </Typography>
        </DishCategory>
      </DishFooter>
    </Container>
  )
}
