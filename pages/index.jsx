import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import AuthLayout from '../src/components/shared/AuthLayout'

export default function Index() {
  return (
    <div>
      <h1>Home</h1>
    </div>
  )
}

Index.getLayout = (page) => <AuthLayout>{page}</AuthLayout>

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      locale,
    },
  }
}
