import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { FormHeader } from "@/components/register/FormHeader";
import { StepIndicator } from "@/components/register/StepIndicator";
import { Step1Personal } from "@/components/register/steps/Step1Personal";
import { Step2Category } from "@/components/register/steps/Step2Category";
import { Step3Experience } from "@/components/register/steps/Step3Experience";
import { Step4Expertise } from "@/components/register/steps/Step4Expertise";
import { Step5Credentials } from "@/components/register/steps/Step5Credentials";
import { Step6Specialisation } from "@/components/register/steps/Step6Specialisation";
import { Step7Practice } from "@/components/register/steps/Step7Practice";
import { Step8Compliance } from "@/components/register/steps/Step8Compliance";
import { Step9Profile } from "@/components/register/steps/Step9Profile";
import { Step10Banking } from "@/components/register/steps/Step10Banking";
import { Step11Declaration } from "@/components/register/steps/Step11Declaration";

const TOTAL_STEPS = 11;

const RegistrationForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<Record<string, unknown>>({});
  const { toast } = useToast();

  const updateFormData = (stepData: Record<string, unknown>) => {
    setFormData((prev) => ({ ...prev, ...stepData }));
  };

  const handleNext = () => {
    if (currentStep < TOTAL_STEPS) {
      setCurrentStep((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleSubmit = () => {
    toast({
      title: "Registration Submitted!",
      description: "Thank you for registering. We will review your application and get back to you soon.",
    });
    console.log("Form submitted:", formData);
  };

  const renderStep = () => {
    const props = { data: formData, updateData: updateFormData };

    switch (currentStep) {
      case 1:
        return <Step1Personal {...props} />;
      case 2:
        return <Step2Category {...props} />;
      case 3:
        return <Step3Experience {...props} />;
      case 4:
        return <Step4Expertise {...props} />;
      case 5:
        return <Step5Credentials {...props} />;
      case 6:
        return <Step6Specialisation {...props} />;
      case 7:
        return <Step7Practice {...props} />;
      case 8:
        return <Step8Compliance {...props} />;
      case 9:
        return <Step9Profile {...props} />;
      case 10:
        return <Step10Banking {...props} />;
      case 11:
        return <Step11Declaration {...props} />;
      default:
        return null;
    }
  };

  return (
    <section className="pt-16 pb-24 md:pb-0 px-4 sm:px-6 bg-muted">
      <div className="max-w-4xl mx-auto w-full">
        <FormHeader />

        <div className="mb-8 sm:mb-10 px-2">
          <StepIndicator currentStep={currentStep} totalSteps={TOTAL_STEPS} />
        </div>

        <div className="bg-card rounded-2xl shadow-sm border border-border p-4 sm:p-6 mb-6 sm:mb-8">
          {renderStep()}
        </div>

        <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-4 px-2 pb-12">
          <div className="flex-1">
            {currentStep > 1 && (
              <Button
                onClick={handlePrevious}
                className="w-full sm:w-auto px-8 py-2 sm:py-6 text-sm sm:text-base font-semibold rounded-xl hover:bg-[#8f201d]"
                style={{
                  backgroundColor: "#A62825",
                  color: "white",
                  border: "none",
                  boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
                }}
              >
                Previous
              </Button>
            )}
          </div>

          <Button
            onClick={currentStep === TOTAL_STEPS ? handleSubmit : handleNext}
            className="w-full sm:w-auto px-8 py-2 sm:py-6 text-sm sm:text-base font-semibold rounded-xl"
            style={{
              backgroundColor: "#A62825",
              color: "white",
              border: "none",
              boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
            }}
          >
            {currentStep === TOTAL_STEPS ? "Submit" : "Next"}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;
