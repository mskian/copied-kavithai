import lume from "lume/mod.ts";
import date from "lume/plugins/date.ts";
import postcss from "lume/plugins/postcss.ts";
import terser from "lume/plugins/terser.ts";
import codeHighlight from "lume/plugins/code_highlight.ts";
import basePath from "lume/plugins/base_path.ts";
import slugifyUrls from "lume/plugins/slugify_urls.ts";
import resolveUrls from "lume/plugins/resolve_urls.ts";
import gpm from "https://deno.land/x/gpm@v0.5.0/mod.ts";
import metas from "lume/plugins/metas.ts";
import minify from "https://raw.githubusercontent.com/lumeland/experimental-plugins/main/minify/minify.ts";
import imagick from "lume/plugins/imagick.ts";
import { getLumeVersion } from "lume/core/utils.ts";

const site = lume({
  location: new URL("https://copied.kavithai.site/"),
});

site
  .ignore("README.md", "CHANGELOG.md", "node_modules", "LICENSE", "bulma.min.css", "styles.css")
  .copy("icons")
  .use(postcss())
  .use(terser())
  .use(codeHighlight())
  .use(basePath())
  .use(slugifyUrls({ alphanumeric: false }))
  .use(resolveUrls())
  .addEventListener(
    "beforeBuild",
    () => gpm(["oom-components/searcher"], "js/vendor"),
  )
  .use(metas())
  .loadAssets([".css", ".png", ".jpg", ".svg", ".webp", ".gif", ".jpeg"])
  .use(minify({
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

export default site;