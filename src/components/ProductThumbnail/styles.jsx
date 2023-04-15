import { styled } from '@mui/material'

const ProductThumbnailContainer = styled('div')(() => ({
  width: '100%',
  height: 'auto',
  aspectRatio: '4/3',
  position: 'relative',
  '& > *:first-of-type': {
    width: '100%',
    height: '100%',
    borderRadius: '4px',
    objectFit: 'cover',
  },
}))

// eslint-disable-next-line import/prefer-default-export
export { ProductThumbnailContainer }
