import React from 'react';
import profilePic from '../assets/profile-pic.jpg';
import { rhythm } from '../utils/typography';

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2),
        }}
      >
        <img
          src={profilePic}
          alt={`Henry Darnell`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
            borderRadius: '50%',
          }}
        />
        <p style={{ maxWidth: 500 }}>
          A technical blog by <a href="/about">Henry Darnell</a>. Sometimes I
          stay up too late thinking about silly things. I'll write about some of
          them here.
        </p>
      </div>
    );
  }
}

export default Bio;
