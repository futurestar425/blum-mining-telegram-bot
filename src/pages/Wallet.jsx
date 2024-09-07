import React, { useEffect, useState } from 'react';
// import CustomLink from '@/components/CustomLink';

export default function Wallet() {
  
  const [shortName, setShortName] = useState("");
  
  const onClickConnectWallet = () => {

  }

  return (
    <div className="h-screen flex flex-col items-center justify-end px-4 bg-black text-white">
      <img className='mb-12 w-24' src="https://telegram.blum.codes/_dist/1.CQeG45WY.gif" alt="logo" />

      <h1>Levelling up</h1>
      <h4 className='w-60 mt-6 mb-20 text-center text-gray-300 ' >
        Connect your wallet to access upcoming crypto features. Our team is working hard to bring them to you soon!
      </h4>

      <button onClick={onClickConnectWallet} className=" w-full mb-8 mx-20 py-4 bg-gray-200 text-black font-bold rounded ">
        Connect Wallet
      </button>
    </div>
  );
}
