import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

interface Step11Props {
  data: Record<string, unknown>;
  updateData: (data: Record<string, unknown>) => void;
}

const declarations = [
  { key: "accurateInfo", label: "All information submitted is accurate" },
  {
    key: "confidentiality",
    label:
      "I agree to VERYORA TECHNOLOGIES LLP's confidentiality, non-disclosure and conduct policies and conduct policies",
  },
  { key: "legalEthical", label: "I understand that legal and ethical standards will be strictly enforced" },
  { key: "noSoliciting", label: "I agree not to contact clients outside the platform or solicit them privately" },
  {
    key: "noPrescription",
    label: "I acknowledge the platform's no prescription, no diagnosis policy (where applicable)",
  },
  { key: "digitalStorage", label: "I consent to digital storage and verification of my documents" },
] as const;

export function Step11Declaration({ data, updateData }: Step11Props) {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="space-y-1">
        <h3 className="font-semibold text-lg">By signing below, I confirm that</h3>
      </div>

      <div className="space-y-4">
        {declarations.map(({ key, label }) => (
          <div key={key} className="flex items-start space-x-3">
            <Checkbox
              id={key}
              checked={Boolean(data[key])}
              onCheckedChange={(checked) => updateData({ [key]: checked === true })}
              className="mt-0.5"
            />
            <Label htmlFor={key} className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
              {label}
            </Label>
          </div>
        ))}
      </div>

      <div className="space-y-2 pt-4">
        <Label htmlFor="signatureFullName" className="font-semibold">
          Full Name
        </Label>
        <Input
          id="signatureFullName"
          value={(data.signatureFullName as string) || ""}
          onChange={(e) => updateData({ signatureFullName: e.target.value })}
          className="bg-background"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="signatureDate" className="font-semibold">
          Date
        </Label>
        <Input
          id="signatureDate"
          type="date"
          value={(data.signatureDate as string) || ""}
          onChange={(e) => updateData({ signatureDate: e.target.value })}
          className="bg-background"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="digitalSignature" className="font-semibold">
          Digital Signature (Type Name)
        </Label>
        <Input
          id="digitalSignature"
          value={(data.digitalSignature as string) || ""}
          onChange={(e) => updateData({ digitalSignature: e.target.value })}
          className="bg-background"
        />
      </div>
    </div>
  );
}
