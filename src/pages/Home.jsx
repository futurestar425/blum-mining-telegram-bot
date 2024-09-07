import React, { useEffect, useState } from 'react';

export default function Home() {
  
  const [shortName, setShortName] = useState("");
  
  const onClickStartFarming = () => {
  }
  const divStyle = {
    backgroundImage: `url(data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='344' height='144' fill='none'%3E%3Cg stroke='%232FC654' stroke-linecap='round' stroke-linejoin='round' stroke-width='.25' opacity='.6'%3E%3Cpath d='m407.059-8.28-87.631 30.077-294.855.003-87.5-30.005M407.059 72.576l-83.239-.072H24.573l-87.5.079M407.059 153.432l-87.625-30.223H24.573l-87.5 30.158M331.425 395.647v-646.551M24.574 395.647v-646.551M319.428 395.647v-646.551M12.565 395.647v-646.551M282.573 395.554V-251M135.146 395.554V-251M245.717 395.554V-251M208.86 395.554V-251M172.003 395.554V-251M98.289 395.554V-251M61.432 395.554V-251M24.574 395.554V-251'/%3E%3C/g%3E%3C/svg%3E)`,
    backgroundPosition: '50%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% auto',
    position: 'relative',
  };
  const backgroundImg = "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='344' height='144' fill='none'%3E%3Cg stroke='%232FC654' stroke-linecap='round' stroke-linejoin='round' stroke-width='.25' opacity='.6'%3E%3Cpath d='m407.059-8.28-87.631 30.077-294.855.003-87.5-30.005M407.059 72.576l-83.239-.072H24.573l-87.5.079M407.059 153.432l-87.625-30.223H24.573l-87.5 30.158M331.425 395.647v-646.551M24.574 395.647v-646.551M319.428 395.647v-646.551M12.565 395.647v-646.551M282.573 395.554V-251M135.146 395.554V-251M245.717 395.554V-251M208.86 395.554V-251M172.003 395.554V-251M98.289 395.554V-251M61.432 395.554V-251M24.574 395.554V-251'/%3E%3C/g%3E%3C/svg%3E";
  
  const gameImg = `data:image/webp;base64,UklGRuwIAABXRUJQVlA4WAoAAAAQAAAAfwAAfwAAQUxQSMcBAAABh2CQbaQ/gqvBvz/nQ0REjtfY1AFYkmzVbY5el3tRBGf/65WjiMtxfiP6PwHI23gfUP2pF3Wky2ORR5PHkNf+U+0jH7ZWZPDvTR5DXi/qSJfHIo//AKtPLc9WH49y8nGk2fn4WpL0Mg1eSw7Sp8FrScIyDf6sSWjT4JWF+zRYv7UaNs4W93UuJMswxncz0eQx5PWijnR5POSZAHupmr1lVrPB35ngCHB58K4OIQ8mD/t+zubc79dRgJhNYHjr6hDyYPLg8uDy4F0dDjuzVbvfsgCWzZBeR6POkNeLOtLlscijyWPIa99D+0i5rZUbKjd5DHm9qCNdHou8L9DlweXBuzqEPJg8eGt62scbAE1Nw2N9IQ8mDy4PLg/e1SHk/allM6TXtdl9zVbtyBKcZi/qSJfHIo8mjyGvmzrGOOt+X2dT932Uk/M2eQx5vagjXR5Lumr2ltn5Di2bAW8B9lIVcMiDy4N3dQh5MHnw6dS434aBRZ3Ljl+OAuzfGq5pwLKsP9OAJ8FyTQOeBMs1DXjPgeWaBiIJUB9vaWD1qY3y6mgz1ufy4PLgXR1CHkwevLUn7aMMAO13DYL1hTyYPLg8uDx4V4eYAABWUDgg/gYAALAtAJ0BKoAAgAA+iTqYR6UjoqEvFN2goBEJagDRfYT+J/h32qmX+5/jL7Q1i/yf9h/THOH0Zpt/MA/S3qAeYDnvPUA/03U4bxX/hP+b1AH//9gD+Af//iVf8R1n6+bukL3y3O90RkfsKrmc0OXq8/Yb2AFeEFvLfyZuoGq6m74C/G+TQ6x1spHDn9W5S3ZjtK8HtKhojwmqUrbJ+vSh8zvexRs4aHe00C3eZ7q3qIe7u4s+UjmIxFDsPDteKeXvyVCr8MflRdsV1xdscJfsNYLRIzUbEQ5S3SBu5TEtHWpzXB7GFo6fjmh2kShy/hiIdtqNZVmdN1gW9hgu2ZPPh4UxrqzANbPinMJX7fTQzC9QOHeRk4wX/OAaXyE1laZw8iCwrBu2MhDKfbagFHTtu7jf5m5KTUpeciyp/s04eYScz27QCkHpnOtZplJGQdLzzq2RKkWLP+EtDw/AG8vsr63lgjEC/n4mngKRuxktfMyc/p3osKgAAP78XNH8ufCf++3Fju+0XXrndu472L79UakgYex/Nbfacdb2kd20kEnaJNB1ME+I+xEedHiV1GZJawC5+IFnFgzBo8d5dlc6WYAnf48yqHozwSLjkWKXB02T54mA3BIu6sO/0YQzVAX9okEQBN+b/v/m6EUkS6cXgdHsgHVoYHRE4nJxhSDZK9v4BNeIgw8AuryWgW/F7qYe+u22AxjEsVgi8/tCysqcOgT6CDJb3uGE1bClp6oVz88cnHhdVAsXMwjepqDrgTlb96Sb8F7cJsdOa7yjzd3nNY+nRNo1lipRaSqliu3r153/nCPv+jn4Gqf+MXp3xYkTcKCzRsrgf9TPVxhEguCWqZ0P4hhpUXYT2bjmV03pBYrArByn4ikgQlHCTK30NylEExN5/CCngs60qRD90mWroVtBj+YvKGvm4Ws3ayRj3swAaL12QQVODE+cngvUudrSogtRA2aQQVevjE/790B8u4Oc0bGialbX1fdaLsooGWtY+YFTHMdPqStBK3s4iGlHGNHA3DRxQpAsbiY6wnhx1fhkmN1iJPTxm+VMYNc558ZwYQ38Zep5QlCGYZxBfrQkSXTKCUSvRtdAQjNg9QafL/R55Nidwvw9ALfkpMTLOstLoK4wXMvMJvIvnsX9s5orN0/Ba8VcAP036hOfobo5D4NDoAfm3r7sZJymGiR+T9McGl1QX95k/ED24AkBaKHeNiASBvUDAXsAUJRNsDhrhPCNKe94KEHwmiI9XtPgatQAILIa0Y7U3f+6ov5Es0FCCpHRc4eLIFqWG4YO08r2rUalyCkpno3rWfNyPeO79DaTe0dKT19DdhbvVYRp1vqWPW9gJYqVmoccYk8Px4NIqBA01CMyn08ZT+0U5/HOYVPMtNHI9vR7U6AQCt327cmGyQ+QUz1lVxUI2Dc6aNQfHVaFXFP+95HSZARyRGYp7NHUOSICBbsErVl8wPVkt9nF9L1faLeQkdR672AWNj7+OkghttyU6uRXBEDuSn2z4UvuJHQXzJUSEBFdwdcLdTfDUcqZVh1AzypksM11YX9vWPsbl7LRJDWQJPBh4P4Ner05wbjvExywIyTfHMdpgMae0bWwxSAHfTaaKnhUPK/nQZiTHd+7Pr37OsGSYQsDkOCq6+alrgpKrS3ZEee6rCJSJpuKLP45PQsE2yafPoPMGs2WVR1PtoWWwzLNem+SbT0CT8cZOogDS0t/imxQoT+FPKBubQK3jIXZcTqswit/EJ/nAX4n9QnPzoJ8bG+J/WLVe8Ifg2ypyqQFoojueuGDIHK/mvZllUyYGYR2quCWMCcwNW+xWd9V13B34k6ud8O8ILAsPYhN121hioMcg6LTp3F04zQzwbqh53lvGsOnIvXuP5XCoRhtfDfSG22t4rsGN1hhKDXSXkuVBUUr2nkn37+wYae0dw6lLn3NGm5mEIzEr7C9xitBKFRJ7O1LE8lsem9GqOd+mdzLx7+2nGnpraxrM/PLzeia+Eb1IE7hPWg7R+Kq9c+EMqICyDPFoLoEqZX1+yC/zv4ZR5FcF25H89UcAD9ORXJ2OT3rOwMhT0ntGK9LZJdvh4hVLTzdphPkTjW2hvwERmsJ6sHIiKK1pVQA3q+XW+NPpnGI7hnjcgGc1wfhjtiL6RDtGVbtlZXD1GqxHhVbaTs9CYoy8XFUwDVRkn+tgFrk63EW8bcpjcCPbEBbLf+a5qTlI8WlPdLvwkrVSQbTde9XWfbVnXQzrgrkAAAADoNtuacWFHOVO3X/X2JcI+otHPcZiastheeQpikiBqZuCn3Dh+tTh3htfJnctyK4ps18rhEfyZUemtlEqx+xxyG+DTx+Ndu5bus435/gUQBI4KTuHiFTB58hnrvl2if1PXCv9KIAAAAA`
  const gameAvatar = "data:image/webp;base64,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"
  
  return (
    <div className="h-screen flex flex-col items-center px-4 bg-black text-white">
      <div className='w-full overflow-auto mt-8'>
        <div className="w-full flex items-center justify-between p-3 mb-4 bg-gray-500 bg-opacity-25 rounded-xl">
          <div className="flex">
            <img className="justify-start w-12 mr-4 rounded-full" src="https://s3.blum.codes/11c780e1-9e8b-4047-b763-ce08ce8acb73/985f3e69-402c-4323-8f55-e4beeb2935f5" alt="avatar" />
            <div>
              <h6 className="text-xl font-bold">Our Community</h6>
              <p className="text-md">20,754,859,791 BP</p>
            </div>
          </div>
          <button className="px-3 py-2 bg-gray-700 bg-opacity-50 text-white rounded-full"> 
            <h5>Open</h5>
          </button>
        </div>

        <div className="flex justify-center">
          <div className=" bg-blue-600 text-[52px] font-bold text-white rounded-full w-24 h-24 flex items-center justify-center">
            SF
          </div>
        </div> 

        <h2 className="w-full text-center text-2xl mt-4">forsuccess425</h2>

        <h3 className="w-full text-center text-4xl mt-12">₿ 267</h3>

        <div className='w-full flex flex-col items-center mt-20 mb-2 p-4 rounded-xl bg-gray-600 opacity-90' style={divStyle} >
          {/* <img className="" src={backgroundImg} /> */}
          <img className="w-16" src={gameImg} alt="logo" />
          <div className="w-full flex items-center justify-between">
            <div>
              <h3>Drop game</h3>
              <p className="flex font-bold"><img className="w-5 h-5 mr-2" src={gameAvatar} />5</p>
            </div>
            <button className="px-3 py-2 text-black bg-white rounded-full"> 
              <h5>Play</h5>
            </button>
          </div>
        </div>
      </div>

      <button onClick={onClickStartFarming} className=" w-full m-4 mx-20 py-3 text-18 bg-gray-500 opacity-30 text-white font-bold rounded ">
        <h4>⚡ Start farming</h4>
      </button>
      
    </div>
  );
}
