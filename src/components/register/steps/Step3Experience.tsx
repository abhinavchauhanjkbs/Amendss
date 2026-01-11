import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface Step3Props {
  data: Record<string, unknown>;
  updateData: (data: Record<string, unknown>) => void;
}

export function Step3Experience({ data, updateData }: Step3Props) {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="space-y-2">
        <Label htmlFor="yearsOfExperience" className="font-semibold">
          Years of Experience
        </Label>
        <Select
          value={(data.yearsOfExperience as string) || ""}
          onValueChange={(v) => updateData({ yearsOfExperience: v })}
        >
          <SelectTrigger className="bg-background">
            <SelectValue placeholder="" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="0-2">0-2 years</SelectItem>
            <SelectItem value="3-5">3-5 years</SelectItem>
            <SelectItem value="6-10">6-10 years</SelectItem>
            <SelectItem value="11-15">11-15 years</SelectItem>
            <SelectItem value="15+">15+ years</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="practiceType" className="font-semibold">
          Primary Practice Type
        </Label>
        <Select
          value={(data.primaryPracticeType as string) || ""}
          onValueChange={(v) => updateData({ primaryPracticeType: v })}
        >
          <SelectTrigger className="bg-background">
            <SelectValue placeholder="" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="private">Private Practice</SelectItem>
            <SelectItem value="hospital">Hospital</SelectItem>
            <SelectItem value="clinic">Clinic</SelectItem>
            <SelectItem value="telehealth">Telehealth Only</SelectItem>
            <SelectItem value="mixed">Mixed Practice</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="languages" className="font-semibold">
          Language Spoken
        </Label>
        <Select
          value={(data.languageSpoken as string) || ""}
          onValueChange={(v) => updateData({ languageSpoken: v })}
        >
          <SelectTrigger className="bg-background">
            <SelectValue placeholder="" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="english">English</SelectItem>
            <SelectItem value="hindi">Hindi</SelectItem>
            <SelectItem value="tamil">Tamil</SelectItem>
            <SelectItem value="telugu">Telugu</SelectItem>
            <SelectItem value="kannada">Kannada</SelectItem>
            <SelectItem value="malayalam">Malayalam</SelectItem>
            <SelectItem value="bengali">Bengali</SelectItem>
            <SelectItem value="marathi">Marathi</SelectItem>
            <SelectItem value="gujarati">Gujarati</SelectItem>
            <SelectItem value="multiple">Multiple Languages</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
