import { Container, DishFooter } from './styles'

import DishThumbnail from './DishThumbnail'
import DishName from './DishName'
import DishDescription from './DishDescription'
import DishSize from './DishSize'
import DishCategory from './DishCategory'

export default function DishPreviewCard({ dish, isLoading }) {
  return (
    <Container>
      <DishThumbnail thumbnail={dish.thumbnail} isLoading={isLoading} />
      <DishName name={dish.name} isLoading={isLoading} />
      <DishDescription description={dish.description} isLoading={isLoading} />
      <DishFooter sx={{ marginTop: '8px' }}>
        <DishSize size={dish.size} isLoading={isLoading} />
        <DishCategory category={dish.category} isLoading={isLoading} />
      </DishFooter>
    </Container>
  )
}
