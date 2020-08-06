# adamliber.github.io

The official [Banqdrop website](https://banqdrop.com) built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static site generator.

**All development should be done in `docusaurus` branch**

#### Installation

Clone this repository to your local computer then run:

```
npm install
```

#### Local Development

```
npm start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

#### Deployment

```
GIT_USER=<Your GitHub username> npm run deploy
```

On Github, the website will be deployed to `master` branch because this is a repository ending in `github.io`.

##### After successful deployment you must ensure the custom domain is saved properly.

1. Go to the Github repository's 'Settings' tab
2. Scroll to 'GitHub Pages' section
3. Enter `banqdrop.com` into 'Custom domain' subsection field
4. Press 'Save'

For more deployment info see https://v2.docusaurus.io/docs/deployment
