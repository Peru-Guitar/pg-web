"use client";

import { useEffect } from "react";
import ReactGA from "react-ga4";

import { googleAnalyticsId } from "@/content/settings.json";

export default function GoogleAnalytics() {
  useEffect(() => {
    if (window.location.hostname !== "localhost") {
      ReactGA.initialize(googleAnalyticsId);
      console.info("GA Initialized");
    }
  }, []);

  return null;
}
