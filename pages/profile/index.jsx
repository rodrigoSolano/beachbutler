import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import AuthLayout from '../../src/components/shared/AuthLayout'

export default function Profile() {
  return (
    <div>
      <h1>Profile</h1>
    </div>
  )
}

Profile.getLayout = (page) => <AuthLayout>{page}</AuthLayout>

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      locale,
    },
  }
}
