import React, { useState } from 'react';
import Link1 from '../components/Link1';

export default function Tasks () {
  const tabList = ["New", "OnChain", "Socials", "Academy"];
  const LinkData = [
    {
      icon: 'youtubo',
      title: 'What are crypto',
      value: 250,
      url: 'cc'
    },
    {
      icon: 'youtubo',
      title: 'What is staking?',
      value: 250,
      url: 'c'
    }
  ]
  const [selectedTab, setSelectedTab] = useState(tabList[0]);

  return (
    <div className="h-screen px-4 bg-indigo-950 text-white">
      <h1 className="pt-8">Earn</h1>
      {/* <h1 className="pt-8">Tasks<sup>51</sup></h1> */}
      {/* <h5 className="mt-4 text-gray-300">We'll reward you immediately with points after each task completion.</h5> */}
      <div className="flex justify-between mr-2 py-8 1space-x-4 overflow-auto">
        {
          tabList.map(name => {
            return (
              <h3 
                className={`${selectedTab===name? 'text-white': 'text-dark'} cursor-pointer hover:text-gray-400`} 
                key={name}
                onClick={() => setSelectedTab(name)}>{name}
              </h3>
            )
          })
        }
      </div>
      {
        selectedTab === "New" && LinkData.map(({icon, title, value, url}, index) => 
          (
            <Link1 
              key={index} 
              icon={icon} 
              title={title} 
              value={value} 
              url={url} 
            />
          )
        )
      }
      {
        selectedTab === "OnChain" && LinkData.map(({icon, title, value, url}, index) => 
           (
            <Link1 
              key={index} 
              icon={icon} 
              title={title} 
              value={value} 
              url={url} 
            />
          )
        )
      }
      {
        selectedTab === "Socials" && LinkData.map(({icon, title, value, url}, index) => 
           (
            <Link1 
              key={index} 
              icon={icon} 
              title={title} 
              value={value} 
              url={url} 
            />
          )
        )
      }
      {
        selectedTab === "Academy" && LinkData.map(({icon, title, value, url}, index) => 
           (
            <Link1 
              key={index} 
              icon={icon} 
              title={title} 
              value={value} 
              url={url} 
            />
          )
        )
      }
    </div>
  )
}