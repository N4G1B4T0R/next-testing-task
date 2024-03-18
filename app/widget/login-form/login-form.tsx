'use client';
import { TextField, Button, Box, Divider, Grid, Typography, Fade, Alert } from '@mui/material';
import NextLink from 'next/link';
import Link from '@mui/material/Link';
import { useFormState } from 'react-dom';
import { authenticate } from '@/app/widget/login-form/lib/actions';
import { AuthButton, AuthButtonEnum } from './ui';
import { AppPassword } from '@/app/shared/ui';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginFormSchema, FormSchema, EmailSchema } from './schema';
import { useEffect, useState } from 'react';

export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);
  const {
    register,
    watch,
    formState: { errors }
  } = useForm<LoginFormSchema>({
    mode: 'all',
    resolver: zodResolver(FormSchema),
    values: {
      email: '',
      password: ''
    }
  });

  const watchEmail = watch('email');

  useEffect(() => {
    const validatedFields = EmailSchema.safeParse({
      email: watchEmail
    });

    if (validatedFields.success) {
      setShowPassword(true);
    }
  }, [watchEmail]);

  return (
    <Box
      component="form"
      action={dispatch}
      display="flex"
      flexDirection="column"
      justifyItems="center"
      sx={{ width: '100%', maxWidth: '400px' }}
      justifyContent="center">
      <Grid container justifyContent="space-between">
        <Box sx={{ mb: { xs: 2, md: 0 }, width: { xs: 'inherit', md: 'auto' }}}>
          <AuthButton name={AuthButtonEnum.Google}>Google</AuthButton>
        </Box>
        <AuthButton name={AuthButtonEnum.Github}>Github</AuthButton>
      </Grid>

      <Box mt={4} mb={4} width="inherit">
        <Divider>
          <Typography variant="body2">OR</Typography>
        </Divider>
      </Box>

      <Box mb={3} width="inherit">
        <TextField
          label="Work email"
          variant="outlined"
          fullWidth
          {...register('email')}
          error={!!errors?.email || !!errorMessage?.errors?.email?.[0]}
          helperText={errors?.email?.message || errorMessage?.errors?.email?.[0]}
        />
      </Box>

      <Fade in={showPassword}>
        <Box mb={3} width="inherit" display={showPassword ? 'flex' : 'none'}>
          <AppPassword
            register={{ ...register('password') }}
            error={errors?.password?.message || errorMessage?.errors?.password?.[0]}
          />
        </Box>
      </Fade>

      {!errorMessage?.errors && errorMessage?.message ? (
        <Box mb={3} width="inherit">
          <Alert icon={false} severity="error">
            <Typography paragraph mb={0}>
              {errorMessage?.message}
            </Typography>
          </Alert>
        </Box>
      ) : null}

      <Box ml={'auto'} mb={'30px'}>
        <Link href="/auth/forgot-password" component={NextLink} variant="body1">
          Forgot your password?
        </Link>
      </Box>
      <Button variant="contained" fullWidth type="submit">
        Log in to your Account
      </Button>
      <Box mt="20px">
        <Typography variant="body1" align="center">
          Is your company new to Qenсode?{' '}
          <Link href="/" component={NextLink} variant="body1">
            Sign up?
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};
