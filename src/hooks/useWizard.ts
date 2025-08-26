import { useReducer } from "react";
import { WizardState, WizardAction, TOTAL_STEPS } from "@/types/wizard";

const initialState: WizardState = {
  currentStep: 1,
  formData: {
    title: "",
    author: "",
    summary: "",
    category: "",
    content: "",
  },
  errors: {},
};

function wizardReducer(state: WizardState, action: WizardAction): WizardState {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        formData: {
          ...state.formData,
          [action.field]: action.value,
        },
        errors: {
          ...state.errors,
          [action.field]: "",
        },
      };

    case "UPDATE_MULTIPLE_FIELDS":
      return {
        ...state,
        formData: {
          ...state.formData,
          ...action.fields,
        },
      };

    case "NEXT_STEP":
      return {
        ...state,
        currentStep: Math.min(state.currentStep + 1, TOTAL_STEPS),
      };

    case "PREV_STEP":
      return {
        ...state,
        currentStep: Math.max(state.currentStep - 1, 1),
      };

    case "SET_ERRORS":
      return {
        ...state,
        errors: action.errors,
      };

    case "CLEAR_ERRORS":
      return {
        ...state,
        errors: {},
      };

    case "RESET":
      return initialState;

    default:
      return state;
  }
}

export function useWizard() {
  const [state, dispatch] = useReducer(wizardReducer, initialState);

  const updateField = (field: keyof WizardState["formData"], value: string) => {
    dispatch({ type: "UPDATE_FIELD", field, value });
  };

  const updateMultipleFields = (fields: Partial<WizardState["formData"]>) => {
    dispatch({ type: "UPDATE_MULTIPLE_FIELDS", fields });
  };

  const nextStep = () => {
    dispatch({ type: "NEXT_STEP" });
  };

  const prevStep = () => {
    dispatch({ type: "PREV_STEP" });
  };

  const setErrors = (errors: Record<string, string>) => {
    dispatch({ type: "SET_ERRORS", errors });
  };

  const clearErrors = () => {
    dispatch({ type: "CLEAR_ERRORS" });
  };

  const reset = () => {
    dispatch({ type: "RESET" });
  };

  return {
    state,
    updateField,
    updateMultipleFields,
    nextStep,
    prevStep,
    setErrors,
    clearErrors,
    reset,
  };
}
