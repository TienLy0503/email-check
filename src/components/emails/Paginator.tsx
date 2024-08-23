"use client"

import React, { useCallback } from 'react'
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '../ui/pagination'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

const Paginator = () => {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const currentPage = parseInt(searchParams.get('page') || '1')

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
    <Pagination>
    <PaginationContent>
      {
        currentPage > 1 &&
        <PaginationItem>
          <PaginationPrevious href={`${pathname}?${createQueryString('page', (currentPage - 1).toString())}`} />
        </PaginationItem>
      }
      <PaginationItem>
        <PaginationLink href="#">{currentPage}</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationEllipsis />
      </PaginationItem>
      <PaginationItem>
        <PaginationNext href={`${pathname}?${createQueryString('page', (currentPage + 1).toString())}`} />
      </PaginationItem>
    </PaginationContent>
  </Pagination>
  )
}

export default Paginator
