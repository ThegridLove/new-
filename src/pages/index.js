import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

const IndexPage = () => (
  <main style={styles.main}>
    <Helmet>
      <style>{`
        body, html {
          margin: 0;
          padding: 0;
          font-family: Arial, sans-serif;
          color: #ffffff;
        }

        #hero {
          background: url('/images/hero-bg.png') no-repeat center center/cover;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .hero-content {
          background: rgba(0, 0, 0, 0.6); /* Dark overlay for readability */
          padding: 20px;
          border-radius: 10px;
        }

        .hero-content h1 {
          font-size: 3em;
          margin: 0 0 20px 0;
          color: #f1c40f; /* Gold color */
        }

        .hero-content p {
          font-size: 1.5em;
          margin: 0 0 20px 0;
        }

        .cta-button {
          display: inline-block;
          padding: 10px 20px;
          background-color: #f1c40f; /* Gold color */
          color: #000;
          text-decoration: none;
          font-weight: bold;
          border-radius: 5px;
          transition: background-color 0.3s ease;
        }

        .cta-button:hover {
          background-color: #d4ac0d; /* Darker gold color */
        }
      `}</style>
    </Helmet>

    <section id="hero">
      <div className="hero-content">
        <h1>Setting the Gold Standard in DeFi Innovation</h1>
        <p>Qualified Developers, Established Business Owners, and Creatives Leading the Way</p>
        <a href="#join" className="cta-button">Join Us Today</a>
      </div>
    </section>
  </main>
);

const styles = {
  main: {
    margin: 0,
    padding: 0,
  },
};

export default IndexPage;