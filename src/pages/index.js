import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card } from "react-bootstrap";

const cards = [
  // {
  //   imgUrl: "img/mockProfileScreen.png",
  //   title: "Your personal funds",
  //   description: "Test Description"
  // },
  {
    src:
      "https://res.cloudinary.com/dli8yhgfa/image/upload/v1607732789/mockAllBucketsScreen_mpskvp.png",
    title: "Get Organized",
    description: "Jointly manage funds with friends"
  },
  {
    src:
      "https://res.cloudinary.com/dli8yhgfa/image/upload/v1607732789/mockBucketScreen_xqytpn.png",
    title: "Collect and Spend",
    description: "Track money in and out"
  },
  {
    src:
      "https://res.cloudinary.com/dli8yhgfa/image/upload/v1607732789/mockBucketInfoScreen_ee5d3z.png",
    title: "Share Securely",
    description: "Control what people can see and do"
  }
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx("col col--4", styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout title={`${siteConfig.title}`} description={siteConfig.tagline}>
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <img src={useBaseUrl("img/logo_horizontal.svg")} />
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={[styles.buttons]}>
            <Row>
              <Col style={{ marginTop: 20 }}>
                <a
                  href="mailto:support@banqdrop.com"
                  className={clsx("button button--secondary")}
                >
                  Join the Beta
                </a>
              </Col>
            </Row>
          </div>
        </div>
      </header>
      <main>
        <Container fluid>
          <Row>
            {cards.map((card, index) => {
              return (
                <Col style={{ marginTop: 20 }} xl="4">
                  <Card>
                    <Card.Body>
                      <Card.Title as="h1" style={{ textAlign: "center" }}>
                        {card.title}
                      </Card.Title>
                      <Card.Text style={{ textAlign: "center" }}>
                        {card.description}
                      </Card.Text>
                      <Card.Img variant="top" src={card.src} />
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </main>
    </Layout>
  );
}

export default Home;
