'use client';

import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import {
  arbitrum,
  sepolia,
} from 'wagmi/chains';

export const config = getDefaultConfig({
  appName: 'ithaca-test',
  projectId: 'b53584e84bbc4a2c01ebe64ea74d4c41',
  chains: [
    arbitrum,
    sepolia,
  ],
  ssr: true,
});