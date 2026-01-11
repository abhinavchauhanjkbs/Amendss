import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FileUpload } from "@/components/ui/file-upload";

interface Step6Props {
  data: Record<string, unknown>;
  updateData: (data: Record<string, unknown>) => void;
}

export function Step6Specialisation({ data, updateData }: Step6Props) {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="space-y-2">
        <Label htmlFor="specialisation" className="font-semibold">
          Nature of Specialisation
        </Label>
        <Select
          value={(data.natureOfSpecialisation as string) || ""}
          onValueChange={(v) => updateData({ natureOfSpecialisation: v })}
        >
          <SelectTrigger className="bg-background">
            <SelectValue placeholder="" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="clinical">Clinical Psychology</SelectItem>
            <SelectItem value="counseling">Counseling Psychology</SelectItem>
            <SelectItem value="health">Health Psychology</SelectItem>
            <SelectItem value="neuro">Neuropsychology</SelectItem>
            <SelectItem value="forensic">Forensic Psychology</SelectItem>
            <SelectItem value="child">Child &amp; Adolescent</SelectItem>
            <SelectItem value="geriatric">Geriatric</SelectItem>
            <SelectItem value="sexual">Sexual Health</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label className="font-semibold">Upload Sexual Health Training Certification</Label>
        <FileUpload
          label="Upload Sexual Health Training Certification"
          accept="image/*,.pdf"
          value={(data.sexualHealthCertification as File) || null}
          onChange={(file) => updateData({ sexualHealthCertification: file })}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="experienceHandling" className="font-semibold">
          Experience Handling
        </Label>
        <Select
          value={(data.experienceHandling as string) || ""}
          onValueChange={(v) => updateData({ experienceHandling: v })}
        >
          <SelectTrigger className="bg-background">
            <SelectValue placeholder="" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="individual">Individual Sessions</SelectItem>
            <SelectItem value="couples">Couples Sessions</SelectItem>
            <SelectItem value="group">Group Therapy</SelectItem>
            <SelectItem value="family">Family Therapy</SelectItem>
            <SelectItem value="all">All of the above</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
