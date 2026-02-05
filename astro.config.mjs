import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

export default defineConfig({
    site: "https://norihelys.github.io",
    base: "/portafolio",

    i18n: {
        defaultLocale: "es",
        locales: ["es", "en"],
        routing: { prefixDefaultLocale: false },
    },

    integrations: [sitemap()],
});
