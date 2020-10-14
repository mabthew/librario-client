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
    console.log(user)
    return (
      <div className="navbar-fixed">
        <nav className="z-depth-0">
          <div className="nav-wrapper white">
            <Link
              to="/"
              style={{
                fontFamily: "monospace"
              }}
              className="col s5 brand-logo center black-text"
            >
              librario
            </Link>
            <ul className="right">
              <li>
                {
                  user.id === undefined
                    ?
                    (
                      <div>

                        <Link
                          to="/register"
                          style={{
                            width: "140px",
                            borderRadius: "3px",
                            letterSpacing: "1.5px"
                          }}
                          className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                        >
                          Register
                        </Link>

                        <Link
                          to="/login"
                          style={{
                            width: "140px",
                            borderRadius: "3px",
                            letterSpacing: "1.5px"
                          }}
                          className="btn btn-large btn-flat waves-effect white black-text"
                        >
                          Log In
                        </Link>
                      </div>
                    )
                    :
                    (
                      <div
                        style={{
                          width: "140px",
                          borderRadius: "3px",
                          letterSpacing: "1.5px"
                        }}
                        className="btn btn-large btn-flat waves-effect white black-text"
                        onClick={this.onLogoutClick}

                      >
                        Logout
                      </div>
                    )
                }
              </li>
            </ul>

          </div>
        </nav>
      </div>
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
