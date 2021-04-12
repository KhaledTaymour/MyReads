import React from "react";
import { Link } from "react-router-dom";
import Book from "../bookListContent/book/Book";
//enums
import { SHELF } from "../../constants/enums";

/**
 *
 * @param {Object} props
 * @param {Array} searchedBooks Array of books coming from search
 * @param {Functiom} handleSearch handles the searching
 * @param {Functiom} handleShelfUpdate handles the Change of Shelf for a book
 * @param {Array} book_records_currently Array of currently reading books (STATE)
 * @param {Array} book_records_want Array of want to read books (STATE)
 * @param {Array} book_records_read Array of read books (STATE)
 */
const SearchPage = ({
  searchedBooks,
  handleSearch,
  handleShelfUpdate,
  book_records_currently,
  book_records_want,
  book_records_read,
}) => {
  const handleChangingSearchText = (searchedText) => {
    handleSearch(searchedText);
  };

  /**
   * takes book id & check if it is already in our library
   * @param {String} bookId
   * @returns book shelf
   */
  const checkBookShelf = (bookId) => {
    const curr = book_records_currently.find((rec) => {
      return rec.id === bookId;
    });
    if (curr) return SHELF.CURRENTLY;

    const want = book_records_want.find((rec) => {
      return rec.id === bookId;
    });
    if (want) return SHELF.WANT;

    const read = book_records_read.find((rec) => {
      return rec.id === bookId;
    });
    if (read) return SHELF.READ;

    //else return nothing
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/">
          <button
            className="close-search"
            onClick={() => {
              handleChangingSearchText(" ");
            }}
          >
            Close
          </button>
        </Link>

        <div className="search-books-input-wrapper">
          {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
          <input
            type="text"
            placeholder="Search by title or author"
            onChange={(e) => {
              const searchedText = e.target.value;
              handleChangingSearchText(searchedText);
            }}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {searchedBooks?.length > 0 &&
            searchedBooks.map((bk) => (
              <li key={`currently-${bk?.id}`}>
                <Book
                  shelf={checkBookShelf(bk?.id)}
                  handleShelfUpdate={(newShelf) => {
                    handleShelfUpdate(bk, newShelf);
                  }}
                  backgroundImage={bk?.imageLinks?.thumbnail}
                  title={bk?.title}
                  authors={bk?.authors?.join()}
                />
              </li>
            ))}
        </ol>
      </div>
    </div>
  );
};

export default SearchPage;
