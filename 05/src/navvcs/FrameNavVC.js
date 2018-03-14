import React from 'react';
import Nav from '../components/NavView';

class FrameNavVC extends React.Component {
  render() {
    return (
      <div className="frame">
        <div className="header">
          <Nav />
        </div>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default FrameNavVC;
