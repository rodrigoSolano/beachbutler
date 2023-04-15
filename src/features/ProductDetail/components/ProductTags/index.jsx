import { Stack } from '@mui/material'
import ProductTag from '../ProductTag'

export default function ProductTags({ tags }) {
  return (
    <Stack direction="row" gap={1} flexWrap="wrap" mt={1.5}>
      {tags.map((tag) => (
        <ProductTag key={tag} tag={tag} />
      ))}
    </Stack>
  )
}
