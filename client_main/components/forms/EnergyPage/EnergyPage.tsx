"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// Schema definition for form validation using Zod
const formSchema = z.object({
  month: z.string().min(1, "Month is required"),
  year: z.string().min(4, "Year is required"),
  image: z.instanceof(File, { message: "Image is required" }).optional(), // For image upload
  usage: z.string().optional(),
});

export type EnergyLogFormData = z.infer<typeof formSchema>;

type Props = {
  isLoading: boolean;
  title?: string;
  buttonText?: string;
  onSubmit: (formData: FormData) => void; // Update this to expect FormData
};

const EnergyPage = ({
  isLoading,
  title = "Energy Log Form",
  buttonText = "Submit",
  onSubmit,
}: Props) => {
  const [image, setImage] = useState<File | null>(null);
  const form = useForm<EnergyLogFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      month: "",
      year: "",
      usage: "",
    },
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleFormSubmit = (data: EnergyLogFormData) => {
    const formData = new FormData();
    formData.append("month", data.month);
    formData.append("year", data.year);
    
    if (image) {
      formData.append("image", image);
    }

    // Additional optional fields
    if (data.usage) formData.append("usage", data.usage);

    onSubmit(formData); // Pass the FormData to the parent component
  };

  return (
    <div className="">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleFormSubmit)}
          className="space-y-4 bg-gray-50 rounded-lg md:p-10 px-6"
        >
          <div>
            <h2 className="text-4xl font-bold text-center text-[#1e733d] p-4 heading">
              {title}
            </h2>
            <FormDescription>
              Log your energy consumption data here
            </FormDescription>
          </div>

          <FormField
            control={form.control}
            name="month"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Month</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="e.g., 7 (for July)"
                    className="bg-white"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="year"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Year</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="e.g., 2024"
                    className="bg-white"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormItem>
            <FormLabel>Upload Energy Bill Image</FormLabel>
            <FormControl>
              <Input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="bg-white"
              />
            </FormControl>
            <FormMessage />
          </FormItem>

          {/* The remaining fields will be disabled as they are auto-calculated */}
          <FormField
            control={form.control}
            name="usage"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Energy Usage (kWh)</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Automatically extracted from image"
                    className="bg-white"
                    disabled
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />


          <div className="md:pb-0 pb-4">
            {isLoading ? (
              <Button type="button" disabled className="bg-[#1e733d]">
                {buttonText}
              </Button>
            ) : (
              <Button type="submit" className="bg-[#1e733d]">
                {buttonText}
              </Button>
            )}
          </div>
        </form>
      </Form>
    </div>
  );
};

export default EnergyPage;
