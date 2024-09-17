import { Menu } from "@/components/core/menu";
import EmailItem from "@/components/emails/EmailItem";
import Filter from "@/components/emails/Filter";
import Paginator from "@/components/emails/Paginator";
import { Table, TableBody, TableCaption, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { FUNCTIONS } from "@/models/enum";
import { getLogsApi } from "@/services/get-logs";
import { Suspense } from "react";

export default async function Email({ searchParams }: {
  searchParams: {
    page: string,
    template: FUNCTIONS.EMAIL_TEMPLATE,
    search: string,
    env: string
  }
}) {
  const LIMIT = 10;
  let currentPage = parseInt(searchParams.page) || 1;
  let template = searchParams?.template || '';
  let search = searchParams?.search || '';
  const base = searchParams?.env || ''

  if (currentPage < 1) currentPage = 1;
  const { data } = await getLogsApi(base, { page: currentPage, limit: LIMIT, template, search });

  return (
    <div>
        <Menu />
        <div className="container mt-6 items-center px-2 sm:py-5 mx-auto max-w-6xl">
          <Suspense fallback={<p>Loading feed...</p>}>
            <Filter />

            <Table className="mt-6" >
              <TableCaption>A list of your recent mails.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Subject</TableHead>
                  <TableHead>Send To</TableHead>
                  <TableHead>Module</TableHead>
                  <TableHead>Functions</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Content</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data.map((mail: any) => (
                  <EmailItem key={mail._id.toString()} item={mail} />
                ))}
              </TableBody>
            </Table>

            <Paginator />
          </Suspense>
      </div>
    </div>

  )
}