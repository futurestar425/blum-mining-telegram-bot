import React, { useEffect, useState } from 'react';
// import CustomLink from '@/components/CustomLink';

export default function Frens() {
  
  const orderLists = [
    {
      title: "Share your invitation link",
      discription: "Get a play pass for each fren"
    },
    {
      title: "Your friends join Blum",
      discription: "And start farming points"
    },
    {
      title: "Score 10% from buddies",
      discription: "Plus an extra 2.5% from their referrals"
    }
  ];

  const [shortName, setShortName] = useState("");
  
  const onClickConnectWallet = () => {

  }

  return (
    <div className="h-screen flex flex-col items-center justify-end px-4 bg-indigo-950 text-white">
      <div className='flex flex-col w-full overflow-auto'>
        <img className='self-center mb-8 w-16' src="https://telegram.blum.codes/_dist/Friends.ClqyQOtA.webp" alt="frens-logo" />

        <h1 className='text-center'>Invite frens. Earnpoints</h1>
        <h3 className='mt-8'>How it works</h3>
        {
          orderLists.map((item, index) => {
            return (
              <div key={index} className='flex flex-col mt-8'>
                <div className='stick'></div>
                <h4>{item.title}</h4>
                <h5>{item.discription}</h5>
              </div>
            )
          })
        }
      </div>

      <button onClick={onClickConnectWallet} className=" w-full m-8 mx-20 py-4 text-18 bg-gray-200 text-black font-bold rounded ">
        <h4>Invite a fren</h4>
      </button>
    </div>
  );
}
