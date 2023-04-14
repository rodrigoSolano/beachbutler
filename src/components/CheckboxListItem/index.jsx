/* eslint-disable react/jsx-props-no-spreading */
import {
  Checkbox,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useTheme,
} from '@mui/material'

export default function CheckboxListItem({
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
        <ListItemIcon sx={{ minWidth: 'auto' }}>
          <Checkbox
            edge="start"
            checked={isChecked}
            tabIndex={-1}
            disableRipple
            sx={{
              color: theme.palette.grey['100'],
            }}
          />
        </ListItemIcon>
        <ListItemText primary={title} color="grey.300" />
      </ListItemButton>
    </ListItem>
  )
}
