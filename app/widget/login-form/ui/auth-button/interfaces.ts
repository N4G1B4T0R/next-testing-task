import { ReactNode } from 'react';

export enum AuthButtonEnum {
  Google = 'google',
  Github = 'github'
}

export interface IProps {
  name: AuthButtonEnum;
  children: ReactNode;
}
