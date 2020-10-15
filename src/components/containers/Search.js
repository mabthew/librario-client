import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Suggestions from "./Suggestions"
var books = require('google-books-search');

class Search extends Component {
    constructor() {
        super();
        this.state = {
            query: '',
            books: [],
            results: []
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const query = e.target.value;
        this.setState({ query });

        if (query !== '') {
            books.search(query, (error, results) => {
                if (!error) {
                    console.log(results);
                    this.setState({ results });
                } else {
                    console.log(error);
                }
            });
        } else {
            this.setState({ results: [] });
        }
    }

    render() {
        const { query } = this.state;
        return (
            <div className="search-container">
                <div className="row">
                    <div className="col s6 offset-s2">
                        <input className="search-input" type="text" value={query} onChange={this.handleChange} placeholder="Search books.."></input>
                        <Suggestions results={this.state.results} ></Suggestions>
                    </div>
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
