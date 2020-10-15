import React from 'react'
import history from '../../history'

const Suggestions = (props) => {
    const options = props.results.map(book => (
        <li key={book.id} onClick={() => history.push(`/book/${book.id}`)}>
            <div className="row suggestion">
                <div className="col s3">
                    {
                        book.thumbnail === undefined
                            ?
                            ''
                            :
                            (
                                <img className="thumbnail" src={book.thumbnail} alt="book thumbnail"></img>
                            )
                    }

                </div>
                <div className="col s9">
                    <p className="suggestion-title" >
                        {
                            book.title
                                ?
                                book.title.length > 50
                                    ?
                                    (book.title.substr(0, 50) + '...')
                                    :
                                    (book.title)
                                : ''
                        }
                    </p>
                    <p className="suggestion-author" >
                        {
                            book.authors
                                ? book.authors[0].length > 50
                                    ?
                                    "by " + (book.authors[0].substr(0, 50) + '...')
                                    :
                                    "by " + (book.authors[0])
                                : ''


                        }
                    </p>
                </div>
            </div>
            <div className="divider"></div>
        </li >

    ))
    return <ul>{options}</ul>
}

export default Suggestions