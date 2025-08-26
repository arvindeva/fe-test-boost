'use client';

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useWizard } from "@/hooks/useWizard";
import { useBlogPosts } from "@/hooks/useBlogPosts";
import { CheckCircle, Loader2 } from "lucide-react";

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
    if (!formData.title || !formData.author || !formData.summary || !formData.category || !formData.content) {
      alert("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Create slug from title
      const slug = formData.title
        .toLowerCase()
        .replace(/[^a-z0-9\s]/g, '')
        .replace(/\s+/g, '-')
        .trim();

      // Add blog post
      addBlogPost({
        title: formData.title,
        author: formData.author,
        summary: formData.summary,
        category: formData.category,
        content: formData.content,
        slug: slug,
      });

      // Reset wizard
      reset();
      
      // Redirect to homepage
      router.push('/');
    } catch (error) {
      console.error('Error creating blog post:', error);
      alert('Error creating blog post. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold">Review & Submit</h2>
        <p className="text-muted-foreground">
          Review your blog post details and submit to publish.
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="text-sm font-medium text-muted-foreground mb-2">Title</h3>
          <p className="text-foreground">{formData.title || "Not provided"}</p>
        </div>

        <div>
          <h3 className="text-sm font-medium text-muted-foreground mb-2">Author</h3>
          <p className="text-foreground">{formData.author || "Not provided"}</p>
        </div>

        <div>
          <h3 className="text-sm font-medium text-muted-foreground mb-2">Category</h3>
          {formData.category ? (
            <Badge>{formData.category}</Badge>
          ) : (
            <span className="text-muted-foreground">Not selected</span>
          )}
        </div>

        <div>
          <h3 className="text-sm font-medium text-muted-foreground mb-2">Summary</h3>
          <p className="text-foreground">{formData.summary || "Not provided"}</p>
        </div>

        <div>
          <h3 className="text-sm font-medium text-muted-foreground mb-2">Content</h3>
          <div className="max-h-60 overflow-y-auto bg-gray-50 p-3 rounded border">
            <pre className="text-sm text-foreground whitespace-pre-wrap font-sans">
              {formData.content || "No content provided"}
            </pre>
          </div>
        </div>
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