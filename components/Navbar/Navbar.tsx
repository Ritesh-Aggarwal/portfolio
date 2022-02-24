import React, { useState } from "react";
import Link from 'next/link';

type Props = {
  active : String
}

function Navbar({ active }:Props) {
  return (
    <div className="text-white font-semibold flex w-full absolute items-center justify-evenly">
      {['INTRO', 'WHAT', 'WORK', 'CONTACT'].map((data, idx) => {
        return <div key={idx} className={`hover:scale-125 cursor-pointer m-2 ${active === data ? 'text-lg text-red-500' : ''}`}>
          <Link href={`/${idx!==0?data.toLowerCase():''}`} >
            {data}
          </Link>
        </div>
      })}
    </div>
  );

}

export default Navbar;
