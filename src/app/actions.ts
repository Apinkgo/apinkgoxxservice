"use server";

import * as z from "zod";

const formSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
});

export async function handleContactForm(values: z.infer<typeof formSchema>) {
  // Here you would typically send an email, save to a database, etc.
  // For this example, we'll just log it and simulate a success response.
  console.log("Received contact form submission:", values);

  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // You can add logic here to check for success/failure
  // For now, we'll always return success.
  return { success: true };
}
