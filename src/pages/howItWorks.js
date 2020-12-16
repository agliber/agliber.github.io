import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./styles.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Button, Row, Col, Image } from "react-bootstrap";

function Demo({ gifUrl, title }) {
  return (
    <Row
      className="justify-content-lg-center"
      style={{ marginTop: 50, marginBottom: 120 }}
    >
      <Col lg={4} style={{ marginBottom: 50 }}>
        <h1 class="hullard" style={{ textAlign: "center" }}>
          {title}
        </h1>
        {/*<p class="lead" style={{ textAlign: "center" }}>
          {title}
        </p>*/}
      </Col>
      <Col lg={6}>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "flex-start"
          }}
        >
          <Image
            style={{
              position: "absolute",
              zIndex: 1,
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)"
            }}
            height={785}
            src="https://res.cloudinary.com/dli8yhgfa/image/upload/v1608084854/Apple_iPhone_11_Black_copy_udribb.png"
          />
          <Image
            style={{
              position: "relative",
              margin: "auto",
              objectFit: "contain"
            }}
            height={710}
            src={gifUrl}
          />
        </div>
      </Col>
    </Row>
  );
}

function HowItWorks() {
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
            <h1 style={{ textAlign: "center" }}>How It Works</h1>
          </Container>
        </header>
        <Container>
          {/*<Demo
            title="1. Link your bank"
            gifUrl="https://res.cloudinary.com/dli8yhgfa/image/upload/v1608084773/ezgif.com-gif-maker_copy_3_uo2hqh.gif"
          />*/}
          <Demo
            title="Create buckets"
            gifUrl="https://res.cloudinary.com/dli8yhgfa/image/upload/v1608091089/createBucket_ximorh.gif"
          />
          <Demo
            title="Share with friends"
            gifUrl="https://res.cloudinary.com/dli8yhgfa/image/upload/v1608138951/addMember_nzvvdp.gif"
          />
          <Demo
            title="Deposit money"
            gifUrl="https://res.cloudinary.com/dli8yhgfa/image/upload/v1608139352/deposit_umphgn.gif"
          />
          <Demo
            title="Approve withdrawals"
            gifUrl="https://res.cloudinary.com/dli8yhgfa/image/upload/v1608139869/approveWithdrawal_kuj6e1.gif"
          />
        </Container>
      </main>
    </Layout>
  );
}

export default HowItWorks;
