import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FileUpload } from "@/components/ui/file-upload";

interface Step10Props {
  data: Record<string, unknown>;
  updateData: (data: Record<string, unknown>) => void;
}

export function Step10Banking({ data, updateData }: Step10Props) {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="space-y-2">
        <Label htmlFor="accountHolderName" className="font-semibold">
          Account Holder Name
        </Label>
        <Input
          id="accountHolderName"
          value={(data.accountHolderName as string) || ""}
          onChange={(e) => updateData({ accountHolderName: e.target.value })}
          className="bg-background"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="bankName" className="font-semibold">
          Bank Name
        </Label>
        <Input
          id="bankName"
          value={(data.bankName as string) || ""}
          onChange={(e) => updateData({ bankName: e.target.value })}
          className="bg-background"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="accountNumber" className="font-semibold">
          Account Number
        </Label>
        <Input
          id="accountNumber"
          value={(data.accountNumber as string) || ""}
          onChange={(e) => updateData({ accountNumber: e.target.value })}
          className="bg-background"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="ifscCode" className="font-semibold">
          IFSC Code
        </Label>
        <Input
          id="ifscCode"
          value={(data.ifscCode as string) || ""}
          onChange={(e) => updateData({ ifscCode: e.target.value })}
          className="bg-background"
        />
      </div>

      <div className="space-y-2">
        <Label className="font-semibold">Upload PAN Card</Label>
        <FileUpload
          label="Upload PAN Card"
          accept="image/*,.pdf"
          value={(data.panCard as File) || null}
          onChange={(file) => updateData({ panCard: file })}
        />
      </div>

      <div className="space-y-2">
        <Label className="font-medium tracking-normal">GST Details (if applicable)</Label>
        <FileUpload
          label="Upload GST Certificate"
          accept="image/*,.pdf"
          value={(data.gstDetails as File) || null}
          onChange={(file) => updateData({ gstDetails: file })}
        />
      </div>
    </div>
  );
}
