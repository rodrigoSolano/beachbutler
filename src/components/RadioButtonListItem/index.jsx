/* eslint-disable react/jsx-props-no-spreading */
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Radio,
  useTheme,
} from '@mui/material'

export default function RadioButtonListItem({
  title,
  isChecked,
  children,
  ...props
}) {
  const theme = useTheme()
  return (
    <ListItem
      sx={{
        border: `1px solid ${theme.palette.grey['60']}`,
        borderRadius: '4px',
      }}
      disablePadding
      {...props}
    >
      <ListItemButton role={undefined} dense>
        <ListItemText primary={title} color="grey.300" />
        <ListItemIcon sx={{ minWidth: 'auto' }}>
          <Radio checked={isChecked} sx={{ color: '#909294' }} />
        </ListItemIcon>
      </ListItemButton>
    </ListItem>
  )
}
