import { useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/utils";

interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

export function StepIndicator({ currentStep, totalSteps }: StepIndicatorProps) {
  const [windowWidth, setWindowWidth] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth : 1024,
  );

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { visibleSteps, isMobile } = useMemo(() => {
    if (windowWidth < 768) {
      const steps: number[] = [];
      let start = Math.max(1, currentStep - 1);
      let end = Math.min(totalSteps, start + 2);

      if (end === totalSteps) {
        start = Math.max(1, end - 2);
      }

      for (let i = start; i <= end; i += 1) {
        steps.push(i);
      }

      return { visibleSteps: steps, isMobile: true };
    }

    return {
      visibleSteps: Array.from({ length: totalSteps }, (_, i) => i + 1),
      isMobile: false,
    };
  }, [currentStep, totalSteps, windowWidth]);

  const renderStep = (step: number) => {
    const isCompleted = step < currentStep;
    const isActive = step === currentStep;

    return (
      <div key={step} className="flex items-center">
        <div
          className={cn(
            "step-indicator",
            isCompleted && "step-indicator-completed",
            isActive && "step-indicator-active",
            !isCompleted && !isActive && "step-indicator-pending",
          )}
        >
          {step}
        </div>
        {step < totalSteps &&
          (isMobile ? step !== visibleSteps[visibleSteps.length - 1] : true) && (
            <div
              className={cn(
                "step-connector w-4 sm:w-6 md:w-8 lg:w-12",
                (isCompleted || isActive) ? "step-connector-active" : "step-connector-pending",
              )}
            />
          )}
      </div>
    );
  };

  const showStartEllipsis = isMobile && visibleSteps[0] > 1;
  const showEndEllipsis = isMobile && visibleSteps[visibleSteps.length - 1] < totalSteps;

  return (
    <div className="w-full">
      <div className="md:hidden w-full overflow-x-auto pb-2">
        <div className="flex items-center justify-center min-w-max mx-auto">
          {showStartEllipsis && (
            <>
              {renderStep(1)}
              <div className="px-2 text-muted-foreground">...</div>
            </>
          )}

          {visibleSteps.map((step) => renderStep(step))}

          {showEndEllipsis && (
            <>
              <div className="px-2 text-muted-foreground">...</div>
              {renderStep(totalSteps)}
            </>
          )}
        </div>
      </div>

      <div className="hidden md:flex items-center justify-center w-full">
        {Array.from({ length: totalSteps }, (_, i) => i + 1).map((step) => renderStep(step))}
      </div>
    </div>
  );
}
