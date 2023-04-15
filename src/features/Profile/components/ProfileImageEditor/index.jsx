import { Stack, Badge, Avatar } from '@mui/material'
import EditProfileImageButton from './EditProfileImageButton'

export default function ProfileImageEditor() {
  return (
    <Stack direction="row" spacing={2}>
      <Badge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        badgeContent={<EditProfileImageButton />}
      >
        <Avatar
          sx={{ width: 120, height: 120 }}
          src="/images/default_profile.png"
        />
      </Badge>
    </Stack>
  )
}
