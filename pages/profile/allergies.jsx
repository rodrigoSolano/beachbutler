import { Typography } from '@mui/material'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import AuthLayout from 'components/AuthLayout'

export default function AllergiesAccount() {
  return (
    <div>
      <Typography variant="h5" color="grey.300" fontWeight={700} mt={1}>
        Mi alergias
      </Typography>
    </div>
  )
}

AllergiesAccount.getLayout = (page) => <AuthLayout>{page}</AuthLayout>

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      locale,
    },
  }
}
