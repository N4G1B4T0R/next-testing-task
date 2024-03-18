import { Box, Container, Grid } from '@mui/material';
import Image from 'next/image';
import { Suspense } from 'react'
export default function AuthLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Container>
      <Box width="100%" height="100vh">
        <Grid
          height="inherit"
          container
          direction="column"
          justifyContent="center"
          alignItems="center">
          <Grid item>
            <Box mb={10}>
              <Image src="/logo.svg" width={178} height={32} alt="logo" />
            </Box>
          </Grid>
          <Suspense>
            <Grid container justifyItems="center" sx={{ maxWidth: '400px' }} justifyContent="center">
              {children}
            </Grid>
          </Suspense>
        </Grid>
      </Box>
    </Container>
  );
}
