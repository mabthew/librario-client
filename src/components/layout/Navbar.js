import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../../actions/authActions";

class Navbar extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;
    return (
      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper">
            <Link
              to="/"
              style={{
                fontFamily: "monospace",
                color: "#004d40"
              }}
              className="col s5 brand-logo center"
            >
              librario
            </Link>
            {
              user.id === undefined
                ?
                (
                  <ul className="right hide-on-med-and-down">
                    <li> <button className="dropdown-trigger hide href-button" data-target="dropdown"><i className="large material-icons teal-text center">person</i></button></li>
                    <li>
                      <Link
                        to="/register"
                        style={{
                          width: "140px",
                          borderRadius: "3px",
                          letterSpacing: "1.5px"
                        }}
                        className="btn btn-large waves-effect waves-light hoverable teal lighten-2 white-text"
                      >
                        Register
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/login"
                        style={{
                          width: "140px",
                          borderRadius: "3px",
                          letterSpacing: "1.5px"
                        }}
                        className="btn btn-large waves-effect waves-light hoverable white"
                      >
                        Log In
                      </Link>
                    </li>
                  </ul>
                )
                :
                (
                  <ul className="right hide-on-med-and-down">
                    <li> <button className="dropdown-trigger href-button" data-target="dropdown"><i className="large material-icons teal-text center">person</i></button></li>
                  </ul>
                )
            }
            <ul id="dropdown" className="dropdown-content">
              <li>
                <p>{user.name}</p>
              </li>
              <li>
                <a href="/dashboard">Dashboard</a>
              </li>
              <li>
                <a href="/profile">My Account</a>
              </li>
              <li onClick={this.onLogoutClick}>
                <button className="href-button">Log out</button>
              </li>
            </ul>
          </div>
        </nav>
      </div >
    );
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Navbar);
