import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import BrowserOnly from "@docusaurus/BrowserOnly";
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
              <h3>
                Please open the link on your device where Banqdrop is installed
              </h3>
              <h4>It should direct you into the app</h4>
              <hr />
              <p>
                You probably got here by opening your email verification link on
                your computer (or other device than where the Banqdrop app is
                installed)
              </p>
              <p></p>
            </Alert>
            <h1>OR</h1>
            <BrowserOnly>
              {() => (
                <Alert variant="primary">
                  <h3>
                    If you are already on your device where Banqdrop is
                    installed
                  </h3>
                  <p>
                    Please click this link:{" "}
                    <a
                      href={window.location.href.replace(
                        "https://banqdrop.com",
                        "banqdrop://"
                      )}
                      style={{ color: "blue" }}
                    >
                      Sign into Banqdrop
                    </a>
                  </p>
                </Alert>
              )}
            </BrowserOnly>
          </Container>
        </header>
      </main>
    </Layout>
  );
}

export default Support;
