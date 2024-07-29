'use client'
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import logo from '../../app/assets/logo_page-0001.jpg';

const Logo = () => {
  return (
    <Link href="/" className="flex items-center justify-center gap-2 text-xl font-extrabold">
      <motion.div
        whileHover={{ scale: 1.1, rotate: 2 }}
        whileTap={{ scale: 0.9, rotate: -10 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <Image
          src={logo}
          width={200}
          height={100}
          alt="Logo"
          className="rounded-lg object-fill"
        />
      </motion.div>
    </Link>
  );
}

export default Logo;
