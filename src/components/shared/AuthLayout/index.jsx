import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { Button, Typography, useTheme } from '@mui/material'

import AppLayout from '../AppLayout/AppLayout'
import Header from '../AppLayout/Header'
import Body from '../AppLayout/Body'
import Footer from '../AppLayout/Footer'
import AppLogo from '../AppLogo'
import QRIcon from '../Icons/QRIcon'
import HomeIcon from '../Icons/HomeIcon'
import ReceipIcon from '../Icons/ReceipIcon'
import AccountIcon from '../Icons/AccountIcon'

const sections = [
  {
    path: '/',
    name: 'home',
    icon: <HomeIcon />,
  },
  {
    path: '/menu',
    name: 'menu',
    icon: <ReceipIcon />,
  },
  {
    path: '/orders',
    name: 'orders',
    icon: <ReceipIcon />,
  },
  {
    path: '/profile',
    name: 'profile',
    icon: <AccountIcon />,
  },
]

export default function AuthLayout({ children }) {
  const { t } = useTranslation('common')
  const theme = useTheme()
  const router = useRouter()

  const isCurrentSection = (path) => router.pathname === path

  const onSectionClick = (path) => router.replace(path)

  return (
    <AppLayout>
      <Header
        sx={{
          padding: '0 16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: `1px solid ${theme.palette.grey[60]}`,
        }}
      >
        <AppLogo />
        <Button endIcon={<QRIcon />}>
          <Typography variant="body2" color="primary" fontWeight={700}>
            Change location
          </Typography>
        </Button>
      </Header>
      <Body id="body" sx={{ paddingTop: 0 }}>
        {children}
      </Body>
      <Footer
        sx={{
          borderRadius: '16px 16px 0 0',
          boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.08)',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
        }}
      >
        {sections.map((section) => (
          <Button
            sx={{
              color: isCurrentSection(section.path)
                ? theme.palette.primary.main
                : theme.palette.grey[100],
              fontWeight: isCurrentSection(section.path) ? 700 : 400,
              borderRadius: 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              '&:hover': {
                backgroundColor: 'transparent',
              },
            }}
            onClick={() => onSectionClick(section.path)}
            key={section.path}
            fullWidth
            disableRipple
            disableElevation
            disableFocusRipple
            disableTouchRipple
          >
            {section.icon}
            <Typography
              variant="button"
              fontSize="12px"
              fontWeight="inherit"
              textTransform="none"
            >
              {t(section.name)}
            </Typography>
          </Button>
        ))}
      </Footer>
    </AppLayout>
  )
}
