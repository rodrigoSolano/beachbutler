import { Box, Typography } from '@mui/material'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import ScrollSearchbar from 'components/ScrollSearchbar'
import Sections from 'components/Sections'
import Section from 'components/Section'
import AuthLayout from 'components/AuthLayout'

import BannerCarousel from 'features/Home/components/BannerCarousel'
import OrderStatus from 'components/OrderStatus'
import DishPreviewCarousel from 'features/Home/components/DishPreviewCarousel'

import getHomeSectionsService from 'features/Home/services/getHomeSectionsService'

export default function Home({ sections }) {
  return (
    <>
      <ScrollSearchbar />
      <OrderStatus />
      <Box height={24} />
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
