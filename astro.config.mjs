import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// Your Cloudflare domain
export default defineConfig({
  site: "https://connietrinh.com",
  integrations: [sitemap()],
});
