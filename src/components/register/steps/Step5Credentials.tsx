import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FileUpload } from "@/components/ui/file-upload";

interface Step5Props {
  data: Record<string, unknown>;
  updateData: (data: Record<string, unknown>) => void;
}

export function Step5Credentials({ data, updateData }: Step5Props) {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="space-y-2">
        <Label htmlFor="qualification" className="font-semibold">
          Highest Qualification
        </Label>
        <Select
          value={(data.highestQualification as string) || ""}
          onValueChange={(v) => updateData({ highestQualification: v })}
        >
          <SelectTrigger className="bg-background">
            <SelectValue placeholder="" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="bachelors">Bachelor&apos;s Degree</SelectItem>
            <SelectItem value="masters">Master&apos;s Degree</SelectItem>
            <SelectItem value="doctorate">Doctorate (PhD/PsyD)</SelectItem>
            <SelectItem value="md">MD</SelectItem>
            <SelectItem value="mbbs">MBBS</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="institution" className="font-semibold">
          Name of Institution
        </Label>
        <Input
          id="institution"
          value={(data.institution as string) || ""}
          onChange={(e) => updateData({ institution: e.target.value })}
          className="bg-background"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="yearOfCompletion" className="font-semibold">
          Year of Completion
        </Label>
        <Input
          id="yearOfCompletion"
          value={(data.yearOfCompletion as string) || ""}
          onChange={(e) => updateData({ yearOfCompletion: e.target.value })}
          className="bg-background"
        />
      </div>

      <div className="space-y-2">
        <Label className="font-semibold">Upload Degree</Label>
        <FileUpload
          label="Upload Degree"
          accept="image/*,.pdf"
          value={(data.degreeCertificate as File) || null}
          onChange={(file) => updateData({ degreeCertificate: file })}
        />
      </div>
    </div>
  );
}
