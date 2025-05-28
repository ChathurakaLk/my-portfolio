import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://2c97cbc4ac08050956658acdd6880c3a@o4509399947411456.ingest.us.sentry.io/4509399948787712",
  integrations: [
    Sentry.feedbackIntegration({
      // Additional SDK configuration goes in here, for example:
      colorScheme: "system",
    }),
  ],
});
