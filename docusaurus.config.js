module.exports = {
  title: 'banqdrop',
  tagline: 'Making Managing Money as Easy as Managing Digital Files',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  favicon: 'banqdropFavicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'banqdrop',
      logo: {
        alt: 'Banqdrop logo',
        src: 'logo.png',
      },
      links: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Terms of Use',
          position: 'left',
        },
        ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          items: [
            {
              label: 'Terms of Service',
              to: 'docs/termsOfService',
            },
            {
              label: 'Privacy Policy',
              to: 'docs/privacyPolicy',
            },
          ],
        },
        {
          items: [
            {
              label: 'Acceptable Use Policy',
              to: 'docs/acceptableUsePolicy',
            },
            {
              label: 'Consent to Receive Electronic Disclosures',
              href: 'docs/consentToReceiveElectronicDisclosures',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Banqdrop, LLC.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'termsOfService',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/agliber/agliber.github.io',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
