import React, { Component } from "react";

var books = require('google-books-search');

class Book extends Component {
    constructor() {
        super();
        this.state = {
            book: {}
        };
    }

    componentDidMount() {
        books.search(this.props.match.params.id, (error, results) => {
            if (!error) {
                this.setState({ book: results[0] });
            } else {
                console.log(error);
            }
        });
    }

    render() {
        const { book } = this.state;
        return (
            <div className="book-container">
                <div className="row">{book.title}</div>
                <div className="row"><img src={book.thumbnail}></img></div>
                <div className="row">{book.authors}</div>
            </div>
        );
    }
}

export default Book;
