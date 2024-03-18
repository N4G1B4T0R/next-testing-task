import { memo, FC } from 'react';
import { Box, Button } from '@mui/material';
import Image from 'next/image';
import { signIn } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';
import { IProps, AuthButtonEnum } from './interfaces';

// eslint-disable-next-line react/display-name
export const AuthButton: FC<IProps> = memo(({ name, children }: IProps) => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl');
  const _onClick = (provider: AuthButtonEnum) => {
    signIn(provider, {
      callbackUrl: callbackUrl || ''
    });
  };

  return (
    <Button variant="outlined" color="secondary" sx={{ width: 182 }} onClick={() => _onClick(name)}>
      <Image src={`/${name}-logo.svg`} width={18} height={18} alt={`${name}-logo`} />
      <Box component="span" ml={'10px'}>
        {children}
      </Box>
    </Button>
  );
});
