import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Button } from "react-bootstrap";

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
          <Container>
            <h1>Customer Support</h1>
            <Button style={{ marginTop: 40 }} variant="light" href="docs/faq">
              Answers to frequently asked questions
            </Button>
            <br />
            <Button
              style={{ marginTop: 20 }}
              variant="light"
              href="mailto:support@banqdrop.com"
            >
              Email support@banqdrop.com
            </Button>
          </Container>
        </header>
      </main>
    </Layout>
  );
}

export default Support;
