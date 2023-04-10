import { Typography } from '@mui/material'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import AuthLayout from '../src/components/shared/AuthLayout'
import HomeSearchbar from '../src/features/Home/components/HomeSearchbar'
import BannerCarousel from '../src/features/Home/components/BannerCarousel'
import Sections from '../src/features/Home/components/Sections'
import getSectionsService from '../src/features/Home/services/getSectionsService'
import Section from '../src/features/Home/components/Section'

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
          <div style={{ height: 500 }} />
        </Section>
      ))}
    </>
  )
}

Home.getLayout = (page) => <AuthLayout>{page}</AuthLayout>

export async function getServerSideProps({ locale }) {
  const sections = await getSectionsService({})
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'home'])),
      locale,
      sections,
    },
  }
}
