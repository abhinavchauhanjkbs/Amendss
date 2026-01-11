import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { FileUpload } from "@/components/ui/file-upload";

interface Step1Props {
  data: Record<string, unknown>;
  updateData: (data: Record<string, unknown>) => void;
}

export function Step1Personal({ data, updateData }: Step1Props) {
  return (
    <div className="space-y-5 animate-fade-in">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="fullName" className="text-sm font-medium">
            Full Name
          </Label>
          <Input
            id="fullName"
            value={(data.fullName as string) || ""}
            onChange={(e) => updateData({ fullName: e.target.value })}
            className="w-full h-12 bg-background text-sm"
            placeholder="Enter your full name"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="gender" className="text-sm font-medium">
            Gender
          </Label>
          <Select
            value={(data.gender as string) || ""}
            onValueChange={(v) => updateData({ gender: v })}
          >
            <SelectTrigger className="w-full h-12 bg-background text-sm">
              <SelectValue placeholder="Select gender" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="male" className="text-sm sm:text-base">
                Male
              </SelectItem>
              <SelectItem value="female" className="text-sm sm:text-base">
                Female
              </SelectItem>
              <SelectItem value="other" className="text-sm sm:text-base">
                Other
              </SelectItem>
              <SelectItem value="prefer-not" className="text-sm sm:text-base">
                Prefer not to say
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="dob" className="text-sm font-medium">
            Date of Birth
          </Label>
          <Input
            id="dob"
            type="date"
            value={(data.dateOfBirth as string) || ""}
            onChange={(e) => updateData({ dateOfBirth: e.target.value })}
            className="w-full h-12 bg-background text-sm"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="contact" className="text-sm font-medium">
            Contact Number
          </Label>
          <Input
            id="contact"
            type="tel"
            value={(data.contactNumber as string) || ""}
            onChange={(e) => updateData({ contactNumber: e.target.value })}
            className="w-full h-12 bg-background text-sm"
            placeholder="+91 "
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label className="text-sm font-medium">Upload Government ID</Label>
          <div className="h-12 flex items-center">
            <FileUpload
              label="Upload Government ID"
              accept="image/*,.pdf"
              value={(data.governmentId as File) || null}
              onChange={(file) => updateData({ governmentId: file })}
              className="h-full w-full"
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm font-medium">
            Email Address
          </Label>
          <Input
            id="email"
            type="email"
            value={(data.email as string) || ""}
            onChange={(e) => updateData({ email: e.target.value })}
            className="w-full h-12 bg-background text-sm"
            placeholder="your.email@example.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="address" className="text-sm font-medium">
            Residential Address
          </Label>
          <Input
            id="address"
            value={(data.residentialAddress as string) || ""}
            onChange={(e) => updateData({ residentialAddress: e.target.value })}
            className="w-full h-12 bg-background text-sm"
            placeholder="Your complete address"
          />
        </div>
        <div className="space-y-2">
          <Label className="text-sm font-medium">Upload Recent Photograph</Label>
          <div className="h-12 flex items-center">
            <FileUpload
              label="Upload Recent Photograph"
              accept="image/*"
              className="h-full w-full"
              icon="camera"
              value={(data.photograph as File) || null}
              onChange={(file) => updateData({ photograph: file })}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="contactName" className="text-sm font-medium">
            Contact Name
          </Label>
          <Select
            value={(data.contactName as string) || ""}
            onValueChange={(v) => updateData({ contactName: v })}
          >
            <SelectTrigger className="w-full h-12 bg-background text-sm">
              <SelectValue placeholder="Select contact name" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="spouse">Spouse</SelectItem>
              <SelectItem value="parent">Parent</SelectItem>
              <SelectItem value="sibling">Sibling</SelectItem>
              <SelectItem value="friend">Friend</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="emergencyContact" className="text-sm font-medium">
            Emergency Contact
          </Label>
          <Select
            value={(data.emergencyContact as string) || ""}
            onValueChange={(v) => updateData({ emergencyContact: v })}
          >
            <SelectTrigger className="w-full h-12 bg-background text-sm">
              <SelectValue placeholder="Select emergency contact" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="same" className="text-sm">
                Same as contact number
              </SelectItem>
              <SelectItem value="different" className="text-sm">
                Different number
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="communication" className="text-sm font-medium">
          Preferred Communication
        </Label>
        <Select
          value={(data.preferredCommunication as string) || ""}
          onValueChange={(v) => updateData({ preferredCommunication: v })}
        >
          <SelectTrigger className="w-full h-12 bg-background text-sm">
            <SelectValue placeholder="Select preferred communication" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="email">Email</SelectItem>
            <SelectItem value="phone">Phone</SelectItem>
            <SelectItem value="whatsapp">WhatsApp</SelectItem>
            <SelectItem value="sms">SMS</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-start space-x-3 pt-4">
        <Checkbox
          id="privacy"
          checked={(data.privacyConsent as boolean) || false}
          onCheckedChange={(checked) => updateData({ privacyConsent: checked === true })}
        />
        <Label
          htmlFor="privacy"
          className="text-sm text-muted-foreground leading-relaxed cursor-pointer"
        >
          See our Privacy Policy for details on how we handle your information. We never share or
          sell your opt-in information.
        </Label>
      </div>
    </div>
  );
}
