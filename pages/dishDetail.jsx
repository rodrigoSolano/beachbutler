import { useState } from 'react'
import { Box, Stack } from '@mui/material'

import DishDetailLayout from 'features/DishDetail/components/DishDetailLayout'
import TopReturnBar from 'features/DishDetail/components/TopReturnBar'
import DishDetailBody from 'features/DishDetail/components/DishDetailLayout/Body'
import DishImage from 'features/DishDetail/components/DishImage'
import DishName from 'features/DishDetail/components/DishName'
import DishDescription from 'features/DishDetail/components/DishDescription'
import DishTags from 'features/DishDetail/components/DishTags'
import DishIngredientList from 'features/DishDetail/components/DishIngredientList'
import PickMultipleSelector from 'features/DishDetail/components/PickMultipleSelector'
import PickSelector from 'features/DishDetail/components/PickSelector'
import DishNutrition from 'features/DishDetail/components/DishNutrition'
import DishNote from 'features/DishDetail/components/DishNote'
import DishDetailFooter from 'features/DishDetail/components/DishDetailLayout/Footer'
import QuantityDemand from 'features/DishDetail/components/QuantityDemand'
import AddToCartButton from 'features/DishDetail/components/AddToCartButton'

import getDishDetailService from 'features/DishDetail/services/getDishDetailService'

export default function DishDetail({ dish }) {
  const [quantity, setQuantity] = useState(1)

  const handleIncrement = () => setQuantity(quantity + 1)

  const handleDecrement = () => setQuantity(quantity - 1)

  return (
    <DishDetailLayout>
      <TopReturnBar />
      <DishDetailBody>
        <DishImage image={dish.image} />
        <Box sx={{ padding: '24px 16px' }}>
          <DishName name={dish.name} />
          <DishDescription description={dish.description} />
          <DishTags tags={dish.tags} />
        </Box>
        <Stack direction="column" gap="2px">
          <DishIngredientList ingredients={dish.ingredients} />
          <PickMultipleSelector maxQuantity={2} options={dish.ingredients} />
          <PickSelector title="Pick one" options={dish.ingredients} />
        </Stack>
        <DishNutrition nutrition={dish.nutrition} />
        <DishNote />
      </DishDetailBody>
      <DishDetailFooter>
        <QuantityDemand
          color="grey.300"
          quantity={quantity}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
        />
        <AddToCartButton />
      </DishDetailFooter>
    </DishDetailLayout>
  )
}

export async function getServerSideProps({ query }) {
  const { id } = query
  const dish = await getDishDetailService({ id })

  return {
    props: {
      dish,
    },
  }
}
