/* eslint-disable react/jsx-props-no-spreading */
import { Button, Typography, styled } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

const FooterButtonStyled = styled(Button)(({ theme, variant }) => ({
  width: '100%',
  height: '100%',
  borderRadius: theme.spacing(1),

  textTransform: 'none',

  ...(variant === 'contained' && {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  }),

  ...(variant === 'outlined' && {
    color: theme.palette.grey[200],
    border: `1px solid ${theme.palette.grey[60]}`,
  }),

  ...(variant === 'text' && {
    color: theme.palette.grey[200],
  }),
}))

export default function FooterButton({ title, direction = 'right', ...props }) {
  return (
    <FooterButtonStyled
      startIcon={direction === 'left' && <ArrowBackIcon fontSize="small" />}
      endIcon={direction === 'right' && <ArrowForwardIcon fontSize="small" />}
      {...props}
    >
      <Typography variant="button" fontWeight={500} textTransform="none">
        {title}
      </Typography>
    </FooterButtonStyled>
  )
}
