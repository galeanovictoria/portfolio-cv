import { defineConfig } from "astro/config";
import editableRegions from "@cloudcannon/editable-regions/astro-integration";

export default defineConfig({
  site: "https://victoriaroberts.co.nz/",
  integrations: [editableRegions()],
});
