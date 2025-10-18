"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { handleContactForm } from "@/app/actions";
import { useTransition } from "react";
import { Loader2 } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, { message: "Nama harus memiliki setidaknya 2 karakter." }),
  email: z.string().email({ message: "Alamat email tidak valid." }),
  message: z.string().min(10, { message: "Pesan harus memiliki setidaknya 10 karakter." }).max(500, { message: "Pesan tidak boleh lebih dari 500 karakter." }),
});

export function ContactForm() {
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    startTransition(async () => {
      const result = await handleContactForm(values);

      if (result.success) {
        toast({
          title: "Pesan Terkirim!",
          description: "Terima kasih telah menghubungi kami. Kami akan segera merespons.",
        });
        form.reset();
      } else {
        toast({
          variant: "destructive",
          title: "Gagal Mengirim Pesan",
          description: "Terjadi kesalahan. Silakan coba lagi nanti.",
        });
      }
    });
  }

  return (
    <Card className="shadow-lg border-2 border-border">
      <CardHeader>
        <CardTitle className="font-headline text-2xl">Hubungi Kami</CardTitle>
        <CardDescription>Isi form di bawah ini untuk memulai.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nama</FormLabel>
                  <FormControl>
                    <Input placeholder="Nama Anda" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="email@contoh.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Pesan</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Ceritakan tentang kebutuhan bisnis Anda..."
                      className="min-h-[120px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full bg-primary hover:bg-primary/90" disabled={isPending}>
              {isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Mengirim...
                </>
              ) : (
                "Kirim Pesan"
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
