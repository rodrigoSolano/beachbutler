/* eslint-disable react/jsx-props-no-spreading */
import { Button, Typography } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

export default function NextButton({ title, ...props }) {
  return (
    <Button
      sx={{ width: '100%', height: '100%' }}
      color="primary"
      variant="contained"
      endIcon={<ArrowForwardIcon fontSize="small" />}
      {...props}
    >
      <Typography variant="button" fontWeight={500} textTransform="none">
        {title}
      </Typography>
    </Button>
  )
}
