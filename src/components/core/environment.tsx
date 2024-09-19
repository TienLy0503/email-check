"use client"

import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export const Environment = () => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  // Get a new searchParams string by merging the current
  // searchParams with a provided key/value pair
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)

      return params.toString()
    },
    [searchParams]
  )


  return (
    <Select onValueChange={
      (value) => {
        router.push(`${pathname}?${createQueryString('env', value)}`)
        router.refresh()
      }
    }>
      <SelectTrigger className="m-2 w-[180px]">
        <SelectValue placeholder="Select a env" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="int">Integration</SelectItem>
          <SelectItem value="dev">Dev</SelectItem>
          <SelectItem value="staging">Staging</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

