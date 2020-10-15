import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Suggestions from "./Suggestions"
var books = require('google-books-search');

class Search extends Component {
    constructor() {
        super();
        this.state = {
            books: [],
            results: [],
        };
        this.timeout = 0;
    }

    doSearch(evt) {
        var query = evt.target.value;

        // only search after 300ms w/o input
        if (this.timeout) clearTimeout(this.timeout);

        this.timeout = setTimeout(() => {

            if (query !== '') {
                books.search(query, (error, results) => {
                    if (!error) {
                        this.setState({ results });
                    } else {
                        console.log(error);
                    }
                });
            } else {
                this.setState({ results: [] });
            }
        }, 200);
    }

    render() {
        return (
            <div className="search-container">
                <div className="row">
                    <div className="col s8 offset-s2">
                        <input className="search-input" id="search-input" type="text" onChange={evt => this.doSearch(evt)} aplaceholder="Search books.."></input>
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
