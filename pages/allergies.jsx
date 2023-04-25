import { useRouter } from 'next/router'
import { useState } from 'react'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Box, Stack, Typography, useTheme } from '@mui/material'

import AppLayout from 'components/AppLayout/AppLayout'
import AppHeader from 'components/AppLayout/AppHeader'
import AppBody from 'components/AppLayout/AppBody'
import AppFooter from 'components/AppLayout/AppFooter'
import AppLogo from 'components/AppLogo'
import NextButton from 'components/NextButton'
import SkipButton from 'components/SkipButton'

import getAllergiesService from 'features/Allergies/services/getAllergiesService'
import allergiesAdapter from 'features/Allergies/adapters/allergiesAdapter'
import CustomListItem from 'components/CustomListItem'
import CustomList from 'components/CustomList'

export default function AllergiesPage({ allergies }) {
  const [selectedAllergies, setSelectedAllergies] = useState([])
  const skip = selectedAllergies.length === 0
  const theme = useTheme()
  const router = useRouter()
  const { t } = useTranslation('allergies')

  const isChecked = (allergy) =>
    selectedAllergies.findIndex(
      (selectedAllergy) => selectedAllergy.id === allergy.id
    ) !== -1

  const handleToggle = (value) => () => {
    const currentIndex = selectedAllergies.indexOf(value)
    const newChecked = [...selectedAllergies]

    if (currentIndex === -1) newChecked.push(value)
    else newChecked.splice(currentIndex, 1)

    setSelectedAllergies(newChecked)
  }

  const onSkipClick = () => router.replace('/dietRestrictions')

  return (
    <AppLayout>
      <AppHeader
        sx={{ borderBottom: `1px solid ${theme.palette.grey['300']}` }}
      >
        <AppLogo />
      </AppHeader>
      <AppBody>
        <Typography color="gray.500" fontWeight={500} gutterBottom>
          {t('allergies')}
        </Typography>
        <Typography variant="body2" color="gray.200" fontWeight={400}>
          {t('allergies_instructions')}
        </Typography>
        <CustomList>
          {allergies.map((allergy) => (
            <CustomListItem
              key={allergy.id}
              title={allergy.name}
              onClick={handleToggle(allergy)}
              isChecked={isChecked(allergy)}
            />
          ))}
        </CustomList>
      </AppBody>
      <AppFooter border shadow>
        <Stack
          sx={{ p: '8px' }}
          gap={1}
          direction="row"
          alignItems="center"
          justifyContent="center"
        >
          <Box width="100%" />
          {skip && <SkipButton title={t('skip')} onClick={onSkipClick} />}
          {!skip && <NextButton title={t('next')} onClick={onSkipClick} />}
        </Stack>
      </AppFooter>
    </AppLayout>
  )
}

export async function getServerSideProps({ locale }) {
  const allergiesData = await getAllergiesService({})
  const allergies = await allergiesAdapter(allergiesData)
  return {
    props: {
      ...(await serverSideTranslations(locale, ['allergies'])),
      locale,
      allergies,
    },
  }
}
