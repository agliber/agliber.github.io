import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Button, Alert } from "react-bootstrap";

function Support() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout title={`${siteConfig.title}`}>
      <main>
        <header className={clsx("hero hero--primary", styles.heroBanner)}>
          <Container>
            <h2>Welcome to the Banqdrop website! </h2>
            <br />
            <Alert variant="primary">
              <h1>
                Please open the link on your device where Banqdrop is installed
              </h1>
              <p>It will you direct you into the app</p>
            </Alert>
            <h6>
              You probably got here by opening your email verification link on
              your computer
            </h6>
            <p>(or other device than where the Banqdrop app is installed)</p>
          </Container>
        </header>
      </main>
    </Layout>
  );
}

export default Support;
