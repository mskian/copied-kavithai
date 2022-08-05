export const url = "/api.json";

export default function ({ search }, { url }) {
  const result = [];

  // Search tags
  for (const tag of search.tags("type=posts")) {
    result.push({
      label: `Tag: ${tag}`,
      search: tag,
      value: url(`/tag/${tag}/`),
    });
  }

  // Search posts
  for (const post of search.pages("type=posts")) {
    result.push({
      label: post.data.title,
      search: `${post.data.title} ${post.data.tags.join(" ")}`,
      value: url(post.data.url),
    });
  }

  return JSON.stringify(result);
}
