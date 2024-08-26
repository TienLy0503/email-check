"use client"

import { setSecret } from "@/app/_action"
import { zodResolver } from "@hookform/resolvers/zod"
import { redirect } from "next/navigation"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "../ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { Input } from "../ui/input"

const formSchema = z.object({
  secret: z.string().min(2, {
    message: "Secret key must be at least 2 characters.",
  }),
})

export function FormSecret() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      secret: "",
    },
  })


  return (
    <Form {...form}>
      <form className="space-y-8">
        <FormField
          control={form.control}
          name="secret"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Secret key</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your secret key provide dev team
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button formAction={async () => {
          "use  server"
          setSecret(form.getValues("secret"))
          redirect("/email")
        }}>Submit</Button>
      </form>
    </Form>
  )
}