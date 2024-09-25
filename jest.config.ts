import type { Config } from '@jest/types';
import nextJest from 'next/jest.js';

import { getPackageAliases } from '@storybook/nextjs/export-mocks';

const createJestConfig = nextJest({
  dir: './',
});

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.tsx'],
  maxWorkers: 1,
  moduleNameMapper: {
    ...getPackageAliases(),
  },
};

export default createJestConfig(config);
