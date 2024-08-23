"use client"

import { useRouter } from 'next/navigation';
import { FC } from 'react';

const Guard: FC<{ secret?: string }> = ({ secret }) => {
  const router = useRouter();

  if (!secret || secret !== process.env.NEXT_PUBLIC_API_KEY) {
    console.log({ secret })
    router.push("/403");
  }

  return (<></>)
}

export default Guard
