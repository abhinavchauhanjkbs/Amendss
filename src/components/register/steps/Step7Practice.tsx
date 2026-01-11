import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface Step7Props {
  data: Record<string, unknown>;
  updateData: (data: Record<string, unknown>) => void;
}

export function Step7Practice({ data, updateData }: Step7Props) {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="space-y-2">
        <Label htmlFor="affiliations" className="font-semibold">
          Current Professional Affiliations
        </Label>
        <Select
          value={(data.professionalAffiliations as string) || ""}
          onValueChange={(v) => updateData({ professionalAffiliations: v })}
        >
          <SelectTrigger className="bg-background">
            <SelectValue placeholder="" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="hospital">Hospital</SelectItem>
            <SelectItem value="clinic">Private Clinic</SelectItem>
            <SelectItem value="ngo">NGO</SelectItem>
            <SelectItem value="university">University/College</SelectItem>
            <SelectItem value="independent">Independent Practice</SelectItem>
            <SelectItem value="multiple">Multiple Affiliations</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="patients" className="font-semibold">
          Number of Patients
        </Label>
        <Select
          value={(data.numberOfPatients as string) || ""}
          onValueChange={(v) => updateData({ numberOfPatients: v })}
        >
          <SelectTrigger className="bg-background">
            <SelectValue placeholder="" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1-50">1-50 patients/month</SelectItem>
            <SelectItem value="51-100">51-100 patients/month</SelectItem>
            <SelectItem value="101-200">101-200 patients/month</SelectItem>
            <SelectItem value="200+">200+ patients/month</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="sessionMode" className="font-semibold">
          Willing to Conduct Session in
        </Label>
        <Select
          value={(data.sessionMode as string) || ""}
          onValueChange={(v) => updateData({ sessionMode: v })}
        >
          <SelectTrigger className="bg-background">
            <SelectValue placeholder="" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="online">Online Only</SelectItem>
            <SelectItem value="offline">Offline Only</SelectItem>
            <SelectItem value="both">Both Online & Offline</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="workingSlots" className="font-semibold">
          Preferred Working Slots
        </Label>
        <Select
          value={(data.preferredWorkingSlots as string) || ""}
          onValueChange={(v) => updateData({ preferredWorkingSlots: v })}
        >
          <SelectTrigger className="bg-background">
            <SelectValue placeholder="" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="morning">Morning (6 AM - 12 PM)</SelectItem>
            <SelectItem value="afternoon">Afternoon (12 PM - 5 PM)</SelectItem>
            <SelectItem value="evening">Evening (5 PM - 9 PM)</SelectItem>
            <SelectItem value="night">Night (9 PM - 12 AM)</SelectItem>
            <SelectItem value="flexible">Flexible</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
