export interface WizardFormData {
  title: string;
  author: string;
  summary: string;
  category: string;
  content: string;
}

export interface WizardState {
  currentStep: number;
  formData: Partial<WizardFormData>;
  errors: Record<string, string>;
}

export type WizardAction =
  | { type: "UPDATE_FIELD"; field: keyof WizardFormData; value: string }
  | { type: "UPDATE_MULTIPLE_FIELDS"; fields: Partial<WizardFormData> }
  | { type: "NEXT_STEP" }
  | { type: "PREV_STEP" }
  | { type: "SET_ERRORS"; errors: Record<string, string> }
  | { type: "CLEAR_ERRORS" }
  | { type: "RESET" };

export const TOTAL_STEPS = 3;
