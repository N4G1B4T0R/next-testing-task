import { FC, useState } from 'react';
import { IconButton, InputAdornment, TextField, Typography } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { CustomLabel } from './app-password.styles';

interface IProps {
  register?: Record<string, unknown>;
  id?: string;
  error?: string;
  label?: string;
  customLabel?: string;
  name?: string;
}

export const AppPassword: FC<IProps> = (props) => {
  const { error, id, register, customLabel, name, label } = props;
  const [showPassword, setShowPassword] = useState<boolean>(true);

  const _handeChangePassword = () => setShowPassword((prev) => !prev);

  return (
    <>
      {customLabel && <CustomLabel>{customLabel}</CustomLabel>}
      <TextField
        error={!!error}
        helperText={error}
        id={id}
        type={showPassword ? 'password' : 'text'}
        label={label}
        variant="outlined"
        placeholder="Password"
        fullWidth
        name={name}
        {...register}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={_handeChangePassword} edge="end">
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          )
        }}
      />
    </>
  );
};
