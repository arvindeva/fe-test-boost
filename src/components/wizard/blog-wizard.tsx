"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useWizard } from "@/hooks/useWizard";
import { TOTAL_STEPS } from "@/types/wizard";
import { MetadataStep } from "./steps/metadata-step";
import { SummaryStep } from "./steps/summary-step";
import { ContentStep } from "./steps/content-step";
import { ReviewStep } from "./steps/review-step";

export function BlogWizard() {
  const wizard = useWizard();
  const { currentStep } = wizard.state;

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <MetadataStep wizard={wizard} />;
      case 2:
        return <SummaryStep wizard={wizard} />;
      case 3:
        return <ContentStep wizard={wizard} />;
      case 4:
        return <ReviewStep wizard={wizard} />;
      default:
        return <div>Invalid step</div>;
    }
  };

  return (
    <Card className="mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <h1 className="text-3xl">Create Blog Post</h1>
          <span className="text-sm font-normal text-muted-foreground">
            Step {currentStep} of {TOTAL_STEPS}
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent>{renderStep()}</CardContent>
    </Card>
  );
}
