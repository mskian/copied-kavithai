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
import pageFind from "lume/plugins/pagefind.ts";
import { getCurrentVersion } from "lume/core/utils/lume_version.ts";

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
  .use(nunjucks())
  .copy(".well-known")
  .copy("icons")
  .use(postcss())
  .use(terser())
  .use(codeHighlight())
  .use(basePath())
  .use(pageFind())
  .use(slugifyUrls({ alphanumeric: false }))
  .use(resolveUrls())
  .use(metas())
  .loadAssets([".css", ".png", ".jpg", ".svg", ".webp", ".gif", ".jpeg"])
  .use(minifyHTML({
    extensions: [".css", ".html"],
  }))
  .use(picture())
  .use(transformImages())
  .use(date());

site.data("lume_version", getCurrentVersion());

site.data("current_year", function () {
  const GetYear = new Date().getFullYear();
  return GetYear;
});

site.data("build_date", function () {
  const GetDate = new Date();
  return GetDate;
});

export default site;
