"use client"

import { SendMail } from "@/models/send-mail";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { TableCell, TableRow } from "../ui/table";

interface EmailItemProps {
  item: SendMail
}

const EmailItem: React.FC<EmailItemProps> = ({ item }) => {
  const createdAt = new Date(item.createdAt)
  const date = `${createdAt.getDate() > 9 ? createdAt.getDate() : `0${createdAt.getDate()}`}`
  const month = `${(createdAt.getMonth()+1) > 9 ? (createdAt.getMonth()+1) : `0${(createdAt.getMonth()+1)}`}`
  const year = `${createdAt.getFullYear()}`
  const hour = `${createdAt.getHours() > 9 ? createdAt.getHours() : `0${createdAt.getHours()}`}`
  const minute = `${createdAt.getMinutes() > 9 ? createdAt.getMinutes() : `0${createdAt.getMinutes()}`}`
  const second = `${createdAt.getSeconds() > 9 ? createdAt.getSeconds() : `0${createdAt.getSeconds()}`}`

  const createdAtStr =  `${year}-${month}-${date} ${hour}:${minute}:${second}`;
  return (
    <TableRow key={item._id.toString()}>
      <TableCell className="w-[10%]">{createdAtStr}</TableCell>
      <TableCell className="font-medium">{item.subject}</TableCell>
      <TableCell
      >{item.to.length > 2
        ? <Popover>
          <PopoverTrigger className="hover:text-decoration hover:underline">{item.to.length} emails</PopoverTrigger>
          <PopoverContent side="right">
            {item.to.map((to: string) => <p key={to}>{to}</p>)}
          </PopoverContent>
        </Popover>
        : item.to.join(',')
        }
      </TableCell>
      <TableCell>{item.module}</TableCell>
      <TableCell>{item.functions}</TableCell>
      <TableCell>{item.error
        ? <Popover>
          <PopoverTrigger className=" hover:text-decoration hover:underline text-red-600">Error</PopoverTrigger>
          <PopoverContent className="break-words" side="top">{item.error.message}</PopoverContent>
        </Popover>
        : <div className="text-green-600">Success</div>
      }
      </TableCell>
      <TableCell className="text-right">
        <Dialog>
          <DialogTrigger className="cursor-pointer underline text-blue-500">Click to Content</DialogTrigger>
          <DialogContent className="w-[90vw] max-w-4xl overflow-auto max-h-full px-0 pt-9 pb-6">
            <iframe style={{
              width: '100%',
              minHeight: '600px',
              height: '100%',
            }} srcDoc={item.content} sandbox="allow-same-origin allow-scripts"
            />
          </DialogContent>
        </Dialog>
      </TableCell>
    </TableRow>
  )
}

export default EmailItem