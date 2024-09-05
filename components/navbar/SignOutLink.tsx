'use client'

import React from 'react'
import { SignOutButton } from '@clerk/nextjs'
import { useToast } from '@/hooks/use-toast'

function SignOutLink() {
  const { toast } = useToast();
  const handleLogout = () => {
    toast({description: 'You have signed out.'});
  };

  return <SignOutButton redirectUrl='/'>
    <button className='w-full text-left' onClick={handleLogout}>Logout</button>
  </SignOutButton>
}

export default SignOutLink
SignOutLink