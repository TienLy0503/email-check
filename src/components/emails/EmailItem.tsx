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
  const createdAtStr = createdAt.getDate()  + "-" + (createdAt.getMonth()+1) + "-" + createdAt.getFullYear() + " " +  createdAt.getHours() + ":" + createdAt.getMinutes() + ":" + createdAt.getSeconds();
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
          <DialogContent className="w-[90vw] max-w-4xl overflow-auto max-h-full">
            <iframe style={{
              width: '100%',
              minWidth: '740px',
              minHeight: '600px',
            }} srcDoc={item.content} sandbox="allow-same-origin allow-scripts"
            />
          </DialogContent>
        </Dialog>
      </TableCell>
    </TableRow>
  )
}

export default EmailItem