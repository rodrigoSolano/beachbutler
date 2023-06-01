import { Chip, styled } from '@mui/material'

const DietRestrictionChip = styled(Chip)(({ theme }) => ({
  color: theme.palette.grey[300],

  backgroundColor: '#EEF4F4',
  '& .MuiChip-label': {
    color: theme.palette.grey[300],
  },
  '& .MuiChip-deleteIcon': {
    color: theme.palette.primary[400],
  },
}))

export default DietRestrictionChip
