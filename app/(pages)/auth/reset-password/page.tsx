import { Typography } from '@mui/material';
import { ResetPasswordForm } from '@/app/widget/reset-password-form';

export default function LoginPage() {
  return (
    <>
      <Typography variant="h3" align="center" sx={{ marginBottom: 5 }}>
        Create new Password?
      </Typography>
      <ResetPasswordForm />
    </>
  );
}
