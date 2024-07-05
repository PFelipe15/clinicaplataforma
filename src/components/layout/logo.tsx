
 import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from '../../app/assets/logo_page-0001.jpg'
 
const Logo = () => {
  return (
    <Link
      href="/"
      className=" items-center justify-center gap-2 text-xl font-extrabold flex  "
    >

      <Image
      src={logo}
    width={200}
      height={100}
      alt='Logo'
      className='rounded-lg  object-fill ' 
      />
     </Link>
  );
}

export default Logo;