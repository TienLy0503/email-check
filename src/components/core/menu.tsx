"use client"

import Link from 'next/link'
import { Button } from '../ui/button'
import { Environment } from './environment'

export const Menu = () => {
  return (
    <div className="flex mt-2">
      <Environment />

      <Button className="m-2" ><Link href="/email">Send Mail Loggers</Link></Button>
      <Button className="m-2"><Link href="/user">Check User Endpoints </Link></Button>
    </div>
  )
}
