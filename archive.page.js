export const layout = "layouts/archive.njk";
export const title = "Archive - Post Page - Tamil Kavithai Database";
export const pageTitle = "Kavithai index";

export default function* ({ search, paginate }) {
  const posts = search.pages("type=posts", "date=desc");

  for (
    const data of paginate(posts, { url, size: 3 })
  ) {
    // Show the first page in the menu
    if (data.pagination.page === 1) {
      data.menu = {
        title: "Blog",
        visible: true,
        order: 1,
      };
    }

    yield data;
  }
}

function url(n) {
  if (n === 1) {
    return "/posts/";
  }

  return `/page/${n}/`;
}
