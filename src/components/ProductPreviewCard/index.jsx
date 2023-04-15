import { Container, ProductFooter } from './styles'

import ProductThumbnail from './ProductThumbnail'
import ProductName from './ProductName'
import ProductDescription from './ProductDescription'
import ProductSize from './ProductSize'
import ProductCategory from './ProductCategory'

export default function ProductPreviewCard({
  product,
  showTags = true,
  isLoading = true,
  onClick = () => {},
}) {
  return (
    <Container onClick={() => onClick(product)}>
      <ProductThumbnail thumbnail={product.thumbnail} isLoading={isLoading} />
      <ProductName name={product.name} isLoading={isLoading} />
      <ProductDescription
        description={product.description}
        isLoading={isLoading}
      />
      <ProductFooter sx={{ marginTop: '24px' }}>
        <ProductSize
          size={product.size}
          isLoading={isLoading}
          maxWidth={showTags ? '100%' : '50%'}
        />
        {showTags && (
          <ProductCategory category={product.category} isLoading={isLoading} />
        )}
      </ProductFooter>
    </Container>
  )
}
