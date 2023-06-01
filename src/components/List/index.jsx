import { List as MUIList, styled } from '@mui/material'

const List = styled(MUIList)(() => ({
  marginTop: 2,
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
}))

export default List
