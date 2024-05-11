export async function register() {
  if (process.env.NEXT_RUNTIME === "nodejs") {
    const { tracer } = await import("dd-trace");

    tracer.init({
      logInjection: true,
      env: "dev",
      service: "nextjs-with-datadog",
    });

    tracer.use("next");
  }
}
