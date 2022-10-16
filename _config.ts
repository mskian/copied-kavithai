import lume from "lume/mod.ts";
import date from "lume/plugins/date.ts";
import postcss from "lume/plugins/postcss.ts";
import terser from "lume/plugins/terser.ts";
import codeHighlight from "lume/plugins/code_highlight.ts";
import basePath from "lume/plugins/base_path.ts";
import slugifyUrls from "lume/plugins/slugify_urls.ts";
import resolveUrls from "lume/plugins/resolve_urls.ts";
import metas from "lume/plugins/metas.ts";
import minifyHTML from "lume/plugins/minify_html.ts";
import imagick from "lume/plugins/imagick.ts";
import { getLumeVersion } from "lume/core/utils.ts";
import pageFind from "lume/plugins/pagefind.ts";

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
  .copy("icons")
  .use(postcss())
  .use(terser())
  .use(codeHighlight())
  .use(basePath())
  .use(pageFind({
    ui: {
      resetStyles: false,
    }
  }))
  .use(slugifyUrls({ alphanumeric: false }))
  .use(resolveUrls())
  .use(metas())
  .loadAssets([".css", ".png", ".jpg", ".svg", ".webp", ".gif", ".jpeg"])
  .use(minifyHTML({
    extensions: [".css", ".html"],
  }))
  .use(imagick({
    extensions: [".jpg", ".png"],
  }))
  .use(date({
    locales: ["en-IN"],
  }));

site.process([".html"], (page) => {
  page.document.querySelectorAll("img").forEach((img) => {
    if (!img.hasAttribute("loading")) {
      img.setAttribute("loading", "lazy");
    }
  });
});

site.data("lume_version", getLumeVersion());

site.data("current_year", function () {
  const GetYear = new Date().getFullYear();
  return GetYear;
});

site.data("build_date", function () {
  const GetDate = new Date();
  return GetDate;
});

export default site;
