export const url = "/api.json";

export default function ({ search }, { url }) {
  const result = [];

  // Search tags
  for (const tag of search.values("tags")) {
    result.push({
      label: `Tag: ${tag}`,
      search: tag,
      value: url(`/tag/${tag}/`),
    });
  }

  // Search posts
  for (const post of search.pages("type=posts")) {
    result.push({
      label: post.title,
      search: `${post.title} ${post.tags.join(" ")}`,
      value: url(post.url),
    });
  }

  return JSON.stringify(result);
}
