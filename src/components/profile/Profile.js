import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getAccountInfo } from "../../actions/accountActions";

class Profile extends Component {

    constructor() {
        super();
        this.state = {
            accountInfo: {}
        };
    }

    componentDidMount() {
        const user_id = this.props.auth.user.id;
        this.props.getAccountInfo({ user_id: user_id });
    }


    render() {
        const { user } = this.props.auth;
        const { accountInfo } = this.props.accountInfo;
        return (
            <div>
                <div className="row" style={{ marginBottom: "0px" }}>
                    <div className="col s3 offset-s1"><h4>{user.name}</h4></div>
                </div>
                <div className="divider"></div>
                <div className="account-container">
                    <div className="row">
                        <div className="col s3 offset-s1">Email: {accountInfo.email}</div>
                    </div>
                </div>
            </div>
        );
    }
}

Profile.propTypes = {
    getAccountInfo: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    accountInfo: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    accountInfo: state.accountInfo
});

export default connect(
    mapStateToProps,
    { getAccountInfo }
)(Profile);
