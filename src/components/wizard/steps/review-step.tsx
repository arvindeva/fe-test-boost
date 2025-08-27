"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useWizard } from "@/hooks/useWizard";
import { useBlogPosts } from "@/hooks/useBlogPosts";
import { generateSlug } from "@/lib/utils";
import { CheckCircle, Loader2 } from "lucide-react";
import { StepHeader } from "../step-header";
import { ReviewField } from "../review-field";

interface ReviewStepProps {
  wizard: ReturnType<typeof useWizard>;
}

export function ReviewStep({ wizard }: ReviewStepProps) {
  const { state, prevStep, reset } = wizard;
  const { addBlogPost } = useBlogPosts();
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { formData } = state;

  const handleSubmit = async () => {
    if (
      !formData.title ||
      !formData.author ||
      !formData.summary ||
      !formData.category ||
      !formData.content
    ) {
      alert("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);

    try {
      const slug = generateSlug(formData.title);

      addBlogPost({
        title: formData.title,
        author: formData.author,
        summary: formData.summary,
        category: formData.category,
        content: formData.content,
        slug: slug,
      });

      reset();

      router.push("/");
    } catch (error) {
      console.error("Error creating blog post:", error);
      alert("Error creating blog post. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-6">
      <StepHeader
        title="Review & Submit"
        description="Review your blog post details and submit to publish."
      />

      <div className="space-y-6">
        <ReviewField label="Title" value={formData.title} />
        <ReviewField label="Author" value={formData.author} />
        <ReviewField
          label="Category"
          value={formData.category}
          fallback="Not selected"
        />
        <ReviewField label="Summary" value={formData.summary} />
        <ReviewField
          label="Content"
          value={formData.content}
          type="content"
          fallback="No content provided"
        />
      </div>

      <Separator />

      <div className="flex justify-between pt-4">
        <Button type="button" variant="outline" onClick={prevStep}>
          Back
        </Button>
        <Button
          onClick={handleSubmit}
          disabled={isSubmitting}
          className="min-w-[120px]"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Publishing...
            </>
          ) : (
            <>
              <CheckCircle className="w-4 h-4 mr-2" />
              Publish Blog
            </>
          )}
        </Button>
      </div>
    </div>
  );
}
