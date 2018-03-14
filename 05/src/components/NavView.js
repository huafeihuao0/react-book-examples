import React from 'react';
import { Link } from 'react-router';

class NavView extends React.Component {
  render() {
    return (
      <nav>
        <Link to="/">Home</Link>
      </nav>
    );
  }
}

export default NavView;
