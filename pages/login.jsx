import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import LoginContextProvider from '../src/features/Login/context/LoginContextProvider'
import GuestInformation from '../src/features/Login/components/GuestInformation'

export default function Login() {
  return (
    <LoginContextProvider>
      <GuestInformation />
    </LoginContextProvider>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['login'])),
      locale,
    },
  }
}
