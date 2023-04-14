import { Box, Typography, TextField, styled } from '@mui/material'

const CustomTextField = styled(TextField)(({ theme }) => ({
  marginTop: '8px',
  color: theme.palette.grey[100],
  '& .MuiOutlinedInput-root': {
    borderRadius: '8px',
    '& fieldset': {
      borderColor: theme.palette.grey[60],
    },
    '& textarea': {
      color: theme.palette.grey[100],
    },
  },
}))

export default function DishNote() {
  return (
    <Box p={2}>
      <Typography variant="body1" color="grey.500" fontWeight={700}>
        Nota
      </Typography>
      <CustomTextField
        rows={4}
        variant="outlined"
        multiline
        placeholder="Añadir comentarios"
        fullWidth
      />
    </Box>
  )
}
