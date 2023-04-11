import { List, styled } from '@mui/material'

const CustomList = styled(List)(() => ({
  marginTop: 2,
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
}))

export default CustomList
