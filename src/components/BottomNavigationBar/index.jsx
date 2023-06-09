import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { Typography } from '@mui/material'

import HomeIcon from 'components/Icons/HomeIcon'
import ReceipIcon from 'components/Icons/ReceipIcon'
import AccountIcon from 'components/Icons/AccountIcon'

import { BottomNavigationBarContainer, BottomNavLinkButton } from './styles'

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

export default function BottomNavigationBar() {
  const { t } = useTranslation('common')
  const router = useRouter()

  const isCurrentSection = (path) =>
    router.pathname?.split('/')[1] === path?.split('/')[1]

  const handleSectionClick = (path) => router.replace(path)

  return (
    <BottomNavigationBarContainer>
      {sections.map((section) => (
        <BottomNavLinkButton
          key={section.path}
          onClick={() => handleSectionClick(section.path)}
          isActive={isCurrentSection(section.path)}
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
        </BottomNavLinkButton>
      ))}
    </BottomNavigationBarContainer>
  )
}
