'use client';
import { Button, Box, Typography, Alert, TextField } from '@mui/material';
import { useFormState, useFormStatus } from 'react-dom';
import { AppPassword } from '@/app/shared/ui';
import { useSearchParams } from 'next/navigation';
import { resetPassword } from './lib/actions';

export const ResetPasswordForm = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get('token');
  const secret = searchParams.get('secret');
  const { pending } = useFormStatus();
  const [errorMessage, dispatch] = useFormState(resetPassword, undefined);

  return (
    <Box
      component="form"
      action={dispatch}
      display="flex"
      flexDirection="column"
      justifyItems="center"
      sx={{ width: '100%', maxWidth: '400px' }}
      justifyContent="center">
      <Box mb={3} width="inherit">
        <AppPassword name="password" customLabel="Password" />
      </Box>
      <Box mb={3} width="inherit">
        <AppPassword name="confirmPassword" customLabel="New password" />
      </Box>
      {errorMessage ? (
        <Box mb={3} width="inherit">
          <Alert icon={false} severity="error">
            <Typography paragraph mb={0}>
              {errorMessage?.message}
            </Typography>
          </Alert>
        </Box>
      ) : null}

      <Box display="none">
        <TextField name="token" value={token || ''} />
        <TextField name="secret" value={secret || ''} />
      </Box>

      <Button variant="contained" fullWidth type="submit" disabled={pending}>
        Reset password
      </Button>
    </Box>
  );
};
