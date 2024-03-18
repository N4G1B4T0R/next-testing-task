import { Typography } from '@mui/material';
import { LoginForm } from '@/app/widget/login-form';

export default function LoginPage() {
  return (
    <>
      <Typography variant="h3" align="center" sx={{ marginBottom: 5 }}>
        Log in to your account
      </Typography>
      <LoginForm />
    </>
  );
}
