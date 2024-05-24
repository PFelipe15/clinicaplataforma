
 import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from '../../app/assets/Logo.jpg'
 
const Logo = () => {
  return (
    <Link
      href="/"
      className=" items-center justify-center gap-2 text-xl font-extrabold flex  "
    >

      <Image
      src={logo}
      width={90}
      height={90}
      alt='Logo'
      className='rounded-lg'
      />
       <span className="text-primary text-2xl hidden md:flex ">UroVida</span>
    </Link>
  );
}

export default Logo;