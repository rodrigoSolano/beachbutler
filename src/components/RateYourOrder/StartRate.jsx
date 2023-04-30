import { IconButton } from '@mui/material'
import StarBorderIcon from '@mui/icons-material/StarBorder'
import StarIcon from '@mui/icons-material/Star'

export default function StartRate({ onClick, fill }) {
  return (
    <IconButton
      sx={{ color: '#FFCB00', padding: '0' }}
      onClick={onClick}
      disableRipple
    >
      {fill && <StarIcon />}
      {!fill && <StarBorderIcon />}
    </IconButton>
  )
}
