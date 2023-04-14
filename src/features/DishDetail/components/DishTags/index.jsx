import { Stack } from '@mui/material'
import DishTag from '../DishTag'

export default function DishTags({ tags }) {
  return (
    <Stack direction="row" gap={1} flexWrap="wrap" mt={1.5}>
      {tags.map((tag) => (
        <DishTag key={tag} tag={tag} />
      ))}
    </Stack>
  )
}
