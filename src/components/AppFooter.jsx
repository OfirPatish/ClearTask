import { APP_CONFIG } from "@/constants";

export function AppFooter() {
  return (
    <div className="text-center mt-8 text-sm text-muted-foreground">
      <p>{APP_CONFIG.tagline}</p>
    </div>
  );
} 