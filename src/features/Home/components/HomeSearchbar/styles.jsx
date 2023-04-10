import { Box, styled } from '@mui/material'

const SearchbarContainer = styled(Box)(({ theme }) => ({
  position: 'sticky',
  top: 0,
  zIndex: 10,
  padding: theme.spacing(2),
  marginLeft: theme.spacing(-2),
  marginRight: theme.spacing(-2),
  marginBottom: theme.spacing(1),

  transition: 'background-color 0.3s ease-in-out',
}))

export default SearchbarContainer
