# Copied Kavithai

[![Deploy on Server](https://github.com/mskian/copied-kavithai/actions/workflows/server_deploy.yml/badge.svg)](https://github.com/mskian/copied-kavithai/actions/workflows/server_deploy.yml)  

Kavithai Storage Blog - Copied Kavithai From Tamil Kavithai Sites, Facebook Profiles, and Twitter Profiles - Tamil Kavithai and Tamil Quotes Status.  

> தமிழ் கவிதை Site - தமிழ்க்கவிதை தளங்கள், ஃபேஸ்புக் பக்கங்கள், மற்றும் ட்விட்டர் பக்கங்களில் இருந்து நகலெடுக்கப்பட்ட கவிதைகள் - Tamil Kavithai Database.  

Build using lume.land - Static site generator for Deno

> Tamil Kavithai Database

## Servers

- Live Site - <https://kavithai.site>

## Create your's

Build your Own Blog - <https://github.com/lumeland/base-blog>

- Clone or Download repo

```sh
git clonehttps://github.com/mskian/copied-kavithai.git
cd copied-kavithai
```

- Content was Managed in the Folder `/posts`
- test

```sh
deno task serve
```

- Production

```sh
deno task build
```

- Purge CSS

```sh
purgecss --css ./_includes/css/bulma.min.css --content "./_includes/**/*.njk" "**/*.njk" "**/*.md"  "./_site/**/*.html" -o ./_includes/css/app.css
```

## LICENSE

MIT
