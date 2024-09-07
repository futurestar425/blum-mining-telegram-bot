import React from 'react';

export default function Link1({icon, title, value, url}) {
  const icons = {
    youtubo: 'https://s3.blum.codes/d72d558b-ce90-4e80-8dd8-109a134fe36a/c11fe842-e014-4ae2-94d7-f93e2cfd3ed5',
    instegram: '',
    facebook: '',
  }

  return (
    <div className="flex items-center">
      <img src={icons[icon]} className="mr-4 w-6" />
      <div className="w-full flex items-center justify-between py-3 border border-b-1 border-l-0 border-r-0 border-t-0 border-dark">
        <div>
          <h4 className=''>{title}</h4>
          <p>{value > 0 ? "+"+value : "-"+value}{" "}BP</p>
        </div>
        <a href={url} 
          className="mr-2 px-4 py-2 bg-dark text-white rounded-full"
        >
          Start
        </a>
      </div>
      <hr/>

    </div>
  )
}