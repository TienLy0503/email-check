"use client"

import { useRouter } from 'next/navigation';
import { FC } from 'react';
import { useLocalStorage } from 'usehooks-ts';

const Guard: FC<{ children: React.ReactNode }> = ({ children }) => {
  const router = useRouter();
  const [secret, setSecret] = useLocalStorage("secret", "")

  if (!secret || secret !== process.env.NEXT_PUBLIC_API_KEY) {
    console.log({ secret })
    router.push("/403");
  }

  return <>{children}</>;
}

export default Guard
