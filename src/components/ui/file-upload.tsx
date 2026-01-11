import * as React from "react";
import { Upload, Camera } from "lucide-react";
import { cn } from "@/lib/utils";

interface FileUploadProps {
  label: string;
  accept?: string;
  icon?: "upload" | "camera";
  value?: File | null;
  onChange?: (file: File | null) => void;
  className?: string;
}

export function FileUpload({
  label,
  accept,
  icon = "upload",
  value,
  onChange,
  className,
}: FileUploadProps) {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleClick = () => {
    inputRef.current?.click();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    onChange?.(file);
  };

  const Icon = icon === "camera" ? Camera : Upload;

  return (
    <div className={cn("upload-field", className)} onClick={handleClick}>
      <span className="text-muted-foreground text-sm truncate flex-1">
        {value ? value.name : label}
      </span>
      <Icon className="w-5 h-5 text-muted-foreground flex-shrink-0" />
      <input
        ref={inputRef}
        type="file"
        accept={accept}
        onChange={handleChange}
        className="hidden"
      />
    </div>
  );
}
