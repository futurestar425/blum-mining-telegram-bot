import React from "react";
const Loading = () => {
  const style = {
    border: '2px solid transparent',
    borderTopColor: '#46bdf4',
    animation: 'spin 2s linear infinite',
    display: 'block',
    position: 'relative',
    left: '50%',
    top: '50%',
    width: '70px',
    height: '70px',
    margin: '35px 0 0 35px',
    zIndex: 1001,
  }
  return (
    // <div style={style} className="w-full h-screen bg-black1 items-center justify-center">
    //   <div style={style} className="animate-spin rounded-full">
    //   </div>
    // </div>
    <div className="flex h-screen items-center justify-center bg-indigo-950">
      <div className="h-16 w-16 animate-spin rounded-full border-4 border-solid border-primary border-t-transparent border-gray-100"></div>
    </div>
  );
};

export default Loading;
