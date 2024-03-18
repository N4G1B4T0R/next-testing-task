import { Typography } from '@mui/material';
import { ForgotPasswordForm } from '@/app/widget/forgot-password-form';

export default function LoginPage() {
  return (
    <>
      <Typography variant="h3" align="center" sx={{ marginBottom: 5 }}>
        Forgot Password?
      </Typography>
      <ForgotPasswordForm />
    </>
  );
}
