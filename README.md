# Stand and Build Website

This website uses [11ty](https://www.11ty.dev/) static website generator with [Netlify CMS](https://www.netlifycms.org/) and is deployed via [Netlify](https://www.netlify.com/). Images are hosted on [Cloudinary](https://cloudinary.com/). Manage admin access to the CMS through [Netlify Identity](https://www.netlify.com/).

## Getting Started

Install all dependencies using npm:

```
$ nvm use
$ npm install
```

### To Develop

```
$ npm run dev
```
 And in debug mode:
 
```
$ npm run dev:debug
```

You can view the website at the given access URL:
```
$ light-server is listening at http://localhost:4000
```

The local url is configured in `.lightserverrc`

The CMS is set up to generate commits on the `publish` branch. When developing additional features, make sure to merge (and probably squash) the `publish` branch to master as a first step. When done make sure to update the `publish` branch with your changes.

### To Build

```
npm run build
```

### To Deploy

This project is intended to be deployed on Netlify (though it could be deployed elsewhere). 
Any commits to the `publish` branch will automatically be deployed. Also, any pull requests
will generate a deploy preview.

## Netlify CMS

This project uses [Netlify CMS](https://www.netlifycms.org/), which is available at `/admin/`. When developing locally, you should first log in to the CMS on the live site, which will cache your credentials so you can access the CMS on localhost. If the CMS will not load on localhost, check to make sure you have `netlifySiteURL: https://www.standandbuild.com/` cached in local storage.

Remember that the CMS, even when developing locally, pulls the data files (files in the `src/_data`) folder from remote github repo on the branch specified in the `admin/config.yml`, not your local copy. You can temporarily change the `backend: branch:` to your feature branch to make developing easier, but make sure its set to `publish` on the live site.

## Deventy

This project uses [Deventy](https://github.com/ianrose/deventy):

A minimal 11ty starting point for building static websites with modern tools. Uses the CLI of each tool. Allowing a much easier upgrade path for each individual development tool.

Features:
- [11ty](https://www.11ty.io/)
- [Sass/SCSS](https://github.com/sass/node-sass)
- [Webpack](https://webpack.js.org/)
- [Babel](https://babeljs.io/)
- [light-server](https://github.com/txchen/light-server)
- [PostCSS](https://postcss.org/)
- [CSSnano](https://cssnano.co/)
- [Autoprefixer](https://github.com/postcss/autoprefixer)
