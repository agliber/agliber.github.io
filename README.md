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

#### References

- Cloudinary https://cloudinary.com/ for storing images
- react-bootstrap https://react-bootstrap.github.io/ user interface framework

#### Troubleshooting

##### Failed deployment

Errors:

```
remote: Repository not found.
fatal: repository 'https://github.com/banqdrop/banqdrop.git/' not found
Error: Error: git clone failed

remote: This repository was archived so it is read-only.
fatal: unable to access 'https://github.com/agliber/banqdrop.git/': The requested URL returned error: 403
```

This could be caused by a problem with Check `PROJECT_NAME` environment variable
Try `$ printenv` to view bash environment variables and remove `PROJECT_NAME` by `$ unset PROJECT_NAME`
