import React from 'react';
import '../stylesheets/News.css';

const News = () => {
  return (
    <div className="newsSectionContainer">
      <h1 style={{ fontSize: '50px' }}>NEWS TODAY</h1>
      <div className="newsContainer">
        <img src="https://images.unsplash.com/photo-1502773860571-211a597d6e4b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"></img>
        <ul>
          <li>THIS GOES HERE</li>
          <li>THIS</li>
          <li>THIS</li>
        </ul>
      </div>
    </div>
  );
};

export default News;
