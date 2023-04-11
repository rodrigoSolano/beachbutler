import { Box } from '@mui/material'

export default function Section({ section, children }) {
  return (
    <Box sx={{ marginTop: 3 }} className="section" id={section.anchor}>
      {children}
    </Box>
  )
}
