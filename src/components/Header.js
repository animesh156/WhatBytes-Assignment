/* eslint-disable @next/next/no-img-element */


export default function Header() {
    return (
      <header className="border-b border-gray-200 px-3 py-2 flex justify-between ">

        <div className="mb-2">
          <h1 className="text-black text-2xl font-medium">WhatBytes</h1>
        </div>

        <div className="mb-2 border-2 rounded-md border-gray-300 gap-x-2 flex items-center p-0.5 text-black">
       
   
      <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="" className="w-8 rounded-3xl" />

       <p className="text-[13px] font-bold">Rahil Siddique</p>
  
 
        </div>

      </header>
    )
}