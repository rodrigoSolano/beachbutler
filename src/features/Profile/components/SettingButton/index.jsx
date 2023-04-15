/* eslint-disable react/jsx-props-no-spreading */
import { Button, useTheme } from '@mui/material'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'

export default function SettingButton({ children, ...props }) {
  const theme = useTheme()

  return (
    <Button
      color="grey"
      sx={{
        color: theme.palette.grey[100],
        width: '100%',
        padding: '12px 16px',
        minHeight: 42,
        borderRadius: 0,
        borderBottom: `1px solid ${theme.palette.grey[50]}`,
        justifyContent: 'space-between',
      }}
      variant="text"
      endIcon={<KeyboardArrowRightIcon />}
      {...props}
    >
      {children}
    </Button>
  )
}
