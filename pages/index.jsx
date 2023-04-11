import { Box, Typography } from '@mui/material'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import ScrollSearchbar from '../src/components/ScrollSearchbar'
import Sections from '../src/components/Sections'
import Section from '../src/components/Section'
import AuthLayout from '../src/components/shared/AuthLayout'

import BannerCarousel from '../src/features/Home/components/BannerCarousel'
import DishPreviewCarousel from '../src/features/Home/components/DishPreviewCarousel'

import getHomeSectionsService from '../src/features/Home/services/getHomeSectionsService'

export default function Home({ sections }) {
  return (
    <>
      <ScrollSearchbar />
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
