module.exports = {
  title: "Banqdrop",
  tagline: "Money as easy as a group chat",
  url: "https://banqdrop.com",
  baseUrl: "/",
  favicon: "img/banqdropFavicon.ico",
  organizationName: "agliber", // Usually your GitHub org/user name.
  projectName: "agliber.github.io", // Usually your repo name.
  themeConfig: {
    disableDarkMode: true,
    defaultDarkMode: false,
    navbar: {
      title: "banqdrop",
      logo: {
        alt: "Banqdrop logo",
        src: "img/logo_square.svg"
      },
      links: [
        {
          label: "How It Works",
          to: "howItWorks",
          position: "left"
        },
        {
          label: "FAQ",
          to: "docs/faq",
          position: "left"
        }
      ]
    },
    footer: {
      style: "light",
      title: "legal",
      links: [
        {
          items: [
            {
              label: "Terms of Service",
              to: "docs/termsOfService"
            },
            {
              label: "Privacy Policy",
              to: "docs/privacyPolicy"
            },
            {
              label: "Acceptable Use Policy",
              to: "docs/acceptableUsePolicy"
            },
            {
              label: "Consent to Receive Electronic Disclosures",
              href: "docs/consentToReceiveElectronicDisclosures"
            }
          ]
        },
        {
          items: [
            {
              label: "Customer Support",
              to: "support"
            },
            {
              label: "FAQ",
              to: "docs/faq"
            }
          ]
        }
      ],

      copyright: `Copyright © ${new Date().getFullYear()} Banqdrop, LLC.`
    }
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: "docs/termsOfService",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/agliber/agliber.github.io/tree/docusaurus"
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      }
    ]
  ]
};
