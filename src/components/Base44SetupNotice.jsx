import { AlertCircle } from "lucide-react";
import { isBase44Configured } from "@/lib/base44-config";

export default function Base44SetupNotice() {
  if (isBase44Configured) {
    return null;
  }

  return (
    <div className="mb-6 p-4 rounded-lg bg-amber-500/10 border border-amber-500/30 text-sm">
      <div className="flex gap-3">
        <AlertCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
        <div className="space-y-2 text-foreground">
          <p className="font-medium">Base44 configuration required</p>
          <p className="text-muted-foreground">
            Copy <code className="text-xs bg-muted px-1 py-0.5 rounded">.env.example</code> to{" "}
            <code className="text-xs bg-muted px-1 py-0.5 rounded">.env.local</code> and set your
            Base44 app credentials, then restart the dev server.
          </p>
          <pre className="text-xs bg-muted p-3 rounded-lg overflow-x-auto text-muted-foreground">
{`VITE_BASE44_APP_ID=your_app_id
VITE_BASE44_APP_BASE_URL=https://your-app.base44.app`}
          </pre>
        </div>
      </div>
    </div>
  );
}
