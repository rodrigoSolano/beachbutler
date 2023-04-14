import { Box } from '@mui/material'
import { useRouter } from 'next/router'
import DishPreviewCard from 'components/DishPreviewCard'
import useMenuPreviewDishes from 'features/Menu/hooks/useMenuPreviewDishes'

export default function DishGrid({ section }) {
  const router = useRouter()
  const { dishes, isLoading } = useMenuPreviewDishes({ section: section.value })

  const onClickDish = (dish) => router.push(`/dishDetail?id=${dish.id}`)

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(148px, 1fr))',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 2,
      }}
    >
      {dishes.map((dish) => (
        <DishPreviewCard
          key={dish.id}
          dish={dish}
          isLoading={isLoading}
          showTags={false}
          onClick={onClickDish}
        />
      ))}
    </Box>
  )
}
