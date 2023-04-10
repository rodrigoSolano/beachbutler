import { Container, DishFooter } from './styles'

import DishThumbnail from './DishThumbnail'
import DishName from './DishName'
import DishDescription from './DishDescription'
import DishSize from './DishSize'
import DishCategory from './DishCategory'

export default function DishPreviewCard({ dish }) {
  return (
    <Container>
      <DishThumbnail thumbnail={dish.thumbnail} />
      <DishName name={dish.name} />
      <DishDescription description={dish.description} />
      <DishFooter sx={{ marginTop: '8px' }}>
        <DishSize size={dish.size} />
        <DishCategory category={dish.category} />
      </DishFooter>
    </Container>
  )
}
