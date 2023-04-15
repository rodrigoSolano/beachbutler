import { Box } from '@mui/material'
import { useRouter } from 'next/router'
import ProductPreviewCard from 'components/ProductPreviewCard'
import useMenuPreviewProducts from 'features/Menu/hooks/useMenuPreviewProducts'

export default function ProductsGrid({ section }) {
  const router = useRouter()
  const { products, isLoading } = useMenuPreviewProducts({
    section: section.value,
  })

  const onClickProduct = (product) =>
    router.push(`/productDetail?id=${product.id}`)

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
      {products.map((product) => (
        <ProductPreviewCard
          key={product.id}
          product={product}
          isLoading={isLoading}
          showTags={false}
          onClick={onClickProduct}
        />
      ))}
    </Box>
  )
}
