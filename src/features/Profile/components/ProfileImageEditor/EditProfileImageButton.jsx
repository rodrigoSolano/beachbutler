import { IconButton, useTheme } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'

export default function EditProfileImageButton() {
  const theme = useTheme()

  return (
    <IconButton
      sx={{
        width: 32,
        height: 32,
        backgroundColor: theme.palette.grey[50],
        '&:hover': {
          backgroundColor: theme.palette.grey[50],
        },
      }}
      color={theme.palette.grey[300]}
    >
      <EditIcon fontSize="small" />
    </IconButton>
  )
}
