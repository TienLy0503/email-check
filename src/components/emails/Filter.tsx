"use client"

import React, { useCallback, useEffect, useState } from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { Input } from '../ui/input'
import { FUNCTIONS } from '@/models/enum'
import { usePathname, useSearchParams, useRouter } from 'next/navigation'
import { useDebounceCallback } from 'usehooks-ts'

const Filter = () => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const values = Object.values(FUNCTIONS.EMAIL_TEMPLATE)

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

  const [search, setSearch] = useState(searchParams.get('search') || '')
  const debounced = useDebounceCallback(setSearch, 3000)

  useEffect(() => {
    router.push(`${pathname}?${createQueryString('search', search)}`)
  }, [search, createQueryString, router, pathname])

  return (
    <div className='flex gap-2 mx-auto container'>
      <Input
        placeholder="Search"
        defaultValue={search}
        onChange={(e) => debounced(e.target.value)}
      />
      <Select onValueChange={
        (value) => router.push(`${pathname}?${createQueryString('template', value)}`)
      }>
        <SelectTrigger className='w-96'>
          <SelectValue placeholder="Template" />
        </SelectTrigger>
        <SelectContent>
          {values.map((value, index) => (
            <SelectItem key={index} value={value}>
              {value}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}

export default Filter
