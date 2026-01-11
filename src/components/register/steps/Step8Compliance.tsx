import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { FileUpload } from "@/components/ui/file-upload";

interface Step8Props {
  data: Record<string, unknown>;
  updateData: (data: Record<string, unknown>) => void;
}

export function Step8Compliance({ data, updateData }: Step8Props) {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="space-y-3">
        <Label className="font-semibold">
          Have you ever been part of a professional misconduct inquiry?
        </Label>
        <RadioGroup
          value={(data.misconductInquiry as string) || ""}
          onValueChange={(v) => updateData({ misconductInquiry: v })}
          className="flex flex-wrap gap-6"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="yes" id="misconduct-yes" />
            <Label htmlFor="misconduct-yes" className="cursor-pointer font-normal">
              Yes
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="no" id="misconduct-no" />
            <Label htmlFor="misconduct-no" className="cursor-pointer font-normal">
              No
            </Label>
          </div>
        </RadioGroup>
      </div>

      <div className="space-y-2">
        <Label htmlFor="misconductExplanation" className="font-semibold">
          If Yes, Explain
        </Label>
        <Input
          id="misconductExplanation"
          value={(data.misconductExplanation as string) || ""}
          onChange={(e) => updateData({ misconductExplanation: e.target.value })}
          className="bg-background"
        />
      </div>

      <div className="space-y-3">
        <Label className="font-semibold">
          Are you currently facing any disciplinary or ethical investigation?
        </Label>
        <RadioGroup
          value={(data.disciplinaryInvestigation as string) || ""}
          onValueChange={(v) => updateData({ disciplinaryInvestigation: v })}
          className="flex flex-wrap gap-6"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="yes" id="disciplinary-yes" />
            <Label htmlFor="disciplinary-yes" className="cursor-pointer font-normal">
              Yes
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="no" id="disciplinary-no" />
            <Label htmlFor="disciplinary-no" className="cursor-pointer font-normal">
              No
            </Label>
          </div>
        </RadioGroup>
      </div>

      <div className="space-y-2">
        <Label htmlFor="platformGuidelines" className="font-semibold">
          Are you comfortable following our platform guidelines?
        </Label>
        <Select
          value={(data.platformGuidelines as string) || ""}
          onValueChange={(v) => updateData({ platformGuidelines: v })}
        >
          <SelectTrigger className="bg-background">
            <SelectValue placeholder="" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="yes">Yes, I agree to follow all guidelines</SelectItem>
            <SelectItem value="review">I would like to review them first</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-3">
        <Label className="font-semibold">Consent for Background Verification</Label>
        <RadioGroup
          value={(data.backgroundVerification as string) || ""}
          onValueChange={(v) => updateData({ backgroundVerification: v })}
          className="flex flex-wrap gap-6"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="yes" id="background-yes" />
            <Label htmlFor="background-yes" className="cursor-pointer font-normal">
              Yes, I agree
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="no" id="background-no" />
            <Label htmlFor="background-no" className="cursor-pointer font-normal">
              No
            </Label>
          </div>
        </RadioGroup>
      </div>

      <div className="space-y-2">
        <Label className="font-semibold">
          Upload Signed Self-Declaration of Ethical Practice
        </Label>
        <FileUpload
          label="Upload Signed Self-Declaration"
          accept="image/*,.pdf"
          value={(data.ethicalDeclaration as File) || null}
          onChange={(file) => updateData({ ethicalDeclaration: file })}
        />
      </div>
    </div>
  );
}
