import React from 'react'
import Link from 'next/link';
import { BsHouseHeartFill } from "react-icons/bs";
import { Button } from '../ui/button';

function Logo() {
  return (
    <Button size='icon' asChild>
      <Link href='/'>
      <BsHouseHeartFill className='w-6 h-6'></BsHouseHeartFill></Link>
    </Button>
  )
}

export default Logo
