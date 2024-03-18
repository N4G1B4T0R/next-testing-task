'use client';
import { Typography, Button, Grid } from '@mui/material';
import { useFormState } from 'react-dom';
import { logout } from './lib/actions';

export default function DashboardPage() {
  const [_, dispatch] = useFormState(logout, undefined);

  return (
    <>
      <Typography variant="h3" align="center" sx={{ marginBottom: 5 }}>
        Private dashboard
      </Typography>
      <Grid container justifyContent="center">
        <form action={dispatch}>
          <Button
            variant="contained"
            type='submit'
          >
            Logout
          </Button>
        </form>
      </Grid>
    </>
  );
}
