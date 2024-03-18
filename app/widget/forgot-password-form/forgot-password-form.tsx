'use client';
import { TextField, Button, Box, Typography, Alert } from '@mui/material';
import NextLink from 'next/link';
import { useFormState, useFormStatus } from 'react-dom';
import { forgotPassword } from '@/app/widget/forgot-password-form/lib/actions';

export const ForgotPasswordForm = () => {
  const { pending } = useFormStatus();
  const [errorMessage, dispatch] = useFormState(forgotPassword, undefined);

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
        <TextField
          error={!!errorMessage?.errors?.email}
          id="email"
          label="Enter your email"
          name="email"
          variant="outlined"
          fullWidth
        />
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

      <Button variant="contained" fullWidth type="submit" disabled={pending}>
        Send
      </Button>
      <Box mt="20px">
        <Button
          variant="outlined"
          color="secondary"
          fullWidth
          component={NextLink}
          href="/auth/login">
          Cancel
        </Button>
      </Box>
    </Box>
  );
};
