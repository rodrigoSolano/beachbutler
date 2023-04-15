import { useState } from 'react'
import { List, Typography } from '@mui/material'

import {
  Collapse,
  CollapseButton,
  CollapseContent,
  CollapseHeader,
  CollapseTitle,
} from 'components/Collapse'

export default function ProductIngredientList({ ingredients = [] }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Collapse>
      <CollapseHeader onClick={() => setIsOpen(!isOpen)}>
        <CollapseTitle title="Ingredients" />
        <CollapseButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
      </CollapseHeader>
      <CollapseContent isOpen={isOpen}>
        <List component="ul" sx={{ listStyle: 'inside' }} disablePadding>
          {ingredients.map((ingredient) => (
            <Typography color="grey.200" component="li" key={ingredient}>
              {ingredient}
            </Typography>
          ))}
        </List>
      </CollapseContent>
    </Collapse>
  )
}
