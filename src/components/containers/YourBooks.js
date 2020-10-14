import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getYourBooks } from "../../actions/booksActions";

class YourBooks extends Component {
    constructor() {
        super();
        this.state = {
            books: []
        };
    }

    componentDidMount() {
        const user_id = this.props.auth.user.id;
        this.props.getYourBooks({ user_id: user_id });
    }

    render() {
        const { books } = this.props.books;
        return (
            <div className="book-container">
                {
                    books.length === 0
                        ?
                        (
                            <div>
                                You have no books in your library yet. Add books you've read or want to read by searching above!
                            </div>
                        )
                        :
                        books.map((book) => {
                            return (
                                <div>
                                    {book.title}
                                </div>
                            )
                        })
                }
            </div>
        );
    }
}

YourBooks.propTypes = {
    getYourBooks: PropTypes.func.isRequired,
    books: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    books: state.books,
    auth: state.auth,
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { getYourBooks }
)(YourBooks);
