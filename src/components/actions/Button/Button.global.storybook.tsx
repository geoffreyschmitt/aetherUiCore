import React from 'react';
import styled from 'styled-components';
import { fn } from '@storybook/test';

import { SATComponentPropsWithRequiredChildren } from '@/aether-ui-core/src/utils';

export const SATButton = {
  ...SATComponentPropsWithRequiredChildren,
  isLoading: {
    table: {
      category: 'Data',
    },
    control: 'boolean' as const,
  },
};

export const decoratorButton = [
  // @ts-expect-error working as intended
  Story => {
    return (
      <Container>
        <Story />
      </Container>
    );
  },
];

const Container = styled.div<{
  $background?: string;
}>`
  width: 100%;
  padding: 20px;
`;

export const ButtonArgs = {
  children: 'ACHAT EXPRESS',
  onClick: fn(),
};
