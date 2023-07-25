'use client'
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount, useBalance } from 'wagmi';

export default function Home() {
  const account = useAccount();
  const balance = useBalance({
    address: account?.address,
})

  console.log('account', account);
  console.log('balance', balance);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ConnectButton />
    </main>
  )
}
