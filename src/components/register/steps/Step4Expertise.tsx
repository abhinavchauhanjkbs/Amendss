import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface Step4Props {
  data: Record<string, unknown>;
  updateData: (data: Record<string, unknown>) => void;
}

export function Step4Expertise({ data, updateData }: Step4Props) {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="space-y-2">
        <Label htmlFor="generalExpertise" className="font-semibold">
          General Expertise
        </Label>
        <Select
          value={(data.generalExpertise as string) || ""}
          onValueChange={(v) => updateData({ generalExpertise: v })}
        >
          <SelectTrigger className="bg-background">
            <SelectValue placeholder="" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="anxiety">Anxiety Disorders</SelectItem>
            <SelectItem value="depression">Depression</SelectItem>
            <SelectItem value="trauma">Trauma & PTSD</SelectItem>
            <SelectItem value="relationships">Relationship Issues</SelectItem>
            <SelectItem value="addiction">Addiction</SelectItem>
            <SelectItem value="eating">Eating Disorders</SelectItem>
            <SelectItem value="personality">Personality Disorders</SelectItem>
            <SelectItem value="ocd">OCD</SelectItem>
            <SelectItem value="general">General Mental Health</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="sexualHealthExpertise" className="font-semibold">
          Sexual Health Expertise
        </Label>
        <Select
          value={(data.sexualHealthExpertise as string) || ""}
          onValueChange={(v) => updateData({ sexualHealthExpertise: v })}
        >
          <SelectTrigger className="bg-background">
            <SelectValue placeholder="" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="dysfunction">Sexual Dysfunction</SelectItem>
            <SelectItem value="identity">Gender & Sexual Identity</SelectItem>
            <SelectItem value="intimacy">Intimacy Issues</SelectItem>
            <SelectItem value="reproductive">Reproductive Health</SelectItem>
            <SelectItem value="education">Sexual Education</SelectItem>
            <SelectItem value="trauma">Sexual Trauma</SelectItem>
            <SelectItem value="none">Not Applicable</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="therapyModalities" className="font-semibold">
          Therapy Modalities
        </Label>
        <Select
          value={(data.therapyModalities as string) || ""}
          onValueChange={(v) => updateData({ therapyModalities: v })}
        >
          <SelectTrigger className="bg-background">
            <SelectValue placeholder="" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="cbt">Cognitive Behavioral Therapy (CBT)</SelectItem>
            <SelectItem value="dbt">Dialectical Behavior Therapy (DBT)</SelectItem>
            <SelectItem value="psychodynamic">Psychodynamic Therapy</SelectItem>
            <SelectItem value="humanistic">Humanistic Therapy</SelectItem>
            <SelectItem value="emdr">EMDR</SelectItem>
            <SelectItem value="family">Family Therapy</SelectItem>
            <SelectItem value="couples">Couples Therapy</SelectItem>
            <SelectItem value="integrative">Integrative Approach</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
