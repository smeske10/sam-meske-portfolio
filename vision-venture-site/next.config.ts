import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Prevent output file tracing from walking above the project root in sandboxed environments.
  outputFileTracingRoot: path.join(__dirname),
};

export default nextConfig;
