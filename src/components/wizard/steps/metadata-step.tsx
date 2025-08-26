"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { metadataSchema, MetadataFormData } from "@/lib/validations/wizard";
import { useWizard } from "@/hooks/useWizard";
import { StepHeader } from "../step-header";

interface MetadataStepProps {
  wizard: ReturnType<typeof useWizard>;
}

export function MetadataStep({ wizard }: MetadataStepProps) {
  const { state, updateField, nextStep } = wizard;

  const form = useForm<MetadataFormData>({
    resolver: zodResolver(metadataSchema),
    defaultValues: {
      title: state.formData.title || "",
      author: state.formData.author || "",
    },
  });

  const onSubmit = (data: MetadataFormData) => {
    updateField("title", data.title);
    updateField("author", data.author);

    nextStep();
  };

  return (
    <div className="space-y-6">
      <StepHeader 
        title="Blog Metadata"
        description="Enter the basic information for your blog post."
      />

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Blog Title *</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your blog post title"
                    {...field}
                    onChange={(e) => {
                      field.onChange(e);
                      updateField("title", e.target.value);
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="author"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Author Name *</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter author name"
                    {...field}
                    onChange={(e) => {
                      field.onChange(e);
                      updateField("author", e.target.value);
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex justify-end pt-4">
            <Button type="submit">Next</Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
