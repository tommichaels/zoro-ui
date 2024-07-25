import App from 'App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import * as buffer from "buffer";
window.Buffer = buffer.Buffer;
import 'assets/styles/index.scss';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';
import { darkTheme, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import '@rainbow-me/rainbowkit/styles.css';

import { wagmiConfig } from 'components/wagmi/wagmi';

import 'index.css';

import initializeLibraries from './initializeLibraries';

const root = ReactDOM.createRoot(document.getElementById('root'));

const queryClient = new QueryClient();

initializeLibraries();

root.render(
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider theme={darkTheme({
            accentColor: '#dfbe52',
            fontStack: 'rounded',
            overlayBlur: 'small',
    })}>
          <App />
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>);
