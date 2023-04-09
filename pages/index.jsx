import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import AuthLayout from '../src/components/shared/AuthLayout'
import HomeSearchbar from '../src/features/Home/components/HomeSearchbar'

export default function Index() {
  return (
    <>
      <HomeSearchbar />
      <div
        style={{
          height: '1000vh',
        }}
      />
    </>
  )
}

Index.getLayout = (page) => <AuthLayout>{page}</AuthLayout>

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'home'])),
      locale,
    },
  }
}
