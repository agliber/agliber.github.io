import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

function Support() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <main>
        <header className={clsx("hero hero--primary", styles.heroBanner)}>
          <div className="container">
            <h1>Customer Support</h1>
            <a
              href="docs/faq"
              className={clsx("button button--secondary button--lg")}
            >
              Answers to frequently asked questions
            </a>
            <br />
            <br />
            <a
              href="mailto:support@banqdrop.com"
              className={clsx("button button--secondary")}
            >
              Email support@banqdrop.com
            </a>
          </div>
        </header>
      </main>
    </Layout>
  );
}

export default Support;
