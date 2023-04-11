import { useRouter } from 'next/router'
import { useState } from 'react'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Box, Stack, Typography, useTheme } from '@mui/material'

import AppLayout from '../src/components/AppLayout/AppLayout'
import Header from '../src/components/AppLayout/Header'
import Body from '../src/components/AppLayout/Body'
import Footer from '../src/components/AppLayout/Footer'
import AppLogo from '../src/components/AppLogo'
import NextButton from '../src/components/NextButton'
import SkipButton from '../src/components/SkipButton'

import getAllergiesService from '../src/features/Allergies/services/getAllergiesService'
import allergiesAdapter from '../src/features/Allergies/adapters/allergiesAdapter'
import CustomListItem from '../src/components/CustomListItem'
import CustomList from '../src/components/CustomList'

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
      <Header sx={{ borderBottom: `1px solid ${theme.palette.grey['300']}` }}>
        <AppLogo />
      </Header>
      <Body>
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
      </Body>
      <Footer border shadow>
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
      </Footer>
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
