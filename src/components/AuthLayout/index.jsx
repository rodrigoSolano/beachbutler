import { Button, Stack, Typography } from '@mui/material'

import AppLayout from 'components/AppLayout/AppLayout'
import AppHeader from 'components/AppLayout/AppHeader'
import AppBody from 'components/AppLayout/AppBody'
import AppFooter from 'components/AppLayout/AppFooter'
import AppLogo from 'components/AppLogo'
import QRIcon from 'components/Icons/QRIcon'

import BottomNavigationBar from 'components/BottomNavigationBar'

export default function AuthLayout({ children }) {
  return (
    <AppLayout>
      <AppHeader showBorderBottom borderColor="grey">
        <Stack
          width="100%"
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <AppLogo />
          <Button endIcon={<QRIcon />}>
            <Typography variant="body2" color="primary" fontWeight={700}>
              Change location
            </Typography>
          </Button>
        </Stack>
      </AppHeader>
      <AppBody id="body" sx={{ paddingTop: 0 }}>
        {children}
      </AppBody>
      <AppFooter>
        <BottomNavigationBar />
      </AppFooter>
    </AppLayout>
  )
}
