"use client";

import { datadogRum } from "@datadog/browser-rum";
import { PropsWithChildren } from "react";

datadogRum.init({
  applicationId: process.env.NEXT_PUBLIC_APPLICATION_ID,
  clientToken: process.env.NEXT_PUBLIC_CLIENT_TOKEN,
  site: "ap1.datadoghq.com",
  service: "nextjs-with-datadog",
  env: "dev",
  sessionSampleRate: 100,
  sessionReplaySampleRate: 20,
  trackUserInteractions: true,
  trackResources: true,
  trackLongTasks: true,
  defaultPrivacyLevel: "mask-user-input",
});

export const RUM = ({ children }: PropsWithChildren) => {
  return <div>{children}</div>;
};
