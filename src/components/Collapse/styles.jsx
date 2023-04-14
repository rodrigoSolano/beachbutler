import { Box, Collapse, IconButton, styled } from '@mui/material'

const CollapseHeaderContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  height: 'auto',
  minHeight: '56px',
  padding: '8px 16px',
  backgroundColor: theme.palette.grey[35],

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}))

const CustomIconButton = styled(IconButton)(({ theme }) => ({
  width: '40px',
  height: '40px',
  minWidth: '40px',
  minHeight: '40px',
  maxWidth: '40px',
  maxHeight: '40px',
  borderRadius: '50%',
  border: `1px solid ${theme.palette.grey[50]}`,
  backgroundColor: theme.palette.common.white,
  color: theme.palette.grey[500],
}))

const CustomMUICollpase = styled(Collapse)(() => ({
  width: '100%',
  height: 'auto',
  backgroundColor: 'transparent',
}))

export { CollapseHeaderContainer, CustomIconButton, CustomMUICollpase }
