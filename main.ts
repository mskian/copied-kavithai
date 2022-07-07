import blog from "https://raw.githubusercontent.com/mskian/deno-blog-boilerplate/main/blog.tsx";
import { UNOCSS_OPTS } from './unocss.ts';

blog({
  title: "Kavithai Database",
  description: "Tamil Kavithai Database - Copied Kavithai from Tamil Kavithai Website's and Tamil Quotes Blog.",
  avatar: "https://images.weserv.nl/?url=https://kavithai.tamilsms.blog/wp-content/uploads/2022/07/home.png",
  avatarClass: "rounded-full",
  ogImage: "https://images.weserv.nl/?url=https://kavithai.tamilsms.blog/wp-content/uploads/2022/06/tamil-kavithai-database.png",
  author: "Tamil SMS",
  background: "#f9f9f9",
  unocss: UNOCSS_OPTS,
  theme: 'dark',
  links: [
    { title: "GitHub", url: "https://github.com/mskian/copied-kavithai" },
    { title: "Instagram", url: "https://instagram.com/tamilsms" },
  ],
});