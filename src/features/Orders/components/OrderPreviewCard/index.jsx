// @ts-check
import dayjs from 'dayjs'
import { useTranslation } from 'next-i18next'
import { Grid, Paper, Stack, Typography } from '@mui/material'
import StarBorderIcon from '@mui/icons-material/StarBorder'

import ProductThumbnail from 'components/ProductThumbnail'

import { OrderStatus } from '../../types/Order'

/**
 * @typedef {import('../../types/OrderPreview').OrderPreview} OrderPreview
 */

/**
 * @typedef {Object} OrderPreviewCardProps
 * @property {OrderPreview} orderPreview
 * @property {(orderPreview: OrderPreview) => void} onClick
 */

/**
 * @param {OrderPreviewCardProps} props
 * @returns {JSX.Element}
 */
export default function OrderPreviewCard({ orderPreview, onClick }) {
  const { t } = useTranslation('orders')

  return (
    <Paper elevation={0} onClick={() => onClick(orderPreview)}>
      <Grid container>
        <Grid item xs={4} sx={{ padding: '6.5px 8px' }}>
          <ProductThumbnail
            thumbnail={orderPreview.thumbnail}
            isLoading={false}
          />
        </Grid>
        <Grid item xs={8} sx={{ padding: '8px 10px' }}>
          <Stack
            height="100%"
            direction="column"
            justifyContent="space-between"
          >
            <Typography variant="body2">
              <strong>{t('order')} </strong>
              {`#${orderPreview.number}`}
            </Typography>
            <Typography variant="caption" color="grey.100">
              {dayjs(orderPreview.orderDate).format('DD/MM/YYYY')} –{' '}
              {dayjs(orderPreview.orderDate).format('HH:mm')}
            </Typography>
            <Stack direction="row" alignItems="center" gap={0.875}>
              <Typography variant="body2" color="primary.400">
                {t(`${orderPreview.status}`)}
              </Typography>

              {orderPreview.status === OrderStatus.DELIVERED && (
                <Stack direction="row" alignItems="center" gap={0.5}>
                  <StarBorderIcon fontSize="small" sx={{ color: '#FFCB00' }} />
                  <Typography variant="body2" color="primary.400">
                    {orderPreview.rating}
                  </Typography>
                </Stack>
              )}
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Paper>
  )
}
