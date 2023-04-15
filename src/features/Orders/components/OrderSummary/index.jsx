import { Box, Grid, Stack, Typography } from '@mui/material'

import ProductThumbnail from 'components/ProductThumbnail'

import OrderRatingButton from '../OrderRatingButton'
import OrderRating from '../OrderRating'
import ReorderButton from '../ReorderButton'

export default function OrderSummary({ order }) {
  const showRatingButton = order.status === 'completed' && !order.rating

  return (
    <Stack width="100%" direction="column" gap={2}>
      {order.products.map((product) => (
        <Grid container key={product.id}>
          <Grid item xs={4} p={1}>
            <ProductThumbnail thumbnail={product.thumbnail} />
          </Grid>
          <Grid item xs={8} p={1}>
            <Stack direction="column" gap={0.5}>
              <Typography fontSize={14} fontWeight={700}>
                {product.name}
              </Typography>
              <Typography fontSize={10} color="grey.100">
                {`${product.date} - ${product.time}`}
              </Typography>
              {showRatingButton && (
                <Typography fontSize={14} color="primary.400">
                  {product.status}
                </Typography>
              )}
              {!showRatingButton && (
                <Stack direction="row" gap={1.5}>
                  <ReorderButton>
                    <Typography fontSize={14} color="grey.100">
                      Volver a pedir
                    </Typography>
                  </ReorderButton>
                  <OrderRating rating={order.rating} />
                </Stack>
              )}
            </Stack>
          </Grid>
        </Grid>
      ))}
      {showRatingButton && (
        <Box mt={-2}>
          <OrderRatingButton>
            <Typography fontSize={13} fontWeight={500}>
              Califica tu experiencia
            </Typography>
          </OrderRatingButton>
        </Box>
      )}
    </Stack>
  )
}
