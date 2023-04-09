/* eslint-disable react/jsx-props-no-spreading */
import { Button, Typography } from '@mui/material'

export default function SkipButton({ title, ...props }) {
  return (
    <Button sx={{ width: '100%' }} variant="text" {...props}>
      <Typography color="grey.200">{title}</Typography>
    </Button>
  )
}
