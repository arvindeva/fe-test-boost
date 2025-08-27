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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { summarySchema, SummaryFormData } from "@/lib/validations/wizard";
import { useWizard } from "@/hooks/useWizard";
import { BLOG_CATEGORIES } from "@/constants/categories";
import { StepHeader } from "../step-header";

interface SummaryStepProps {
  wizard: ReturnType<typeof useWizard>;
}

export function SummaryStep({ wizard }: SummaryStepProps) {
  const { state, updateField, nextStep, prevStep } = wizard;

  const form = useForm<SummaryFormData>({
    resolver: zodResolver(summarySchema),
    defaultValues: {
      summary: state.formData.summary || "",
      category: state.formData.category || "",
    },
  });

  const onSubmit = (data: SummaryFormData) => {
    updateField("summary", data.summary);
    updateField("category", data.category);
    nextStep();
  };

  return (
    <div className="space-y-6">
      <StepHeader
        title="Blog Summary & Category"
        description="Add a brief summary and select a category for your blog post."
      />

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="summary"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Blog Summary *</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter a brief summary or excerpt of your blog post"
                    {...field}
                    onChange={(e) => {
                      field.onChange(e);
                      updateField("summary", e.target.value);
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Blog Category *</FormLabel>
                <Select
                  onValueChange={(value) => {
                    field.onChange(value);
                    updateField("category", value);
                  }}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {BLOG_CATEGORIES.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex justify-between pt-4">
            <Button type="button" variant="outline" onClick={prevStep}>
              Back
            </Button>
            <Button type="submit">Next</Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
