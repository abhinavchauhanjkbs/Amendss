import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { FileUpload } from "@/components/ui/file-upload";

interface Step9Props {
  data: Record<string, unknown>;
  updateData: (data: Record<string, unknown>) => void;
}

export function Step9Profile({ data, updateData }: Step9Props) {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="space-y-2">
        <Label htmlFor="displayName" className="font-semibold">
          Display Name (Optional for Privacy)
        </Label>
        <Input
          id="displayName"
          value={(data.displayName as string) || ""}
          onChange={(e) => updateData({ displayName: e.target.value })}
          className="bg-background"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="bio" className="font-semibold">
          Short Professional Bio (40-100 words)
        </Label>
        <Textarea
          id="bio"
          value={(data.professionalBio as string) || ""}
          onChange={(e) => updateData({ professionalBio: e.target.value })}
          className="bg-background min-h-[100px]"
          placeholder=""
        />
      </div>

      <div className="space-y-2">
        <Label className="font-semibold">Upload Profile Picture</Label>
        <FileUpload
          label="Upload Profile Picture"
          accept="image/*"
          value={(data.profilePicture as File) || null}
          onChange={(file) => updateData({ profilePicture: file })}
        />
      </div>

      <div className="space-y-2">
        <Label className="font-semibold">Introduction Video (20-30sec)</Label>
        <FileUpload
          label="Upload Introduction Video"
          accept="video/*"
          value={(data.introductionVideo as File) || null}
          onChange={(file) => updateData({ introductionVideo: file })}
        />
      </div>
    </div>
  );
}
