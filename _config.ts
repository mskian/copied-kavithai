import lume from "lume/mod.ts";
import nunjucks from "lume/plugins/nunjucks.ts";
import date from "lume/plugins/date.ts";
import postcss from "lume/plugins/postcss.ts";
import terser from "lume/plugins/terser.ts";
import codeHighlight from "lume/plugins/code_highlight.ts";
import basePath from "lume/plugins/base_path.ts";
import slugifyUrls from "lume/plugins/slugify_urls.ts";
import resolveUrls from "lume/plugins/resolve_urls.ts";
import metas from "lume/plugins/metas.ts";
import minifyHTML from "lume/plugins/minify_html.ts";
import picture from "lume/plugins/picture.ts";
import transformImages from "lume/plugins/transform_images.ts";
import pagefind from "lume/plugins/pagefind.ts";
import { getCurrentVersion } from "lume/core/utils/lume_version.ts";
import "lume/types.ts";

const site = lume({
  location: new URL("https://kavithai.site/"),
});

site
  .ignore(
    "README.md",
    "CHANGELOG.md",
    "node_modules",
    "LICENSE",
    "bulma.min.css",
    "styles.css",
  )
  .copy(".well-known")
  .copy("icons")
  .use(nunjucks())
  .use(terser())
  .use(postcss())
  .use(codeHighlight())
  .use(basePath())
  .use(pagefind())
  .use(slugifyUrls({
    alphanumeric: false,
  }))
  .use(resolveUrls())
  .use(picture())
  .use(transformImages())
  .use(metas())
  .use(minifyHTML())
  .use(date());

site.data("lume_version", getCurrentVersion());
site.add("style.css");
site.copy("img");

site.add("sw.js");
site.add("js/flying.js");

site.data("current_year", () => {
  return new Date().getFullYear();
});

site.data("build_date", () => {
  return new Date();
});

site.process([".html"], (pages) => {
  console.log("Adding lazy loading to images...");

  for (const page of pages) {
    const images = page.document?.querySelectorAll("img");

    images?.forEach((img) => {
      if (!img.hasAttribute("loading")) {
        img.setAttribute("loading", "lazy");
      }

      if (!img.hasAttribute("decoding")) {
        img.setAttribute("decoding", "async");
      }
    });
  }
});

export default site;