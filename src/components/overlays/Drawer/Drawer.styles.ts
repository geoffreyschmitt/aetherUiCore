'use client';
import styled from 'styled-components';
import { Dialog } from '@/components/overlays/Dialog';
import { TDrawerStyled } from '@/components/overlays/Drawer/Drawer.types';

export const RootElement = styled(Dialog)<TDrawerStyled>`
  margin: ${({ $position }) =>
    $position === 'left' ? '0 auto 0 0' : '0 0 0 auto'};
  height: 100%;
`;
