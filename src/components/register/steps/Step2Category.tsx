import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface Step2Props {
  data: Record<string, unknown>;
  updateData: (data: Record<string, unknown>) => void;
}

export function Step2Category({ data, updateData }: Step2Props) {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="space-y-2">
        <Label htmlFor="professionalCategory" className="font-semibold">
          Professional Category
        </Label>
        <Select
          value={(data.professionalCategory as string) || ""}
          onValueChange={(v) => updateData({ professionalCategory: v })}
        >
          <SelectTrigger className="bg-background">
            <SelectValue placeholder="" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="psychologist">Psychologist</SelectItem>
            <SelectItem value="psychiatrist">Psychiatrist</SelectItem>
            <SelectItem value="counselor">Counselor</SelectItem>
            <SelectItem value="therapist">Therapist</SelectItem>
            <SelectItem value="sexologist">Sexologist</SelectItem>
            <SelectItem value="gynecologist">Gynecologist</SelectItem>
            <SelectItem value="urologist">Urologist</SelectItem>
            <SelectItem value="dermatologist">Dermatologist</SelectItem>
            <SelectItem value="general-physician">General Physician</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
