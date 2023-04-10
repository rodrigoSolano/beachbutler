import { Box, Typography } from '@mui/material'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import AuthLayout from '../src/components/shared/AuthLayout'
import HomeSearchbar from '../src/features/Home/components/HomeSearchbar'
import BannerCarousel from '../src/features/Home/components/BannerCarousel'
import Sections from '../src/features/Home/components/Sections'
import getHomeSectionsService from '../src/features/Home/services/getHomeSectionsService'
import Section from '../src/features/Home/components/Section'
import DishPreviewCarousel from '../src/features/Home/components/DishPreviewCarousel'

export default function Home({ sections }) {
  return (
    <>
      <HomeSearchbar />
      <BannerCarousel />
      <Sections sections={sections} />
      {sections.map((section) => (
        <Section section={section} key={section.id}>
          <Typography variant="h5" fontWeight={700} mb={2}>
            {section.label}
          </Typography>
          <DishPreviewCarousel section={section} />
        </Section>
      ))}
      <Box height={16} />
    </>
  )
}

Home.getLayout = (page) => <AuthLayout>{page}</AuthLayout>

export async function getServerSideProps({ locale }) {
  const sections = await getHomeSectionsService({})
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'home'])),
      locale,
      sections,
    },
  }
}
