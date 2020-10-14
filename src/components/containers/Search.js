import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class Search extends Component {
    constructor() {
        super();
        this.state = {
            query: '',
            books: []
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const target = e.target;

        this.setState({ query: target.value });
    }

    render() {
        const { query } = this.state;
        return (
            <div className="row">
                <div className="col s6 offset-s3">
                    <input type="text" value={query} onChange={this.handleChange} placeholder="Search books.."></input>
                </div>
            </div>
        );
    }
}

Search.propTypes = {
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(
    mapStateToProps,
    {}
)(Search);
