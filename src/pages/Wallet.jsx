import React, { useEffect, useState } from 'react';
// import CustomLink from '@/components/CustomLink';

export default function Wallet() {
  
  const [shortName, setShortName] = useState("");
  
  const onClickConnectWallet = () => {

  }

  return (
    <div className="flex flex-col items-center px-4 text-white">
      <div className="w-full mt-8 mb-16 overflow-auto flex flex-col items-center">
        <img className='mb-12 w-24' src="https://telegram.blum.codes/_dist/1.CQeG45WY.gif" alt="logo" />

        <h1>Levelling up</h1>
        <h4 className='w-60 mt-6 mb-16 text-center text-gray-300 ' >
          Connect your wallet to access upcoming crypto features. Our team is working hard to bring them to you soon!
        </h4>
      </div>

      <div className="pt-4 bg-indigo-950">
        <button 
          onClick={onClickConnectWallet} 
          className="fixed bottom-16 inset-x-4 mt-4 py-3 bg-white text-black font-bold rounded-md">
          <h4>Connect Wallet</h4>
        </button>
      </div>
      {/* <button onClick={onClickConnectWallet} className=" w-full mb-8 mx-20 py-4 bg-gray-200 text-black font-bold rounded ">
        Connect Wallet
      </button> */}
    </div>
  );
}
