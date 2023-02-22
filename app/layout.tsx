'use client';

import './globals.css';

import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react';

import Navbar from '@/components/navbar';

const activeChainId = ChainId.Mumbai;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <ThirdwebProvider activeChain={activeChainId}>
          <Navbar />
          {children}
        </ThirdwebProvider>
      </body>
    </html>
  );
}
