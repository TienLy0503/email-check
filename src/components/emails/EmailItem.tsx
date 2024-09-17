"use client"

import { SendMail } from "@/models/send-mail";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { TableCell, TableRow } from "../ui/table";

interface EmailItemProps {
  item: SendMail
}

const EmailItem: React.FC<EmailItemProps> = ({ item }) => {
  return (
    <TableRow key={item._id.toString()}>
      <TableCell className="w-[10%]">{item.createdAt.substring(0, 10)}</TableCell>
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
          <DialogTrigger>Click to Content</DialogTrigger>
          <DialogContent className="w-[90vw] max-w-4xl overflow-auto max-h-full">
            <div dangerouslySetInnerHTML={{ __html: item.content }}></div>
          </DialogContent>
        </Dialog>
      </TableCell>
    </TableRow>
  )
}

export default EmailItem