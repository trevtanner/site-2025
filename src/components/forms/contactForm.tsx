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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
  topic: z.string().min(50, { message: "Topic selection is required." }),
  company: z.string().max(50),
  website: z.string().max(50),
  comments: z
    .string()
    .min(10, { message: "A comment is required." })
    .max(10000, { message: "Comment is too long." }),
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
      website: "",
      topic: "",
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
    <>
      {sucessfulSubmit && (
        <div className="w-4/5 m-auto bg-tertiary-300 p-4 rounded-lg">
          <p className="home-section-subheader text-center">
            Form submitted sucessfully, we will get back to you as soon as
            possible.
          </p>
        </div>
      )}
      {!sucessfulSubmit && (
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
                <FormItem className="mt-2">
                  <FormLabel>Name*</FormLabel>
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
                <FormItem className="mt-2">
                  <FormLabel>Email*</FormLabel>
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
              name="company"
              render={({ field }) => (
                <FormItem className="mt-2">
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
              name="website"
              render={({ field }) => (
                <FormItem className="mt-2">
                  <FormLabel>Website</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter Your Current Website"
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
              name="topic"
              render={({ field }) => (
                <FormItem className="mt-2">
                  <FormLabel>Topic*</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange} // Use field.onChange for update
                      defaultValue={field.value}
                    >
                      <SelectTrigger className=" bg-tertiary-100">
                        <SelectValue placeholder="Select a Topic" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="Pre-Sales">Pre-Sales</SelectItem>
                          <SelectItem value="General Question">
                            General Question
                          </SelectItem>
                          <SelectItem value="Bug Report">Bug Report</SelectItem>
                          <SelectItem value="Other">Other</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="comments"
              render={({ field }) => (
                <FormItem className="mt-2">
                  <FormLabel>Comments*</FormLabel>
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

            <Button
              type="submit"
              className="mt-4 project-button w-1/2 md:w-1/3"
              aria-label="Submit Form Button"
            >
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
      )}
    </>
  );
};
