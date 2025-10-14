"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { FieldLegend } from "@/components/ui/field";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Spinner } from "@/components/ui/spinner";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name is required." })
    .max(50, { message: "Name is too long." }),
  email: z.email({ message: "Email is required." }),
  phone: z.string().max(12, { message: "Phone is too long." }),
  company: z.string().max(50),
  comments: z.string().max(1000),
});

export const ContactForm: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [sucessfulSubmit, setSuccessfulSubmit] = useState(false);

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      phone: "",
      comments: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await fetch("/api/send-contact", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        // Success handling
        console.log("Form submitted successfully!");
        setLoading(false);
        setSuccessfulSubmit(true);
      } else {
        // Error handling
        const errorData = await response.json();
        console.error("Submission failed:", errorData);
        setLoading(false);
      }
    } catch (error) {
      console.error("Error submitting quote details:", error);
    }
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-4/5 m-auto bg-tertiary-300 p-4 rounded-lg"
      >
        <FieldLegend className="home-section-subheader text-center">
          How Can I Help?
        </FieldLegend>

        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter Your Name"
                  {...field}
                  className="home-section-p-1 bg-tertiary-100"
                />
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
                <Input
                  placeholder="Enter Your Email"
                  {...field}
                  className="home-section-p-1 bg-tertiary-100"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter Your Phone #"
                  {...field}
                  className="home-section-p-1 bg-tertiary-100"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="company"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Company</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter Your Company"
                  {...field}
                  className="home-section-p-1 bg-tertiary-100"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="comments"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Comments</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Any additional comments"
                  className="home-section-p-1 bg-tertiary-100"
                  rows={5}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="mt-4 project-button w-1/2 md:w-1/3">
          {loading ? (
            <>
              <Spinner aria-label="Info spinner example" className="me-2" />
              Submitting...
            </>
          ) : (
            "Submit"
          )}
        </Button>
      </form>
    </Form>
  );
};
