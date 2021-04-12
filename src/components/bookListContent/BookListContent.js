import React from "react";
import Book from "./book/Book";
//enums
import { SHELF } from "../../constants/enums";

/**
 * Book List Content Component
 * @param {Object} props
 * @param {Functiom} handleShelfUpdate handles the Change of Shelf for a book
 * @param {Array} book_records_currently Array of currently reading books (STATE)
 * @param {Array} book_records_want Array of want to read books (STATE)
 * @param {Array} book_records_read Array of read books (STATE)
 */
const BookListContent = ({
  handleShelfUpdate,
  book_records_currently,
  book_records_want,
  book_records_read,
}) => {
  return (
    <div className="list-books-content">
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Currently Reading</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {book_records_currently.map((bk, index) => (
                <li key={`currently-${bk?.id}`}>
                  <Book
                    shelf={SHELF.CURRENTLY}
                    handleShelfUpdate={(newShelf) => {
                      handleShelfUpdate(bk, newShelf);
                    }}
                    backgroundImage={bk?.imageLinks?.thumbnail}
                    title={bk?.title}
                    authors={bk?.authors.join()}
                  />
                </li>
              ))}
            </ol>
          </div>
        </div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Want to Read</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {book_records_want.map((bk) => (
                <li key={`want-${bk?.id}`}>
                  <Book
                    shelf={SHELF.WANT}
                    handleShelfUpdate={(newShelf) => {
                      handleShelfUpdate(bk, newShelf);
                    }}
                    backgroundImage={bk?.imageLinks?.thumbnail}
                    title={bk?.title}
                    authors={bk?.authors.join()}
                  />
                </li>
              ))}
            </ol>
          </div>
        </div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Read</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {book_records_read.map((bk, index) => (
                <li key={`read-${bk?.id}`}>
                  <Book
                    shelf={SHELF.READ}
                    handleShelfUpdate={(newShelf) => {
                      handleShelfUpdate(bk, newShelf);
                    }}
                    backgroundImage={bk?.imageLinks?.thumbnail}
                    title={bk?.title}
                    authors={bk?.authors.join()}
                  />
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookListContent;
