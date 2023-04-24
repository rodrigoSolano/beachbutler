import { Box, Stack, Typography } from '@mui/material'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import AuthLayout from 'components/AuthLayout'
import TopReturnBar from 'features/Profile/components/TopReturnBar'
import Input from 'components/Input'

export default function ProfileAccount() {
  return (
    <Box mt={3}>
      <TopReturnBar>
        <Typography variant="h5" color="grey.300" fontWeight={700}>
          Your info
        </Typography>
      </TopReturnBar>
      <Stack direction="column" gap={2} mt={3}>
        <Stack direction="column" gap={1}>
          <Typography variant="body1" color="grey.300">
            Last name
          </Typography>
          <Input
            textAlign="left"
            placeholder="Last name"
            variant="outlined"
            size="small"
            fullWidth
          />
        </Stack>
        <Stack direction="column" gap={1}>
          <Typography variant="body1" color="grey.300">
            Room number
          </Typography>
          <Input
            textAlign="left"
            placeholder="Room number"
            variant="outlined"
            size="small"
            fullWidth
          />
        </Stack>
        <Stack direction="column" gap={1}>
          <Typography variant="body1" color="grey.300">
            Phone number
          </Typography>
          <Input
            textAlign="left"
            placeholder="Phone number"
            variant="outlined"
            size="small"
            fullWidth
          />
        </Stack>
        <Stack direction="column" gap={1}>
          <Typography variant="body1" color="grey.300">
            Email
          </Typography>
          <Input
            textAlign="left"
            placeholder="Email"
            variant="outlined"
            size="small"
            fullWidth
          />
        </Stack>
      </Stack>
    </Box>
  )
}

ProfileAccount.getLayout = (page) => <AuthLayout>{page}</AuthLayout>

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      locale,
    },
  }
}
