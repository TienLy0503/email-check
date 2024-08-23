"use client"

import { useRouter } from 'next/navigation';
import { FC } from 'react';

const Guard: FC<{ secret?: string, children: React.ReactNode }> = ({ secret, children }) => {
  const router = useRouter();

  if (!secret || secret !== process.env.NEXT_PUBLIC_API_KEY) {
    console.log({ secret })
    router.push("/403");
  }

  return <>{children}</>;
}

export default Guard
