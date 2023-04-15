import { Box } from '@mui/material'

export default function ProductDetailBody({ children }) {
  return (
    <Box
      width="100%"
      height="100%"
      bgcolor="#FFF"
      overflow="auto"
      id="body"
      sx={{ paddingBottom: '8px' }}
    >
      {children}
    </Box>
  )
}
