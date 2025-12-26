import { bootstrapApplication } from "@angular/platform-browser";
import { appConfig } from "./app/app.config";
import { AppComponent } from "./app/app.component";
import { Analytics } from "@vercel/analytics/next";
import { injectSpeedInsights } from "@vercel/speed-insights";

// Initialize Vercel Speed Insights for performance monitoring
injectSpeedInsights();

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err),
);
