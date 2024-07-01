'use client';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount } from "wagmi";

function Page() {
  // Get the current account
  const account = useAccount();
  
  return (
    <>
    <div className='flex justify-end p-6'>
      <ConnectButton  />
    </div>
    <div className='flex justify-center p-6 text-white'>
      <h1>{account.isConnected ? account.address : "No wallet connected"}</h1>
    </div>
    </>
  );
}

export default Page;