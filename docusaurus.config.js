module.exports = {
  title: "banqdrop",
  tagline: "Making managing money as easy as managing digital files",
  url: "https://banqdrop.com",
  baseUrl: "/",
  favicon: "banqdropFavicon.ico",
  organizationName: "agliber", // Usually your GitHub org/user name.
  projectName: "agliber.github.io", // Usually your repo name.
  themeConfig: {
    disableDarkMode: true,
    defaultDarkMode: false,
    navbar: {
      title: "banqdrop",
      logo: {
        alt: "Banqdrop logo",
        src: "logo.png"
      },
      links: [
        {
          to: "docs/termsOfService",
          activeBasePath: "docs/termsOfService",
          label: "Legal",
          position: "left"
        },
        {
          label: "Customer Support",
          to: "support",
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
