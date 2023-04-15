import { useState } from 'react'
import { Box, Stack } from '@mui/material'

import ProductDetailLayout from 'features/ProductDetail/components/ProductDetailLayout'
import TopReturnBar from 'features/ProductDetail/components/TopReturnBar'
import ProductDetailBody from 'features/ProductDetail/components/ProductDetailLayout/Body'
import ProductImage from 'features/ProductDetail/components/ProductImage'
import ProductName from 'features/ProductDetail/components/ProductName'
import ProductDescription from 'features/ProductDetail/components/ProductDescription'
import ProductTags from 'features/ProductDetail/components/ProductTags'
import ProductIngredientList from 'features/ProductDetail/components/ProductIngredientList'
import PickMultipleSelector from 'features/ProductDetail/components/PickMultipleSelector'
import PickSelector from 'features/ProductDetail/components/PickSelector'
import ProductNutrition from 'features/ProductDetail/components/ProductNutrition'
import ProductNote from 'features/ProductDetail/components/ProductNote'
import ProductDetailFooter from 'features/ProductDetail/components/ProductDetailLayout/Footer'
import QuantityDemand from 'features/ProductDetail/components/QuantityDemand'
import AddToCartButton from 'features/ProductDetail/components/AddToCartButton'

import getProductDetailService from 'features/ProductDetail/services/getProductDetailService'

export default function ProductDetail({ product }) {
  const [quantity, setQuantity] = useState(1)

  const handleIncrement = () => setQuantity(quantity + 1)

  const handleDecrement = () => setQuantity(quantity - 1)

  return (
    <ProductDetailLayout>
      <TopReturnBar />
      <ProductDetailBody>
        <ProductImage image={product.image} />
        <Box sx={{ padding: '24px 16px' }}>
          <ProductName name={product.name} />
          <ProductDescription description={product.description} />
          <ProductTags tags={product.tags} />
        </Box>
        <Stack direction="column" gap="2px">
          <ProductIngredientList ingredients={product.ingredients} />
          <PickMultipleSelector maxQuantity={2} options={product.ingredients} />
          <PickSelector title="Pick one" options={product.ingredients} />
        </Stack>
        <ProductNutrition nutrition={product.nutrition} />
        <ProductNote />
      </ProductDetailBody>
      <ProductDetailFooter>
        <QuantityDemand
          color="grey.300"
          quantity={quantity}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
        />
        <AddToCartButton />
      </ProductDetailFooter>
    </ProductDetailLayout>
  )
}

export async function getServerSideProps({ query }) {
  const { id } = query
  const product = await getProductDetailService({ id })

  return {
    props: {
      product,
    },
  }
}
