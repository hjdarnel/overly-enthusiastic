import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Footer from '../components/Footer';
import profilePic from '../assets/personal.jpg';
import { rhythm } from '../utils/typography';

import get from 'lodash/get';
import { graphql } from 'gatsby';

class About extends React.Component {
  render() {
    const siteTitle = get(this.props, 'data.site.siteMetadata.title');

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="About Henry" />
        <main>
          <h1>About Me</h1>
          <div style={{ display: 'flex' }}>
            <p>
              Hi, I'm Henry! Thanks for checking out my blog! <br />
              <br />
              A little about me - I'm a full stack software engineer, currently
              based out of Northwest Arkansas. <br />
              <br />
              I'm interested in the modern web, currently proficient with
              Angular frontends, NodeJS backends, and experienced with
              Kubernetes. <br />
              <br />I love to learn new things. Want to talk, or hire me to
              learn new things with your company? Reach out via email: henry at
              darnell.io
            </p>
            <img
              src={profilePic}
              alt={`Henry Darnell`}
              style={{
                marginRight: rhythm(1 / 2),
                marginBottom: 0,
                height: rhythm(10),
                borderRadius: '50%',
              }}
            />
          </div>
        </main>
        <Footer />
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query About {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export default About;
