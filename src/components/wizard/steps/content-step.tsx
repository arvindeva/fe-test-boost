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
import { Textarea } from "@/components/ui/textarea";
import { contentSchema, ContentFormData } from "@/lib/validations/wizard";
import { useWizard } from "@/hooks/useWizard";
import { StepHeader } from "../step-header";

interface ContentStepProps {
  wizard: ReturnType<typeof useWizard>;
}

export function ContentStep({ wizard }: ContentStepProps) {
  const { state, updateField, nextStep, prevStep } = wizard;

  const form = useForm<ContentFormData>({
    resolver: zodResolver(contentSchema),
    defaultValues: {
      content: state.formData.content || "",
    },
  });

  const onSubmit = (data: ContentFormData) => {
    updateField("content", data.content);
    nextStep();
  };

  const contentLength = form.watch("content")?.length || 0;

  return (
    <div className="space-y-6">
      <StepHeader 
        title="Blog Content"
        description="Write the main content of your blog post."
      />

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Blog Content *</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Write your blog post content here..."
                    className="min-h-[300px] resize-none"
                    {...field}
                    onChange={(e) => {
                      field.onChange(e);
                      updateField("content", e.target.value);
                    }}
                  />
                </FormControl>
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Minimum 1 characters required</span>
                  <span
                    className={
                      contentLength < 1
                        ? "text-destructive"
                        : contentLength > 999999
                        ? "text-destructive"
                        : "text-muted-foreground"
                    }
                  >
                    {contentLength} characters
                  </span>
                </div>
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
