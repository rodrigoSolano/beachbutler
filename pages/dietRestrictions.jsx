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

import List from 'components/List'
import ListItem from 'components/ListItem'
import SkipButton from 'components/SkipButton'

import DietRestrictionChip from 'features/DietRestrictions/components/DietRestrictionChip'
import DietRestrictionsGrid from 'features/DietRestrictions/components/DietRestrictionsGrid'

import getAllergiesService from 'features/DietRestrictions/services/getAllergiesService'
import getTypesOfDietService from 'features/DietRestrictions/services/getTypesOfDietService'
import getUserDietsService from 'features/DietRestrictions/services/getUserDietsService'
import getUserAllergiesService from 'features/DietRestrictions/services/getUserAllergiesService'

export default function DietRestrictios({
  allergies,
  userAllergies,
  typesOfDiet,
  userDiets,
}) {
  const [selectedTypesOfDiet, setSelectedTypesOfDiet] = useState(userDiets)
  const [selectedAllergies, setSelectedAllergies] = useState(userAllergies)

  const skip = !selectedAllergies.length && !selectedTypesOfDiet.length
  const theme = useTheme()
  const router = useRouter()
  const { t } = useTranslation('dietRestrictions')

  const isTypeOfDietSelected = (typeOfDiet) =>
    selectedTypesOfDiet.findIndex(
      (selectedTypeOfDiet) => selectedTypeOfDiet.id === typeOfDiet.id
    ) !== -1

  const selectTypeOfDiet = (typeOfDiet) => () => {
    const typeOfDietFound = selectedTypesOfDiet.find(
      (selectedTypeOfDiet) => selectedTypeOfDiet.id === typeOfDiet.id
    )

    let newTypesOfDiet = []

    if (typeOfDietFound)
      newTypesOfDiet = selectedTypesOfDiet.filter(
        (_t) => _t.id !== typeOfDiet.id
      )
    else newTypesOfDiet = [...selectedTypesOfDiet, typeOfDiet]

    setSelectedTypesOfDiet(newTypesOfDiet)
  }

  const isAllergieSelected = (allergie) =>
    selectedAllergies.findIndex(
      (selectedDietRestriction) => selectedDietRestriction.id === allergie.id
    ) !== -1

  const selectAllergie = (allergy) => () => {
    const allergyFound = selectedAllergies.find(
      (selectedAllergie) => selectedAllergie.id === allergy.id
    )

    let newAllergies = []

    if (allergyFound)
      newAllergies = selectedAllergies.filter((a) => a.id !== allergy.id)
    else newAllergies = [...selectedAllergies, allergy]

    setSelectedAllergies(newAllergies)
  }

  const handleSkipClick = () => router.replace('/')

  const handleNextClick = () => router.replace('/')

  return (
    <>
      <AppLayout>
        <AppHeader
          sx={{ borderBottom: `1px solid ${theme.palette.grey['300']}` }}
        >
          <AppLogo />
        </AppHeader>
        <AppBody>
          <Typography color="gray.500" fontWeight={500} gutterBottom>
            {t('diet_restrictions')}
          </Typography>
          <Typography variant="body2" color="gray.200" fontWeight={400} mb={2}>
            {t('diet_restrictions_instructions')}
          </Typography>
          <Stack direction="column" gap={2} mb={skip ? 0 : 6}>
            <Stack direction="column">
              <Typography variant="body1" color="grey.200" fontWeight={400}>
                {t('diets')}
              </Typography>
              <List>
                {typesOfDiet.map((typeOfDiet) => (
                  <ListItem
                    key={typeOfDiet.id}
                    title={typeOfDiet.name}
                    onClick={selectTypeOfDiet(typeOfDiet)}
                    isChecked={isTypeOfDietSelected(typeOfDiet)}
                  />
                ))}
              </List>
            </Stack>
            <Stack direction="column">
              <Typography variant="body1" color="grey.200" fontWeight={400}>
                {t('allergies')}
              </Typography>
              <List>
                {allergies.map((allergy) => (
                  <ListItem
                    key={allergy.id}
                    title={allergy.name}
                    onClick={selectAllergie(allergy)}
                    isChecked={isAllergieSelected(allergy)}
                  />
                ))}
              </List>
            </Stack>
          </Stack>
        </AppBody>
        <AppFooter border shadow center>
          <Stack
            sx={{ width: '100%', height: '40px', padding: '16px' }}
            gap={3}
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box width="100%" />
            {skip && <SkipButton title={t('skip')} onClick={handleSkipClick} />}
            {!skip && (
              <NextButton title={t('next')} onClick={handleNextClick} />
            )}
          </Stack>
        </AppFooter>
      </AppLayout>
      {(selectedTypesOfDiet.length || selectedAllergies.length) && (
        <DietRestrictionsGrid>
          {selectedTypesOfDiet.map((typeOfDiet) => (
            <DietRestrictionChip
              key={`diet-${typeOfDiet.id}`}
              label={typeOfDiet.name}
              onDelete={selectTypeOfDiet(typeOfDiet)}
            />
          ))}
          {selectedAllergies.map((allergie) => (
            <DietRestrictionChip
              key={`allergy-${allergie.id}`}
              label={allergie.name}
              onDelete={selectAllergie(allergie)}
            />
          ))}
        </DietRestrictionsGrid>
      )}
    </>
  )
}

export async function getServerSideProps({ locale }) {
  const allergies = await getAllergiesService()
  const userAllergies = await getUserAllergiesService()

  const typesOfDiet = await getTypesOfDietService()
  const userDiets = await getUserDietsService()

  return {
    props: {
      ...(await serverSideTranslations(locale, ['dietRestrictions'])),
      locale,
      typesOfDiet,
      userDiets,
      allergies,
      userAllergies,
    },
  }
}
