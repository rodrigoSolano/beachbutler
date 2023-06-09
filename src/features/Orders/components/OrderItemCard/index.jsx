// @ts-check
import { Grid, Paper, Typography } from '@mui/material'

import ProductThumbnail from 'components/ProductThumbnail'

/**
 * @typedef {import("../../types/Order").OrderProduct} OrderProduct
 */

/**
 * @typedef {Object} OrderProductCardProps
 * @property {OrderProduct} orderProduct
 */

/**
 * @param {OrderProductCardProps} props
 * @returns {JSX.Element}
 */
export default function OrderProductCard({ orderProduct }) {
  return (
    <Paper elevation={0}>
      <Grid container p={1} spacing={1}>
        <Grid item xs={4}>
          <ProductThumbnail
            thumbnail={orderProduct.thumbnail}
            isLoading={false}
          />
        </Grid>
        <Grid item xs={8}>
          <Typography variant="body1" color="grey.500" fontWeight={700}>
            {orderProduct.name}
          </Typography>
          <Typography
            variant="caption"
            color="grey.200"
            sx={{
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {orderProduct.description}
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  )
}
