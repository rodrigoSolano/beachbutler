import { useRouter } from 'next/router'
import { useState } from 'react'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Stack, Typography, useTheme } from '@mui/material'

import AppLayout from '../src/components/shared/AppLayout/AppLayout'
import Header from '../src/components/shared/AppLayout/Header'
import Body from '../src/components/shared/AppLayout/Body'
import Footer from '../src/components/shared/AppLayout/Footer'
import AppLogo from '../src/components/shared/AppLogo'
import NextButton from '../src/components/shared/NextButton'

import getAllergiesService from '../src/features/Allergies/services/getAllergiesService'
import allergiesAdapter from '../src/features/Allergies/adapters/allergiesAdapter'
import CustomListItem from '../src/components/shared/CustomListItem'
import CustomList from '../src/components/shared/CustomList'
import BackButton from '../src/components/shared/BackButton'
import SkipButton from '../src/components/shared/SkipButton'

export default function DietRestrictios({ dietRestrictions }) {
  const [selectedDietRestrictions, setSelectedDietRestrictions] = useState([])
  const skip = selectedDietRestrictions.length === 0
  const theme = useTheme()
  const router = useRouter()
  const { t } = useTranslation('dietRestrictions')

  const isChecked = (dietRestriction) =>
    selectedDietRestrictions.findIndex(
      (selectedDietRestriction) =>
        selectedDietRestriction.id === dietRestriction.id
    ) !== -1

  const handleToggle = (value) => () => {
    const currentIndex = selectedDietRestrictions.indexOf(value)
    const newChecked = [...selectedDietRestrictions]

    if (currentIndex === -1) newChecked.push(value)
    else newChecked.splice(currentIndex, 1)

    setSelectedDietRestrictions(newChecked)
  }

  const back = () => router.push('/allergies')

  const onSkipClick = () => router.push('/')

  const onNextClick = () => router.push('/')

  return (
    <AppLayout>
      <Header sx={{ borderBottom: `1px solid ${theme.palette.grey['300']}` }}>
        <AppLogo />
      </Header>
      <Body>
        <Typography color="gray.500" fontWeight={500} gutterBottom>
          {t('diet_restrictions')}
        </Typography>
        <Typography variant="body2" color="gray.200" fontWeight={400}>
          {t('diet_restrictions_instructions')}
        </Typography>
        <CustomList>
          {dietRestrictions.map((dietRestriction) => (
            <CustomListItem
              key={dietRestriction.id}
              title={dietRestriction.name}
              onClick={handleToggle(dietRestriction)}
              isChecked={isChecked(dietRestriction)}
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
          <BackButton title={t('back')} onClick={back} />
          {skip ? (
            <SkipButton title={t('skip')} onClick={onSkipClick} />
          ) : (
            <NextButton title={t('next')} onClick={onNextClick} />
          )}
        </Stack>
      </Footer>
    </AppLayout>
  )
}

export async function getServerSideProps({ locale }) {
  const dietRestrictionsData = await getAllergiesService({})
  const dietRestrictions = await allergiesAdapter(dietRestrictionsData)
  return {
    props: {
      ...(await serverSideTranslations(locale, ['dietRestrictions'])),
      locale,
      dietRestrictions,
    },
  }
}