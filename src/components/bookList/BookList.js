import React from "react";
import BookListContent from "../bookListContent/BookListContent";
import { Link } from "react-router-dom";

/**
 * Book List Component
 * @param {Object} props
 * @param {Functiom} handleShelfUpdate handles the Change of Shelf for a book
 * @param {Array} book_records_currently Array of currently reading books (STATE)
 * @param {Array} book_records_want Array of want to read books (STATE)
 * @param {Array} book_records_read Array of read books (STATE)
 */
const BookList = ({
  handleShelfUpdate,
  book_records_currently,
  book_records_want,
  book_records_read,
}) => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <BookListContent
        handleShelfUpdate={handleShelfUpdate}
        book_records_currently={book_records_currently}
        book_records_want={book_records_want}
        book_records_read={book_records_read}
      />
      <div className="open-search">
        <Link to="/search">
          <button>Add a book</button>
        </Link>
      </div>
    </div>
  );
};

export default BookList;
