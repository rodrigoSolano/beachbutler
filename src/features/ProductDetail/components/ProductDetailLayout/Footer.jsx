import { Stack } from '@mui/material'

export default function ProductDetailFooter({ children }) {
  return (
    <Stack
      py={1.5}
      px={2}
      gap={2}
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      sx={{
        boxShadow: '0px -4px 15px rgba(5, 31, 1, 0.1)',
      }}
    >
      {children}
    </Stack>
  )
}
