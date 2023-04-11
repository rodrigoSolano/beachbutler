/* eslint-disable react/jsx-props-no-spreading */
import { Button, Typography, useTheme } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

export default function BackButton({ title, ...props }) {
  const theme = useTheme()

  return (
    <Button
      sx={{
        width: '100%',
        height: '100%',
        border: `1px solid ${theme.palette.grey[60]}`,
        color: theme.palette.grey[200],
        '&:hover': {
          color: theme.palette.grey[200],
          border: `1px solid ${theme.palette.grey[60]}`,
        },
      }}
      variant="outlined"
      startIcon={<ArrowBackIcon fontSize="small" />}
      {...props}
    >
      <Typography variant="button" fontWeight={500} textTransform="none">
        {title}
      </Typography>
    </Button>
  )
}
