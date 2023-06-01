import { Box, styled } from '@mui/material'

const DietRestrictionsGridContainer = styled(Box)(() => ({
  width: '100vw',
  minHeight: '48px',

  backgroundColor: '#FFFFFF',
  boxShadow:
    '0px 0px 4px rgba(0, 0, 0, 0.04), 0px -4px 8px rgba(0, 0, 0, 0.06)',

  position: 'absolute',
  bottom: '56px',
  zIndex: 10,

  padding: '8px 16px',

  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row',
  gap: 8,

  overflowX: 'auto',
}))

export default function DietRestrictionsGrid({ children }) {
  return (
    <DietRestrictionsGridContainer>{children}</DietRestrictionsGridContainer>
  )
}
