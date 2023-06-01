import { Box, Typography } from '@mui/material'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import AuthLayout from 'components/AuthLayout'
import TopReturnBar from 'features/Profile/components/TopReturnBar'
import List from 'components/List'
import ListItem from 'components/ListItem'

import getAllergiesService from 'features/DietRestrictions/services/getAllergiesService'

export default function AllergiesAccount({ allergies = [] }) {
  return (
    <Box mt={3}>
      <TopReturnBar>
        <Typography variant="h5" color="grey.300" fontWeight={700}>
          Allergies
        </Typography>
      </TopReturnBar>
      <Typography variant="body2" color="grey.75" mt={1}>
        Selecciona los ingredientes a los cuales eres alérgico.
      </Typography>
      <List>
        {allergies?.edges?.map(({ node }) => (
          <ListItem
            key={node.id}
            title={node.name}
            isChecked={node.isAllergic}
          />
        ))}
      </List>
      <Box height={16} />
    </Box>
  )
}

AllergiesAccount.getLayout = (page) => <AuthLayout>{page}</AuthLayout>

export async function getServerSideProps({ locale }) {
  const allergies = await getAllergiesService({})

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      locale,
      allergies,
    },
  }
}
