import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import {
  arbitrum,
  base,
  mainnet,
  optimism,
  polygon,
  sepolia,
} from 'wagmi/chains';

export const wagmiConfig = getDefaultConfig({
  appName: 'Zoro',
  projectId: '128f35b749df997a7a038724a51304c1',
  chains: [
    mainnet,
    polygon,
    optimism,
    arbitrum,
    base,
    ...(import.meta.env.APP_ENABLE_TESTNETS === 'true' ? [sepolia] : []),
  ],
});
