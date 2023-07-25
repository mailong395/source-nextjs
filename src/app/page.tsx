'use client'
import ChainComp from '@/components/ChainComp';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useEffect, useState } from 'react';
import { useAccount, useBalance, useNetwork, useSignMessage } from 'wagmi';
import {
  useConnectModal,
  useAccountModal,
  useChainModal,
} from '@rainbow-me/rainbowkit';

export default function Home() {
  const account = useAccount();
  const [message, setMessage] = useState();
  const { openConnectModal } = useConnectModal();

  const handleConnection = () => {
    if (!message) openConnectModal();
  }



  // const { isConnected, address } = useAccount();
  // const { openConnectModal } = useConnectModal();
  // const [ message, setMessage ] = useState<any>();
  // const [ token, setToken ] = useState();
  // const [ signature, setSignature ] = useState<any>();
  // const { data, isError, isLoading, isSuccess, signMessage } = useSignMessage({
  //   message: 'gm wagmi frens',
  //   onSuccess(data) {
  //     setSignature(data);
  //   },
  //   onSettled(data, error) {
  //     console.log('Settled', { data, error })
  //   },
  //   onMutate(args) {
  //     console.log('Mutate', args)
  //   },
  //   onError(error) {
  //     console.log('Error', error)
  //   },
  // });

  // console.log('message', message);

  // const [ token, setToken ] = useState();
  // const { openAccountModal } = useAccountModal();
  // const { openChainModal } = useChainModal();

  // const fetchMessage = async () => {
  //   const res = await fetch('https://api-stag.innovaz.io/v1/dapp/auth/sign');
  //   await res.json().then(value => setMessage(value?.data));
  // }
  // const signIn = async () => {
  //   const nonce = await fetchNonce();
  //   console.log('nonce', nonce);
  //   const res = await fetch('https://api-stag.innovaz.io/v1/dapp/auth/sign_in', {
  //     method: 'POST',
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({"signature":"0x6113cfe076170d017b16920b94b343954139aa5d693ecf7d2bcdefc633d9aa9866681747c60c1c787b8c039f977c97d2a35a83729d351a24b6a7c7abaf2daf3f1c","nonce":"73648487","public_address":"0x183Ff214179cd2B1c06A937D663F192340edd159","chain_id":1})
  //   })
  //   res.json().then(value => {
  //     setToken(value?.data?.access_token);
  //     localStorage.setItem('access-token', value?.data?.access_token);
  //   });
  //   console.log('Account Verified!');
  // }
  // const handleSignMessage = () => {
  //   signMessage();
  // }

  // useEffect(() => {
  //   if (isConnected) {
  //     if (!message) {
  //       fetchMessage();
  //       signMessage();
  //     }
  //   }
  //   if (isConnected) {
  //     signIn();
  //   } else {
  //     setToken(undefined);
  //   }
  // }, [address]);

  // const handleConnection = () => {
  //   show modal
  //   check message if don't have message call API get message
  //   else check token if don't have token call API sign in
  // }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-2">
      {
        account?.isConnected && 
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => handleConnection()} type="button">
          Open Connect Modal
        </button>
      }













      {/* {!isConnected ? <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => handleConnection()} type="button">
        Open Connect Modal
      </button>
      : <div>
        <span>{message?.sign_msg}</span>
      </div>}

      <ConnectButton />

      {token && <ChainComp />}

      {
        token ? 
        <>
          <button onClick={openAccountModal} type="button">
            Open Account Modal
          </button>
          <button onClick={openChainModal} type="button">
            Open Chain Modal
          </button>
        </>
        :
        <button onClick={openConnectModal} type="button">
          Open Connect Modal
        </button>
      }

      <button onClick={()=> handleSignMessage()}>Sign Message</button> */}
    </main>
  )
}
