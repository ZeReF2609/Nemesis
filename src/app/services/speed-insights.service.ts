import { Injectable } from "@angular/core";

/**
 * Service to initialize and manage Vercel Speed Insights
 * Speed Insights helps track and monitor Core Web Vitals and other performance metrics
 */
@Injectable({
  providedIn: "root",
})
export class SpeedInsightsService {
  constructor() {
    this.initializeSpeedInsights();
  }

  /**
   * Initialize Vercel Speed Insights
   * This should be called once during app bootstrap
   */
  private initializeSpeedInsights(): void {
    // Only initialize on client-side
    if (typeof window === "undefined") {
      return;
    }

    try {
      // Dynamically import and call injectSpeedInsights
      import("@vercel/speed-insights")
        .then((module) => {
          module.injectSpeedInsights();
        })
        .catch((error) => {
          console.warn("Failed to initialize Vercel Speed Insights:", error);
        });
    } catch (error) {
      console.warn("Failed to initialize Vercel Speed Insights:", error);
    }
  }
}
