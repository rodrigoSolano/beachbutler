import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import AuthLayout from '../../src/components/AuthLayout'

export default function Menu() {
  return (
    <div>
      <h1>Menu</h1>
    </div>
  )
}

Menu.getLayout = (page) => <AuthLayout>{page}</AuthLayout>

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      locale,
    },
  }
}
