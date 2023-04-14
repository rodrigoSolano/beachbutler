/* eslint-disable react/jsx-props-no-spreading */
import { IconButton, useTheme } from '@mui/material'

import ArrowDownIcon from 'components/Icons/ArrowDownIcon'
import ArrowUpIcon from 'components/Icons/ArrowUpIcon'

export default function DropdownButton({ isOpen, ...props }) {
  const theme = useTheme()

  return (
    <IconButton sx={{ color: theme.palette.grey[100] }} {...props}>
      {isOpen ? <ArrowUpIcon /> : <ArrowDownIcon />}
    </IconButton>
  )
}
