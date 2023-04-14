/* eslint-disable react/jsx-props-no-spreading */
import { Box, Stack, Typography } from '@mui/material'
import ArrowDownIcon from 'components/Icons/ArrowDownIcon'
import ArrowUpIcon from 'components/Icons/ArrowUpIcon'

import {
  CollapseHeaderContainer,
  CustomIconButton,
  CustomMUICollpase,
} from './styles'

function Collapse({ children, ...props }) {
  return <Box {...props}>{children}</Box>
}

function CollapseHeader({ children, ...props }) {
  return (
    <CollapseHeaderContainer {...props}>{children}</CollapseHeaderContainer>
  )
}

function CollapseButton({ isOpen = false, ...props }) {
  return (
    <CustomIconButton {...props}>
      {isOpen ? <ArrowUpIcon /> : <ArrowDownIcon />}
    </CustomIconButton>
  )
}

function CollapseTitle({ title, ...props }) {
  return (
    <Typography variant="body1" color="grey.500" fontWeight={700} {...props}>
      {title}
    </Typography>
  )
}

function CollapseSubtitle({ subtitle, ...props }) {
  return (
    <Typography variant="body2" color="grey.200" fontWeight={400} {...props}>
      {subtitle}
    </Typography>
  )
}

function CollapseContent({ children, isOpen = false, spacing = 2, ...props }) {
  return (
    <CustomMUICollpase in={isOpen} timeout="auto" unmountOnExit {...props}>
      <Stack
        width="100%"
        direction="column"
        gap={spacing}
        p="16px 16px 32px 16px"
      >
        {children}
      </Stack>
    </CustomMUICollpase>
  )
}

export {
  Collapse,
  CollapseHeader,
  CollapseButton,
  CollapseTitle,
  CollapseSubtitle,
  CollapseContent,
}
