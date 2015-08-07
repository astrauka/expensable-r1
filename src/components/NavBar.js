import {Link} from 'react-router';
import React, {PropTypes} from 'react';

class NavBar {
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <ul className="nav navbar-nav">
            <li><Link to="/">Expensable</Link></li>
            <li><Link to="/sign-up">Sign Up</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default
class NavBarContainer {
  render() {
    return <NavBar/>;
  }
}
