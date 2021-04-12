import React from "react";
import Book from "./book/Book";

const BookListContent = ({
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
                <li id={`currently-${index}`}>
                  <Book
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
              {book_records_want.map((bk, index) => (
                <li id={`currently-${index}`}>
                  <Book
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
                <li id={`currently-${index}`}>
                  <Book
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
