import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

class Header extends Component {
  renderContent() {
    const { auth } = this.props;

    switch (auth) {
      case null:
        return;
      case false:
        return (
          <li><a href="/auth/google" onClick={this.signIn}>Login With Google</a></li>
        )
      default:
        return [
          <li key="1"><Payments /></li>,
          <li key="2" style={{ margin: '0px 10px'}}>
            Credits: {auth.credits}
          </li>,
          <li key="3"><a href="api/logout">Logout</a></li>
        ];
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link
            className="left brand-logo"
            to={this.props.auth ? '/surveys' : '/'}
          >
            Emaily
          </Link>
          <ul className="right">
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    )
  }
}

function mapStateToProps(state) {
  const { auth } = state;

  return {
    auth
  };
}

export default connect(mapStateToProps)(Header);
