import { Typography } from '@mui/material'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import AuthLayout from 'components/AuthLayout'
import ScrollSearchbar from 'components/ScrollSearchbar'
import Sections from 'components/Sections'
import Section from 'components/Section'
import DishGrid from 'features/Menu/components/DishGrid'

import getMenuSectionsService from 'features/Menu/services/getMenuSectionsService'

export default function Menu({ sections }) {
  return (
    <>
      <ScrollSearchbar />
      <Typography variant="h4" fontWeight={700} mb={2}>
        Menu
      </Typography>
      <Sections sections={sections} minScroll={75} />
      {sections.map((section) => (
        <Section key={section.id} section={section}>
          <Typography variant="h5" fontWeight={700} mb={2}>
            {section.label}
          </Typography>
          <DishGrid key={section.anchor} section={section} />
        </Section>
      ))}
    </>
  )
}

Menu.getLayout = (page) => <AuthLayout>{page}</AuthLayout>

export async function getServerSideProps({ locale }) {
  const sections = await getMenuSectionsService({})
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      locale,
      sections,
    },
  }
}
